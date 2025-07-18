import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {ToolSelectComponent} from '@category/tool-select/tool-select.component';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';

@Component({
  selector: '.page-web-category',
  imports: [RouterOutlet, ToolSelectComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  readonly #toolCategoryStore = inject(ToolCategoryStore);

  protected readonly currentToolName =
    this.#toolCategoryStore.state.currentToolName;

  protected readonly isAnyToolSelected =
    this.#toolCategoryStore.state.isAnyToolSelected;
}
