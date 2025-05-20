import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {SidebarMobileHeaderComponent} from '@components/sidebar-mobile/header/sidebar-mobile-header.component';
import {SidebarMobileMenuComponent} from '@components/sidebar-mobile/menu/sidebar-mobile-menu.component';
import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Component({
  selector: '.shared-sidebar-mobile',
  imports: [SidebarMobileHeaderComponent, SidebarMobileMenuComponent],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileComponent {
  protected readonly $isMenuShown =
    inject(SidebarMobileStore).state.isMenuShown;
}
