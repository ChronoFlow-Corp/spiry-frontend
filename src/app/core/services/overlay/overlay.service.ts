import {ComponentType, OverlayConfig} from '@angular/cdk/overlay';
import {Injectable} from '@angular/core';

import {OverlayCustom} from '@service/overlay/overlay-custom';

@Injectable({providedIn: 'root'})
export class OverlayService {
  init<T>(): OverlayCustom<T> {
    return new OverlayCustom();
  }

  create<T>(
    overlay: OverlayCustom<T>,
    component: ComponentType<T>,
    overlayConfig?: OverlayConfig,
  ): void {
    overlay.initOverlay(component, overlayConfig);
  }
}
