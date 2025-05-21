import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {LoaderComponent} from '@components/loader/loader.component';
import {AuthService} from '@service/auth/auth.service';
import {AccountMenuComponent} from '@components/account-menu/account-menu.component';
import {SidebarSwitcherService} from '@service/sidebar-switcher/sidebar-switcher.service';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';
import {
  AVAILABLE_TOOL_CATEGORIES,
  ToolCategory,
} from '@store/tool-category/tool-category.store.type';
import {PageWebMainComponent} from '@pages/web/main/main.component';

@Component({
  selector: '.page-web',
  imports: [LoaderComponent, AccountMenuComponent, PageWebMainComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent implements OnInit {
  protected readonly testId = 'page-web';

  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #destroy = inject(DestroyRef);
  readonly #authService = inject(AuthService);
  readonly #sidebarSwitcherService = inject(SidebarSwitcherService);
  readonly #toolCategoryStore = inject(ToolCategoryStore);

  protected readonly $isAuthenticationInProgress =
    this.#authService.state.isAuthenticationInProgress;

  ngOnInit(): void {
    this.#syncRouteToolCategoryWithStore();
    this.#subscribeOnParamsEvents();
    this.#sidebarSwitcherService
      .responsiveSidebar()
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe();
  }

  #handleProviderCallback(accessToken: string): void {
    // Used for Google login
    this.#authService
      .authenticateWithProvider(accessToken)
      .pipe(finalize(() => this.#router.navigateByUrl('/').then()))
      .subscribe();
  }

  #subscribeOnParamsEvents(): void {
    // Used for Google login
    this.#activatedRoute.queryParams
      .pipe(
        tap((params) => {
          const accessToken = params['access_token'];
          accessToken && this.#handleProviderCallback(accessToken);
        }),
        takeUntilDestroyed(this.#destroy),
      )
      .subscribe();
  }

  #syncRouteToolCategoryWithStore(): void {
    const urlSegments: readonly string[] = this.#router.url.split('/');
    let toolCategoryFromUrl: ToolCategory | null = null;
    let toolNameFromUrl: string | null = null;

    const toolCategoryIndex = urlSegments.indexOf('category');
    if (
      toolCategoryIndex !== -1 &&
      urlSegments.length > toolCategoryIndex + 1
    ) {
      const potentialToolCategory = urlSegments[toolCategoryIndex + 1];
      if (
        potentialToolCategory &&
        AVAILABLE_TOOL_CATEGORIES.includes(
          potentialToolCategory as ToolCategory,
        )
      ) {
        toolCategoryFromUrl = potentialToolCategory as ToolCategory;

        if (urlSegments.length > toolCategoryIndex + 2) {
          toolNameFromUrl = urlSegments[toolCategoryIndex + 2];
        }
      }
    }

    if (toolCategoryFromUrl !== this.#toolCategoryStore.state.currentCategory())
      this.#toolCategoryStore.selectCategory(toolCategoryFromUrl);

    if (toolNameFromUrl !== this.#toolCategoryStore.state.currentToolName())
      this.#toolCategoryStore.selectTool(toolNameFromUrl);
  }
}
