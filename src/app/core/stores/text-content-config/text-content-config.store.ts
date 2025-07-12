import {Injectable, signal, WritableSignal} from '@angular/core';

import {TextContentAICaptionGeneratorConfig} from '@store/text-content-config/ai-caption-generator.type';
import {TextContentFilterType} from '@store/text-content-config/text-content-config.store.type';

@Injectable({providedIn: 'root'})
export class TextContentConfigStore {
  readonly #currentFilter: WritableSignal<TextContentFilterType> =
    signal('all');

  readonly #AICaptionGeneratorConfig: WritableSignal<TextContentAICaptionGeneratorConfig> =
    signal({
      social_network: 'instagram',
      language: 'en',
      prompt: '',
      style: 'Auto',
    });

  readonly currentFilter$ = this.#currentFilter.asReadonly();
  readonly AICaptionGeneratorConfig =
    this.#AICaptionGeneratorConfig.asReadonly();

  updateCurrentFilter(filter: TextContentFilterType): void {
    this.#currentFilter.set(filter);
  }

  updateAICaptionGeneratorConfig(
    updates: Partial<TextContentAICaptionGeneratorConfig>,
  ): void {
    this.#AICaptionGeneratorConfig.update((c) => ({...c, ...updates}));
  }
}
