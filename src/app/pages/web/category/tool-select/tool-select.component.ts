import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {TextContentComponent} from '@category/tool-select/text-content/text-content.component';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';

@Component({
  selector: '.page-web-category-tool-select',
  imports: [TextContentComponent],
  templateUrl: './tool-select.component.html',
  styleUrl: './tool-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolSelectComponent {
  readonly #toolCategoryStore = inject(ToolCategoryStore);

  protected readonly currentCategory =
    this.#toolCategoryStore.state.currentCategory;
}
