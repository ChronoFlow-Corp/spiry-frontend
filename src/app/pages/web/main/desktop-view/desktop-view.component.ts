import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';
import {ChatStore} from '@store/chat/chat.store';
import {ChatService} from '@service/chat/chat.service';

@Component({
  selector: '.page-web-main-desktop-view',
  imports: [AiInputComponent, PageWebMainMessagesComponent],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainDesktopViewComponent {
  readonly #chatStore = inject(ChatStore);
  readonly #chatService = inject(ChatService);

  protected readonly $showMessages = signal<boolean>(false);
  protected readonly $isMessageStreaming = signal<boolean>(false);
  protected readonly $currentChat = this.#chatStore.state.currentChat;

  send(message: string) {
    this.$showMessages.set(true);
    // const chat = this.$chat();
    // if (chat) this.#chatService.sendMessage(chat.id, message);
    // else this.#chatService.createChat(message);
  }
}
