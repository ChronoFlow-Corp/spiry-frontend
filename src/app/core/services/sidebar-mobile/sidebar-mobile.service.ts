import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
} from '@angular/core';
import {ComponentType, OverlayConfig} from '@angular/cdk/overlay';
import {take} from 'rxjs';

import {OverlayCustom} from '@service/overlay/overlay-custom';
import {SidebarMobileComponent} from '@components/sidebar-mobile/sidebar-mobile.component';

@Injectable({providedIn: 'root'})
export class SidebarMobileService {
  readonly #environmentInjector = inject(EnvironmentInjector);
  readonly #appRef = inject(ApplicationRef);

  readonly #overlayConfig: OverlayConfig = {
    hasBackdrop: false,
    panelClass: 'sidebar-mobile-panel',
  };

  init(): OverlayCustom<SidebarMobileComponent> {
    return new OverlayCustom();
  }

  create<T>(
    overlay: OverlayCustom<SidebarMobileComponent>,
    component: ComponentType<T>,
    overlayConfig: OverlayConfig = this.#overlayConfig,
  ): ComponentRef<T> {
    overlay.initOverlay(SidebarMobileComponent, overlayConfig);

    return createComponent(component, {
      environmentInjector: this.#environmentInjector,
      hostElement: overlay.overlayRef.overlayElement
        .firstElementChild as Element,
    });
  }

  open<T>(
    overlay: OverlayCustom<SidebarMobileComponent>,
    componentRef: ComponentRef<T>,
  ): void {
    // this.#utilsService.blockDocument();
    this.#appRef.attachView(componentRef.hostView);
    componentRef.changeDetectorRef.detectChanges();

    overlay.overlayRef
      .backdropClick()
      .pipe(take(1))
      .subscribe(() => this.close(overlay));

    // overlay.overlayComponentRef.instance.closeEvent.subscribe((): void =>
    //   this.close(overlay),
    // );
  }

  close(overlay: OverlayCustom<SidebarMobileComponent>): void {
    // this.#utilsService.unblockDocument();
    // overlay.overlayComponentRef.instance.ngOnDestroy();

    setTimeout(() => overlay.overlayComponentRef.destroy(), 300);
    setTimeout(() => overlay.overlayRef.dispose(), 500);
  }
}
