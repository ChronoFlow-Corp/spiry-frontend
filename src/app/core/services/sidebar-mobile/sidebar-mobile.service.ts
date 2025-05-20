import {ComponentType, OverlayConfig} from '@angular/cdk/overlay';
import {
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
} from '@angular/core';
import {take} from 'rxjs';

import {SidebarMobileComponent} from '@components/sidebar-mobile/sidebar-mobile.component';
import {OverlayCustom} from '@service/overlay/overlay-custom';
import {SIDEBAR_MOBILE_OVERLAY_CONFIG} from '@service/sidebar-mobile/sidebar-mobile.service.type';

@Injectable({providedIn: 'root'})
export class SidebarMobileService {
  readonly #environmentInjector = inject(EnvironmentInjector);

  readonly #overlayConfig = SIDEBAR_MOBILE_OVERLAY_CONFIG;

  init(): OverlayCustom<SidebarMobileComponent> {
    return new OverlayCustom();
  }

  create(
    overlay: OverlayCustom<SidebarMobileComponent>,
    component: ComponentType<SidebarMobileComponent>,
    overlayConfig: OverlayConfig = this.#overlayConfig,
  ): ComponentRef<SidebarMobileComponent> {
    overlay.initOverlay(SidebarMobileComponent, overlayConfig);

    return createComponent(component, {
      environmentInjector: this.#environmentInjector,
      hostElement: overlay.overlayRef.overlayElement
        .firstElementChild as Element,
    });
  }

  open(overlay: OverlayCustom<SidebarMobileComponent>): void {
    if (!overlay?.overlayComponentRef) return;

    // this.#utilsService.blockDocument();
    overlay.overlayComponentRef.changeDetectorRef.detectChanges();

    if (overlay.overlayRef) {
      overlay.overlayRef
        .backdropClick()
        .pipe(take(1))
        .subscribe(() => this.close(overlay));
    }

    // overlay.overlayComponentRef.instance.closeEvent.subscribe((): void =>
    //   this.close(overlay),
    // );
  }

  close(overlay: OverlayCustom<SidebarMobileComponent>): void {
    if (!overlay) return;

    // this.#utilsService.unblockDocument();
    // overlay.overlayComponentRef.instance.ngOnDestroy();

    if (overlay.overlayComponentRef) {
      setTimeout(() => overlay.overlayComponentRef.destroy());
    }

    if (overlay.overlayRef) {
      setTimeout(() => overlay.overlayRef.dispose());
    }
  }
}
