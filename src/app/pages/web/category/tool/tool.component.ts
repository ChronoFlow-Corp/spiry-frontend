import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ToolCategoryStore} from '@core/stores/tool-category/tool-category.store';

@Component({
  selector: '.page-web-category-tool',
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolComponent {
  protected readonly toolCategoryStore = inject(ToolCategoryStore);
}
