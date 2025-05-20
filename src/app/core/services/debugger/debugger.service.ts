import {inject, Injectable} from '@angular/core';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';

@Injectable({providedIn: 'root'})
export class DebuggerService {
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  log(componentName: string, ...args: any[]): void {
    if (!this.#environment.debug) return;
    console.debug(`[${componentName}]`, ...args);
  }
}
