import {inject, Injectable, signal, WritableSignal} from '@angular/core';

import {SidebarMobileStoreState} from '@store/sidebar-mobile/sidebar-mobile.store.type';
import {UtilsService} from '@service/utils/utils.service';

@Injectable({providedIn: 'root'})
export class SidebarMobileStore {
  readonly #utilsService = inject(UtilsService);

  readonly #$isMenuShown: WritableSignal<boolean> = signal(false);

  readonly state: SidebarMobileStoreState = {
    isMenuShown: this.#$isMenuShown.asReadonly(),
  };

  toggleMenu = (): void => {
    this.#$isMenuShown.update((v) => !v);
    this.#changeIOSInfoBarColor();
  };

  closeMenu = (): void => {
    if (!this.#$isMenuShown()) return;

    this.#$isMenuShown.set(false);
    this.#changeIOSInfoBarColor();
  };

  #changeIOSInfoBarColor = (): void =>
    this.#utilsService.changeIOSInfoBarColor(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(
          '--background-neutral-' + (this.#$isMenuShown() ? 'gray' : 'main'),
        )
        .trim(),
    );
}
