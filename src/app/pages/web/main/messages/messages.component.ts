import {NgClass} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  Signal,
  untracked,
  viewChild,
} from '@angular/core';

import {
  MESSAGE_FADE_IN_ANIMATION,
  MESSAGE_OPACITY_ANIMATION,
} from '@pages/web/main/messages/messages.component.animation';
import {Message} from '@service/chat/chat.service.type';

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

  readonly $messages = input.required<Message[]>({
    alias: 'messages',
  });

  constructor() {
    effect((onCleanup) => {
      const messages = this.$messages();
      const wrapper = untracked(this.$wrapper);
      if (!messages.length || !wrapper) return;

      const timer = setTimeout(() => {
        wrapper.nativeElement.scrollTop = wrapper.nativeElement.scrollHeight;
      });

      onCleanup(() => clearTimeout(timer));
    });
  }
}
