import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Component({
  selector: '.shared-sidebar-mobile-menu',
  templateUrl: './sidebar-mobile-menu.component.html',
  styleUrl: './sidebar-mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileMenuComponent {
  protected readonly $isMenuShown =
    inject(SidebarMobileStore).state.isMenuShown;
}
