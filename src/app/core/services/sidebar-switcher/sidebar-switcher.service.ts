import {inject, Injectable} from '@angular/core';
import {debounceTime, fromEvent, Observable, tap} from 'rxjs';

import {SidebarMobileComponent} from '@components/sidebar-mobile/sidebar-mobile.component';
import {SidebarMobileStore} from '@core/stores/sidebar-mobile/sidebar-mobile.store';
import {OverlayService} from '@service/overlay/overlay.service';
import {SidebarMobileService} from '@service/sidebar-mobile/sidebar-mobile.service';
import {SIDEBAR_MOBILE_OVERLAY_CONFIG} from '@service/sidebar-mobile/sidebar-mobile.service.type';

@Injectable({providedIn: 'root'})
export class SidebarSwitcherService {
  readonly #overlayService = inject(OverlayService);
  readonly #sidebarMobileStore = inject(SidebarMobileStore);
  readonly #sidebarMobileService = inject(SidebarMobileService);

  readonly #mobileQuery = window.matchMedia('(max-width: 767px)');

  readonly #isSidebarMobileOpened = this.#sidebarMobileStore.state.isShown;

  readonly #sidebarMobileOverlay =
    this.#overlayService.init<SidebarMobileComponent>();

  responsiveSidebar(): Observable<Event> {
    this.#toggleMobileSidebar();
    return fromEvent(window, 'resize').pipe(
      debounceTime(10),
      tap(() => this.#toggleMobileSidebar()),
    );
  }

  #toggleMobileSidebar(): void {
    this.#mobileQuery.matches
      ? this.#openMobileSidebar()
      : this.#closeMobileSidebar();
  }

  #openMobileSidebar(): void {
    if (this.#isSidebarMobileOpened()) return;
    this.#overlayService.create(
      this.#sidebarMobileOverlay,
      SidebarMobileComponent,
      SIDEBAR_MOBILE_OVERLAY_CONFIG,
    );
    this.#sidebarMobileService.open(this.#sidebarMobileOverlay);
    this.#sidebarMobileStore.setIsShown(true);
  }

  #closeMobileSidebar(): void {
    if (!this.#isSidebarMobileOpened()) return;
    this.#sidebarMobileService.close(this.#sidebarMobileOverlay);
    this.#sidebarMobileStore.setIsShown(false);
    this.#sidebarMobileStore.closeMenu();
  }
}
