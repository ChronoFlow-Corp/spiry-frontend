import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';

import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Component({
  selector: '.shared-sidebar-mobile-header',
  imports: [RouterLink],
  templateUrl: './sidebar-mobile-header.component.html',
  styleUrl: './sidebar-mobile-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileHeaderComponent {
  readonly #sidebarMobileStore = inject(SidebarMobileStore);

  protected readonly $isMenuShown = this.#sidebarMobileStore.state.isMenuShown;

  toggleMenu(): void {
    this.#sidebarMobileStore.toggleMenu();
  }

  closeMenu(): void {
    this.#sidebarMobileStore.closeMenu();
  }
}
