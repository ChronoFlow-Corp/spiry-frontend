import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {ChatStore} from '@store/chat/chat.store';

@Component({
  selector: '.shared-chats-history',
  imports: [RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: './chats-history.component.html',
  styleUrl: './chats-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {class: 'w-100'},
})
export class ChatsHistoryComponent {
  readonly #chatStore = inject(ChatStore);

  protected readonly $chats = this.#chatStore.state.chatsList;
}
