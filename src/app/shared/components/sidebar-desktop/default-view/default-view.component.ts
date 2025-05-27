import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

import {SidebarDesktopStore} from '@store/sidebar-desktop/sidebar-desktop.store';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';
import {
  AVAILABLE_TOOL_CATEGORIES,
  ToolCategory,
} from '@store/tool-category/tool-category.store.model';

@Component({
  selector: '.shared-sidebar-desktop-default-view',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarDesktopDefaultViewComponent implements OnInit {
  protected readonly sidebarDesktopStore = inject(SidebarDesktopStore);
  protected readonly toolCategoryStore = inject(ToolCategoryStore);

  readonly #router = inject(Router);

  ngOnInit(): void {
    const url = this.#router.url;
    const match = url.match(/\/web\/category\/([^/]+)/);
    if (!match) return;

    const category = match[1] as ToolCategory;
    if (AVAILABLE_TOOL_CATEGORIES.includes(category)) {
      if (this.toolCategoryStore.state.currentCategory() !== category) {
        this.toolCategoryStore.selectCategory(category);
      }
    }
  }

  goHome(): void {
    this.#router.navigate(['/web']).then();
  }
}
