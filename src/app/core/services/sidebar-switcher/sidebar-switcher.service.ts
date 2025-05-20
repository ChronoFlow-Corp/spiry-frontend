import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {debounceTime, fromEvent, Observable, tap} from 'rxjs';

import {SidebarMobileService} from '@service/sidebar-mobile/sidebar-mobile.service';
import {SidebarMobileComponent} from '@components/sidebar-mobile/sidebar-mobile.component';

@Injectable({providedIn: 'root'})
export class SidebarSwitcherService {
  readonly #sidebarMobileService = inject(SidebarMobileService);

  readonly #mobileQuery = window.matchMedia('(max-width: 767px)');
  readonly #sidebarMobileOverlay = this.#sidebarMobileService.init();

  readonly #isSidebarMobileOpened: WritableSignal<boolean> = signal(false);
  readonly #isSidebarDesktopOpened: WritableSignal<boolean> = signal(false);

  responsiveSidebar = (): Observable<Event> => {
    this.#switchSidebars();
    return fromEvent(window, 'resize').pipe(
      debounceTime(200),
      tap(() => this.#switchSidebars()),
    );
  };

  #switchSidebars = () => {
    const isMobile = this.#mobileQuery.matches;
    if (isMobile) {
      this.#closeDesktopSidebar();
      this.#openMobileSidebar();
    } else {
      this.#closeMobileSidebar();
      this.#openDesktopSidebar();
    }
  };

  #openMobileSidebar(): void {
    if (this.#isSidebarMobileOpened()) return;

    this.#sidebarMobileService.open(
      this.#sidebarMobileOverlay,
      this.#sidebarMobileService.create(
        this.#sidebarMobileOverlay,
        SidebarMobileComponent,
      ),
    );
    this.#isSidebarMobileOpened.set(true);
  }

  #closeMobileSidebar(): void {
    if (!this.#isSidebarMobileOpened()) return;

    this.#sidebarMobileService.close(this.#sidebarMobileOverlay);
    this.#isSidebarMobileOpened.set(false);
  }

  #openDesktopSidebar(): void {
    if (this.#isSidebarDesktopOpened()) return;

    this.#isSidebarDesktopOpened.set(true);
  }

  #closeDesktopSidebar(): void {
    if (!this.#isSidebarDesktopOpened()) return;

    this.#isSidebarDesktopOpened.set(false);
  }
}
