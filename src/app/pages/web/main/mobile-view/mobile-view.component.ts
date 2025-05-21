import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';

import {PageWebMainMessagesComponent} from '@pages/web/main/messages/messages.component';
import {Message} from '@pages/web/main/messages/messages.component.type';
import {TEXT_FADE_OUT_ANIMATION} from '@pages/web/main/mobile-view/mobile-view.component.animation';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';

@Component({
  selector: '.page-web-main-mobile-view',
  imports: [AiInputComponent, PageWebMainMessagesComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [TEXT_FADE_OUT_ANIMATION],
})
export class PageWebMainMobileViewComponent {
  protected readonly $showMessages: WritableSignal<boolean> = signal(false);
  protected readonly $messages: WritableSignal<Message[]> = signal([]);

  sendMessage(message: string): void {
    if (!this.$showMessages()) this.$showMessages.set(true);

    this.$messages.update((messages) => [
      ...messages,
      {role: 'user', content: message, timestamp: Date.now()},
    ]);
  }
}
