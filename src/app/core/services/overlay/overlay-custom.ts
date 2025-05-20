import {
  ComponentType,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {ComponentRef, inject} from '@angular/core';

export class OverlayCustom<T> {
  overlayRef!: OverlayRef;
  overlayComponentRef!: ComponentRef<T>;

  #componentPortal!: ComponentPortal<T>;

  readonly #overlay = inject(Overlay);

  initOverlay(
    component: ComponentType<T>,
    overlayConfig?: OverlayConfig,
  ): void {
    this.overlayRef = this.#overlay.create({...overlayConfig});
    this.#componentPortal = new ComponentPortal(component, null);
    this.overlayComponentRef = this.overlayRef.attach(this.#componentPortal);
  }
}
