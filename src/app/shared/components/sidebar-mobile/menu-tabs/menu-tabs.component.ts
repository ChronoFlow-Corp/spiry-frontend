import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Component({
  selector: '.shared-sidebar-mobile-menu-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileMenuTabsComponent {
  readonly #sidebarMobileStore = inject(SidebarMobileStore);

  closeMenu(): void {
    // NOTE if true, user can't see tabs animation :(
    const needToCloseMenu = false;
    if (needToCloseMenu) this.#sidebarMobileStore.closeMenu();
  }
}
