import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TextContentConfigStore} from '@core/stores/text-content-config/text-content-config.store';
import {
  FILTERS,
  TextContentFilterType,
} from '@core/stores/text-content-config/text-content-config.store.type';

@Component({
  selector: '.page-web-category-text-content-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  readonly #textContentConfigsStore = inject(TextContentConfigStore);

  protected readonly filters = FILTERS;

  protected readonly $activeFilter =
    this.#textContentConfigsStore.currentFilter$;

  changeFilter(filter: TextContentFilterType): void {
    this.#textContentConfigsStore.updateCurrentFilter(filter);
  }
}
