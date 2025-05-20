import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.shared-sidebar-mobile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileSignInComponent {
  readonly #authService = inject(AuthService);

  signIn(): void {
    location.href = this.#authService.GOOGLE_AUTH_URL;
  }
}
