import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {TEXT_FADE_OUT_ANIMATION} from '@pages/web/main/mobile-view/mobile-view.component.animation';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';
import {ChatStore} from '@store/chat/chat.store';
import {ChatService} from '@service/chat/chat.service';

@Component({
  selector: '.page-web-main-mobile-view',
  imports: [AiInputComponent, PageWebMainMessagesComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [TEXT_FADE_OUT_ANIMATION],
})
export class PageWebMainMobileViewComponent {
  readonly #chatStore = inject(ChatStore);
  readonly #chatService = inject(ChatService);

  protected readonly $showMessages = signal<boolean>(false);
  protected readonly $isMessageStreaming = signal<boolean>(false);
  protected readonly $currentChat = this.#chatStore.state.currentChat;

  send(message: string) {
    // const chat = this.$chat();
    // if (chat) this.#chatService.sendMessage(chat.id, message);
    // else this.#chatService.createChat(message);
  }
}
