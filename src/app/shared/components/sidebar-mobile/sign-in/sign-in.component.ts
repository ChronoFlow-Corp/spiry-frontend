import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-sidebar-mobile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileSignInComponent {
  readonly #authService = inject(AuthService);

  $testId: InputSignal<string> = input.required({
    alias: 'testId',
    transform: (v) => v + '-' + 'sign-in',
  });

  signIn(): void {
    location.href = this.#authService.GOOGLE_AUTH_URL;
  }
}
