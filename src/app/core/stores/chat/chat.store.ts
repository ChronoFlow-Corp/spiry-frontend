import {Injectable, signal, WritableSignal} from '@angular/core';

import {Message} from '@store/chat/chat.store.type';

@Injectable({providedIn: 'root'})
export class ChatStore {
  readonly #$messages: WritableSignal<Message[]> = signal([
    {
      role: 'user',
      content: 'Hello, how can I help you today?',
      timestamp: Date.now(),
    },
    {
      role: 'ai',
      content: 'Hello, how can I help you today?',
      timestamp: Date.now(),
    },
  ]);
  readonly #$isMessageStreaming: WritableSignal<boolean> = signal(false);

  readonly state = {
    messages: this.#$messages.asReadonly(),
    isMessageStreaming: this.#$isMessageStreaming.asReadonly(),
  };

  addMessage(message: Message): void {
    this.#$messages.update((messages) => [
      ...messages,
      message,
      {
        role: 'ai',
        content: '',
        timestamp: Date.now(),
      },
    ]);
  }

  updateIsMessageStreaming(isMessageStreaming: boolean): void {
    this.#$isMessageStreaming.set(isMessageStreaming);
  }

  updateLastAIMessage(partialContent: string): void {
    console.log('updateLastAIMessage', partialContent);

    this.#$messages.update((messages) => {
      const last = messages[messages.length - 1];
      if (!last || last.role !== 'ai') return messages;

      return [...messages.slice(0, -1), {...last, content: partialContent}];
    });
  }
}
