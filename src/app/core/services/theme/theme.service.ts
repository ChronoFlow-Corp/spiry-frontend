import {inject, Injectable} from '@angular/core';

import {UtilsService} from '@service/utils/utils.service';
import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Injectable({providedIn: 'root'})
export class ThemeService {
  readonly #sidebarMobileStore = inject(SidebarMobileStore);
  readonly #utilsService = inject(UtilsService);

  readonly #mediaQuery: MediaQueryList = window.matchMedia(
    '(prefers-color-scheme: dark)',
  );

  init = (): void => {
    this.#updateTheme(this.#mediaQuery.matches);
    this.#mediaQuery.addEventListener('change', (event) =>
      this.#updateTheme(event.matches),
    );
  };

  #updateTheme = (isDark: boolean): void => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    this.#utilsService.changeIOSInfoBarColor(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(
          '--background-neutral-' +
            (this.#sidebarMobileStore.state.isMenuShown() ? 'gray' : 'main'),
        )
        .trim(),
    );
  };
}
