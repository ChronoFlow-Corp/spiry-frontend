import {NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-account-menu',
  imports: [NgOptimizedImage],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountMenuComponent {
  readonly #authService = inject(AuthService);

  protected readonly $isAuthenticated = this.#authService.state.isAuthenticated;
  protected readonly $avatarUrl = this.#authService.state.avatarUrl;
  protected readonly $username = this.#authService.state.username;
  protected readonly $subscription = this.#authService.state.subscription;

  signIn(): void {
    location.href = this.#authService.GOOGLE_AUTH_URL;
  }
}
