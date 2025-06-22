import {Signal} from '@angular/core';

export interface SidebarMobileStoreState {
  readonly isMenuShown: Signal<boolean>;
  readonly isShown: Signal<boolean>;
}
