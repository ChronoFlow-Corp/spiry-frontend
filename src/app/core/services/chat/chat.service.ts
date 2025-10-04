import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, EMPTY, finalize, Observable, tap} from 'rxjs';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {Chat} from '@service/chat/chat.service.type';
import {ChatStore} from '@store/chat/chat.store';
import {AuthService} from '@service/auth/auth.service';

@Injectable({providedIn: 'root'})
export class ChatService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);
  readonly #chatStore = inject(ChatStore);
  readonly #authService = inject(AuthService);

  loadChatsHistory(): void {
    if (!this.#authService.state.isAuthenticated()) return;

    this.#chatStore.setChatsHistoryIsLoading(true);
    this.#loadChatsHistory()
      .pipe(
        tap((chats) => this.#chatStore.setChatsInitial(chats)),
        finalize(() => this.#chatStore.setChatsHistoryIsLoading(false)),
        catchError(() => {
          this.#chatStore.setChatsInitial([]);
          return EMPTY;
        }),
      )
      .subscribe();
  }

  loadChat(): void {
    const currentChatId = this.#chatStore.state.currentChatId();
    if (!currentChatId) return;

    this.#loadChat(currentChatId)
      .pipe(tap((chat) => this.#chatStore.upsertChat(chat)))
      .subscribe();
  }

  #loadChatsHistory(): Observable<Chat[]> {
    return this.#http.get<Chat[]>(`${this.#environment.apiUrl}/chats`);
  }

  #loadChat(id: Chat['id']): Observable<Chat> {
    return this.#http.get<Chat>(`${this.#environment.apiUrl}/chats/${id}`);
  }
}
