import {NgClass} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  InputSignal,
  Signal,
  viewChild,
} from '@angular/core';

import {
  MESSAGE_FADE_IN_ANIMATION,
  MESSAGE_OPACITY_ANIMATION,
} from '@pages/web/main/messages/messages.component.animation';
import {Message} from '@store/chat/chat.store.type';

@Component({
  selector: '.page-web-main-messages',
  imports: [NgClass],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [MESSAGE_FADE_IN_ANIMATION, MESSAGE_OPACITY_ANIMATION],
})
export class PageWebMainMessagesComponent {
  protected readonly $wrapper: Signal<ElementRef<HTMLDivElement> | undefined> =
    viewChild('wrapper');

  readonly $messages: InputSignal<Message[]> = input.required({
    alias: 'messages',
  });

  constructor() {
    effect(() => {
      const messages = this.$messages();
      const wrapper = this.$wrapper();
      if (!messages.length || !wrapper) return;

      setTimeout(() => {
        wrapper.nativeElement.scrollTop = wrapper.nativeElement.scrollHeight;
      });
    });
  }
}
