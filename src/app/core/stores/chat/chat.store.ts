import {computed, Injectable, Signal, signal} from '@angular/core';

import {Chat} from '@service/chat/chat.service.type';

type ChatMap = Map<string, Chat>;

@Injectable({providedIn: 'root'})
export class ChatStore {
  readonly #chatsHistoryIsLoading = signal<boolean>(true);
  readonly #chats = signal<ChatMap>(new Map());
  readonly #currentChatId = signal<Chat['id'] | null>(null);
  readonly #currentChat: Signal<Chat | undefined> = computed(() => {
    const currentChatId = this.#currentChatId();
    return currentChatId ? this.#chats().get(currentChatId) : undefined;
  });

  readonly state = {
    chatsIsLoading: this.#chatsHistoryIsLoading.asReadonly(),
    chatsMap: this.#chats.asReadonly(),
    chatsList: computed(() => Array.from(this.#chats().values())),
    currentChatId: this.#currentChatId.asReadonly(),
    currentChat: this.#currentChat,
  };

  setChatsHistoryIsLoading(isLoading: boolean): void {
    this.#chatsHistoryIsLoading.set(isLoading);
  }

  setChatsInitial(chats: Chat[]): void {
    const map: ChatMap = new Map();
    chats.forEach((chat) => map.set(chat.id, chat));
    this.#chats.set(map);
  }

  upsertChat(chat: Chat): void {
    const current: ChatMap = this.#chats();
    const updated: ChatMap = new Map(current);
    updated.set(chat.id, {...current.get(chat.id), ...chat});
    this.#chats.set(updated);
  }

  setCurrentChatId(chatId: string): void {
    this.#currentChatId.set(chatId);
  }

  // getChatById(id: string): Signal<Chat | undefined> {
  //   return computed(() => this.#chats().get(id));
  // }

  updateIsMessageStreaming(v: boolean): void {}

  updateLastAIMessage(v: string): void {}
}
