import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-sidebar-mobile-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileAccountInfoComponent {
  readonly #authService = inject(AuthService);

  $testId: InputSignal<string> = input.required({
    alias: 'testId',
    transform: (v) => v + '-' + 'account-info',
  });

  protected readonly $username = this.#authService.state.username;
  protected readonly $email = this.#authService.state.email;
}
