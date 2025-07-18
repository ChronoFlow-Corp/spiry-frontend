import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';

import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {WebSocketService} from '@service/websocket/websocket.service';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';
import {ChatStore} from '@store/chat/chat.store';

@Component({
  selector: '.page-web-main-desktop-view',
  imports: [AiInputComponent, PageWebMainMessagesComponent],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainDesktopViewComponent {
  readonly #chatStore = inject(ChatStore);
  readonly #webSocketService = inject(WebSocketService);

  protected readonly $showMessages: WritableSignal<boolean> = signal(false);
  protected readonly $messages = this.#chatStore.state.messages;
  protected readonly $isMessageStreaming =
    this.#chatStore.state.isMessageStreaming;

  sendMessage(message: string): void {
    if (!this.$showMessages()) this.$showMessages.set(true);
    this.#webSocketService.sendMessage({
      type: 'ai-chat',
      message,
    });

    this.#chatStore.addMessage({
      role: 'user',
      content: message,
      timestamp: Date.now(),
    });
  }
}
