import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

import {SidebarDesktopStore} from '@store/sidebar-desktop/sidebar-desktop.store';
import {ToolCategoryStore} from '@store/tool-category/tool-category.store';
import {ChatsHistoryComponent} from '@components/chats-history/chats-history.component';

@Component({
  selector: '.shared-sidebar-desktop-default-view',
  imports: [RouterLink, RouterLinkActive, ChatsHistoryComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarDesktopDefaultViewComponent {
  protected readonly sidebarDesktopStore = inject(SidebarDesktopStore);
  protected readonly toolCategoryStore = inject(ToolCategoryStore);

  readonly #router = inject(Router);

  goHome(): void {
    this.#router.navigate(['/web']).then();
  }
}
