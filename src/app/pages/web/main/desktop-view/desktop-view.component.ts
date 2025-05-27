import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';

import {PageWebMainDesktopViewPopularToolsComponent} from '@pages/web/main/desktop-view/popular-tools/popular-tools.component';
import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {TEXT_FADE_OUT_ANIMATION} from '@pages/web/main/mobile-view/mobile-view.component.animation';
import {WebSocketService} from '@service/websocket/websocket.service';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';
import {ChatStore} from '@store/chat/chat.store';

@Component({
  selector: '.page-web-main-desktop-view',
  imports: [
    AiInputComponent,
    PageWebMainDesktopViewPopularToolsComponent,
    PageWebMainMessagesComponent,
  ],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [TEXT_FADE_OUT_ANIMATION],
})
export class PageWebMainDesktopViewComponent {
  readonly #chatStore = inject(ChatStore);
  readonly #webSocketService = inject(WebSocketService);

  protected readonly $showMessages: WritableSignal<boolean> = signal(true);
  protected readonly $messages = this.#chatStore.state.messages;
  protected readonly $isMessageStreaming =
    this.#chatStore.state.isMessageStreaming;

  sendMessage(message: string): void {
    if (!this.$showMessages()) this.$showMessages.set(true);

    this.#chatStore.addMessage({
      role: 'user',
      content: message,
      timestamp: Date.now(),
    });

    this.#webSocketService.send({
      type: 'ai-chat',
      message,
    });
  }
}
