import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
  signal,
  WritableSignal,
} from '@angular/core';
import {debounceTime, fromEvent, Observable, tap} from 'rxjs';

import {SidebarMobileComponent} from '@components/sidebar-mobile/sidebar-mobile.component';
import {OverlayService} from '@service/overlay/overlay.service';
import {SidebarMobileService} from '@service/sidebar-mobile/sidebar-mobile.service';
import {OverlayCustom} from '@service/overlay/overlay-custom';
import {SIDEBAR_MOBILE_OVERLAY_CONFIG} from '@service/sidebar-mobile/sidebar-mobile.service.type';

@Injectable({providedIn: 'root'})
export class SidebarSwitcherService {
  readonly #overlayService = inject(OverlayService);
  readonly #sidebarMobileService = inject(SidebarMobileService);
  readonly #injector = inject(Injector);

  readonly #mobileQuery = window.matchMedia('(max-width: 767px)');

  readonly #isSidebarMobileOpened: WritableSignal<boolean> = signal(false);
  readonly #isSidebarDesktopOpened: WritableSignal<boolean> = signal(false);

  #sidebarMobileOverlay: OverlayCustom<SidebarMobileComponent> | null = null;

  responsiveSidebar = (): Observable<Event> => {
    this.#switchSidebars();
    return fromEvent(window, 'resize').pipe(
      debounceTime(10),
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

    runInInjectionContext(this.#injector, () => {
      this.#sidebarMobileOverlay =
        this.#overlayService.init<SidebarMobileComponent>();

      this.#overlayService.create(
        this.#sidebarMobileOverlay,
        SidebarMobileComponent,
        SIDEBAR_MOBILE_OVERLAY_CONFIG,
      );

      this.#sidebarMobileService.open(this.#sidebarMobileOverlay);
      this.#isSidebarMobileOpened.set(true);
    });
  }

  #closeMobileSidebar(): void {
    if (!this.#isSidebarMobileOpened()) return;

    if (this.#sidebarMobileOverlay) {
      this.#sidebarMobileService.close(this.#sidebarMobileOverlay);
      this.#sidebarMobileOverlay = null;
    }

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
