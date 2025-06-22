import {Injectable, signal, WritableSignal} from '@angular/core';

import {TextContentFilterType} from '@store/text-content-config/text-content-config.store.type';

@Injectable({providedIn: 'root'})
export class TextContentConfigStore {
  private readonly $currentFilter: WritableSignal<TextContentFilterType> =
    signal('all');

  readonly currentFilter$ = this.$currentFilter.asReadonly();

  updateCurrentFilter(filter: TextContentFilterType): void {
    this.$currentFilter.set(filter);
  }
}
