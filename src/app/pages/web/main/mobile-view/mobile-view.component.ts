import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';

import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {TEXT_FADE_OUT_ANIMATION} from '@pages/web/main/mobile-view/mobile-view.component.animation';
import {WebSocketService} from '@service/websocket/websocket.service';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';
import {ChatStore} from '@store/chat/chat.store';

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
