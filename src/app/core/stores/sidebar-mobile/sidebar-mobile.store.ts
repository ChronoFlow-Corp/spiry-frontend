import {inject, Injectable, signal, WritableSignal} from '@angular/core';

import {UtilsService} from '@service/utils/utils.service';
import {SidebarMobileStoreState} from '@store/sidebar-mobile/sidebar-mobile.store.type';

@Injectable({providedIn: 'root'})
export class SidebarMobileStore {
  readonly #utilsService = inject(UtilsService);

  readonly #$isMenuShown: WritableSignal<boolean> = signal(false);
  readonly #$isShown: WritableSignal<boolean> = signal(false);

  readonly state: SidebarMobileStoreState = {
    isMenuShown: this.#$isMenuShown.asReadonly(),
    isShown: this.#$isShown.asReadonly(),
  };

  toggleMenu(): void {
    this.#$isMenuShown.update((v) => !v);
    this.#changeIOSInfoBarColor();
  }

  closeMenu(): void {
    if (!this.#$isMenuShown()) return;

    this.#$isMenuShown.set(false);
    this.#changeIOSInfoBarColor();
  }

  setIsShown(isShown: boolean): void {
    this.#$isShown.set(isShown);
  }

  #changeIOSInfoBarColor(): void {
    this.#utilsService.changeIOSInfoBarColor(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(
          '--background-neutral-' + (this.#$isMenuShown() ? 'gray' : 'main'),
        )
        .trim(),
    );
  }
}
