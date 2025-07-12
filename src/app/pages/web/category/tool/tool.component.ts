import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ToolCategoryStore} from '@core/stores/tool-category/tool-category.store';

@Component({
  // TODO: add component selector
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolComponent {
  protected readonly toolCategoryStore = inject(ToolCategoryStore);
}
