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

@Component({
  selector: '.page-web',
  imports: [LoaderComponent, AccountMenuComponent],
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
  readonly $isAuthenticationInProgress =
    this.#authService.state.isAuthenticationInProgress;
  readonly #sidebarSwitcherService = inject(SidebarSwitcherService);

  ngOnInit(): void {
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
}
