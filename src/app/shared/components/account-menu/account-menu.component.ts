import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountMenuComponent {
  readonly #authService = inject(AuthService);

  protected readonly $isAuthenticated = this.#authService.state.isAuthenticated;
  protected readonly $initials = this.#authService.state.initials;

  signIn(): void {
    location.href = this.#authService.GOOGLE_AUTH_URL;
  }
}
