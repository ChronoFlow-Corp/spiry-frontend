import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-sidebar-mobile-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileAccountInfoComponent {
  readonly #authService = inject(AuthService);

  protected readonly $username = this.#authService.state.username;
  protected readonly $email = this.#authService.state.email;
  protected readonly $initials = this.#authService.state.initials;
}
