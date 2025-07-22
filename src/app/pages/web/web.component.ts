import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import {filter, finalize, tap} from 'rxjs';

import {AccountMenuComponent} from '@components/account-menu/account-menu.component';
import {LoaderComponent} from '@components/loader/loader.component';
import {SidebarDesktopComponent} from '@components/sidebar-desktop/sidebar-desktop.component';
import {AuthService} from '@service/auth/auth.service';
import {SidebarSwitcherService} from '@service/sidebar-switcher/sidebar-switcher.service';
import {SidebarDesktopStore} from '@store/sidebar-desktop/sidebar-desktop.store';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';
import {
  AVAILABLE_TOOL_CATEGORIES,
  ToolCategory,
} from '@store/tool-category/tool-category.store.model';
import {ChatStore} from '@store/chat/chat.store';

@Component({
  selector: '.page-web',
  imports: [
    LoaderComponent,
    AccountMenuComponent,
    SidebarDesktopComponent,
    RouterOutlet,
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.flex]': 'true',
    '[class.sidebar-desktop-collapsed]': '$isSidebarDesktopCollapsed()',
  },
})
export class WebComponent implements OnInit {
  protected readonly testId = 'page-web';

  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #destroy = inject(DestroyRef);
  readonly #authService = inject(AuthService);
  readonly #sidebarSwitcherService = inject(SidebarSwitcherService);
  readonly #toolCategoryStore = inject(ToolCategoryStore);
  readonly #sidebarDesktopStore = inject(SidebarDesktopStore);
  readonly #chatStore = inject(ChatStore);

  protected readonly $isSidebarDesktopCollapsed =
    this.#sidebarDesktopStore.state.isCollapsed;
  protected readonly $isAuthenticationInProgress =
    this.#authService.state.isAuthenticationInProgress;

  ngOnInit(): void {
    this.#syncRouteToolCategoryWithStore();
    this.#syncChatIdWithStore();
    this.#subscribeOnParamsEvents();
    this.#subscribeOnRouterEvents();
    this.#sidebarSwitcherService
      .responsiveSidebar()
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe();
  }

  toggleSidebarDesktopIsCollapsed(): void {
    this.#sidebarDesktopStore.toggleIsCollapsed();
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
    if (!this.#router.url.startsWith('/web/category/')) return;

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

  #syncChatIdWithStore(): void {
    if (!this.#router.url.startsWith('/web/chat/')) return;

    const chatId =
      this.#activatedRoute.snapshot.firstChild?.paramMap.get('chatId');

    if (chatId) {
      this.#chatStore.setCurrentChatId(chatId);
      return;
    }

    this.#findChatIdInUrl();
  }

  #findChatIdInUrl(): void {
    const urlSegments: readonly string[] = this.#router.url.split('/');
    let chatIdFromUrl: string | null = null;

    const chatIdIndex = urlSegments.indexOf('chat');
    if (chatIdIndex !== -1 && urlSegments.length > chatIdIndex + 1) {
      const potentialChatId = urlSegments[chatIdIndex + 1];
      if (potentialChatId) {
        chatIdFromUrl = potentialChatId;

        if (urlSegments.length > chatIdIndex + 2) {
          chatIdFromUrl = urlSegments[chatIdIndex + 2];
        }
      }
    }

    if (chatIdFromUrl) this.#chatStore.setCurrentChatId(chatIdFromUrl);
  }

  #subscribeOnRouterEvents(): void {
    this.#router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => this.#syncRouteToolCategoryWithStore()),
        tap(() => this.#syncChatIdWithStore()),
        takeUntilDestroyed(this.#destroy),
      )
      .subscribe();
  }
}
