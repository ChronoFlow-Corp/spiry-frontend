import {Injectable, signal, WritableSignal} from '@angular/core';
import {SidebarDesktopStoreState} from '@store/sidebar-desktop/sidebar-desktop.store.type';

@Injectable({providedIn: 'root'})
export class SidebarDesktopStore {
  readonly #$isCollapsed: WritableSignal<boolean> = signal(false);
  readonly #$isShown: WritableSignal<boolean> = signal(false);

  readonly state: SidebarDesktopStoreState = {
    isCollapsed: this.#$isCollapsed.asReadonly(),
    isShown: this.#$isShown.asReadonly(),
  };

  toggleIsCollapsed(): void {
    this.#$isCollapsed.update((v) => !v);
  }

  setIsShown(isShown: boolean): void {
    this.#$isShown.set(isShown);
  }
}
