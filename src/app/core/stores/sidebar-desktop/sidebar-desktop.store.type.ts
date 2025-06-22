import {Signal} from '@angular/core';

export interface SidebarDesktopStoreState {
  readonly isCollapsed: Signal<boolean>;
  readonly isShown: Signal<boolean>;
}
