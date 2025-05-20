import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
} from '@angular/core';

import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';
import {SidebarMobileAccountInfoComponent} from '@components/sidebar-mobile/account-info/account-info.component';
import {AuthService} from '@service/auth/auth.service';
import {SidebarMobileSignInComponent} from '@components/sidebar-mobile/sign-in/sign-in.component';
import {SidebarMobileMenuTabsComponent} from '@components/sidebar-mobile/menu-tabs/menu-tabs.component';

@Component({
  selector: '.shared-sidebar-mobile-menu',
  imports: [
    SidebarMobileAccountInfoComponent,
    SidebarMobileSignInComponent,
    SidebarMobileMenuTabsComponent,
  ],
  templateUrl: './sidebar-mobile-menu.component.html',
  styleUrl: './sidebar-mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileMenuComponent {
  readonly #authService = inject(AuthService);

  $testId: InputSignal<string> = input.required({
    alias: 'testId',
    transform: (v) => v + '-' + 'menu',
  });

  protected readonly $isAuthenticated = this.#authService.state.isAuthenticated;
  protected readonly $isMenuShown =
    inject(SidebarMobileStore).state.isMenuShown;
}
