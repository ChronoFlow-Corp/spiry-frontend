import {Injectable, signal, WritableSignal} from '@angular/core';

import {SidebarMobileStoreState} from '@store/sidebar-mobile/sidebar-mobile.store.type';

@Injectable({providedIn: 'root'})
export class SidebarMobileStore {
  readonly #isMenuShown: WritableSignal<boolean> = signal(false);

  readonly state: SidebarMobileStoreState = {
    isMenuShown: this.#isMenuShown.asReadonly(),
  };

  toggleMenu = (): void => this.#isMenuShown.update((v) => !v);
}
