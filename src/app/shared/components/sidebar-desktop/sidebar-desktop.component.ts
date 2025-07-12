import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {SidebarDesktopDefaultViewComponent} from '@components/sidebar-desktop/default-view/default-view.component';
import {TextContentConfigComponent} from '@components/sidebar-desktop/text-content-config/text-content-config.component';
import {SidebarDesktopStore} from '@store/sidebar-desktop/sidebar-desktop.store';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';

@Component({
  selector: '.shared-sidebar-desktop',
  imports: [SidebarDesktopDefaultViewComponent, TextContentConfigComponent],
  templateUrl: './sidebar-desktop.component.html',
  styleUrl: './sidebar-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.collapsed]': 'sidebarDesktopStore.state.isCollapsed()',
    '[class.default-view]': '!state.isAnyToolSelected()',
    '[class.text-content-config]': 'state.isTextContentToolSelected()',
  },
})
export class SidebarDesktopComponent {
  readonly #toolCategoryStore = inject(ToolCategoryStore);

  protected readonly sidebarDesktopStore = inject(SidebarDesktopStore);

  protected readonly state = {
    isTextContentToolSelected:
      this.#toolCategoryStore.state.isTextContentToolSelected,
    isVisualCreationToolSelected:
      this.#toolCategoryStore.state.isVisualCreationToolSelected,
    isAutomationToolSelected:
      this.#toolCategoryStore.state.isAutomationToolSelected,
    isAnyToolSelected: this.#toolCategoryStore.state.isAnyToolSelected,
  };
}
