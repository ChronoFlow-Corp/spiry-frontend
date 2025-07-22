import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  untracked,
} from '@angular/core';
import {JsonPipe} from '@angular/common';

import {ChatStore} from '@store/chat/chat.store';
import {ChatService} from '@service/chat/chat.service';

@Component({
  selector: '.page-web-chat',
  imports: [JsonPipe], // TODO delete
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  readonly #chatStore = inject(ChatStore);
  readonly #chatService = inject(ChatService);

  protected readonly $currentChat = this.#chatStore.state.currentChat;

  constructor() {
    effect(
      () =>
        this.#chatStore.state.currentChatId() &&
        untracked(() => this.#chatService.loadChat()),
    );
  }
}
