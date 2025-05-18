import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  readonly #mediaQuery: MediaQueryList = window.matchMedia(
    '(prefers-color-scheme: dark)',
  );

  init = (): void => {
    this.#updateTheme(this.#mediaQuery.matches);
    this.#mediaQuery.addEventListener('change', (event) =>
      this.#updateTheme(event.matches),
    );
  };

  #updateTheme = (isDark: boolean): void =>
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
}
