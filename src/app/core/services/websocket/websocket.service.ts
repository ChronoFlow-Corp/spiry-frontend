import {effect, inject, Injectable, OnDestroy} from '@angular/core';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {
  AIResponseMessage,
  ConnectionState,
} from '@service/websocket/websocket.service.type';
import {ChatStore} from '@store/chat/chat.store';
import {WebSocketStore} from '@store/websocket/websocket.store';

@Injectable({providedIn: 'root'})
export class WebSocketService implements OnDestroy {
  readonly #environment = inject(ENVIRONMENT_TOKEN);
  readonly #websocketStore = inject(WebSocketStore);
  readonly #chatStore = inject(ChatStore);

  #ws?: WebSocket;
  #reconnectTimeout?: number;
  #reconnectAttempts = 0;
  readonly #maxReconnectAttempts = 3;
  readonly #reconnectDelay = 1000;

  readonly $connectionState = this.#websocketStore.state.connectionState;

  constructor() {
    effect(
      () =>
        this.$connectionState() === ConnectionState.ERROR &&
        this.#handleConnectionFailure(),
    );
  }

  ngOnDestroy(): void {
    this.#disconnect();
    this.#clearReconnect();
  }

  connect(): void {
    if (
      this.#ws?.readyState === WebSocket.OPEN ||
      this.#ws?.readyState === WebSocket.CONNECTING
    ) {
      return;
    }

    this.#reconnectAttempts = 0;
    this.#tryConnect();
  }

  send(data: unknown): void {
    if (this.$connectionState() === WebSocket.OPEN) {
      this.#ws!.send(JSON.stringify(data));
    } else {
      console.error('[WS] Tried to send while disconnected');
    }
  }

  #tryConnect(): void {
    try {
      this.#ws = new WebSocket(this.#environment.wsUrl);

      this.#ws.onopen = () => {
        console.log('[WS] Connected');
        this.#reconnectAttempts = 0;
        this.#websocketStore.setConnectionState(ConnectionState.CONNECTED);
      };

      this.#ws.onerror = (err) => {
        console.error('[WS] Error:', err);
        this.#websocketStore.setConnectionState(ConnectionState.ERROR);
      };

      this.#ws.onclose = (event) => {
        console.log('[WS] Connection closed', event);
        this.#websocketStore.setConnectionState(ConnectionState.DISCONNECTED);

        if (!event.wasClean) {
          this.#websocketStore.setConnectionState(ConnectionState.ERROR);
        }
      };

      let currentAiResponse = '';

      this.#ws.onmessage = (event) => {
        console.log('[WS] Message:', event);

        const message: AIResponseMessage = JSON.parse(event.data);

        if (message.type === 'chunk') {
          this.#chatStore.updateIsMessageStreaming(true);
          currentAiResponse += message.content;

          this.#replaceTempAIMessage(currentAiResponse);
        }

        if (message.type === 'done') {
          console.log(currentAiResponse);

          this.#chatStore.updateIsMessageStreaming(false);
          currentAiResponse = '';
        }
      };
    } catch (error) {
      console.error('[WS] Failed to create WebSocket connection:', error);
      this.#websocketStore.setConnectionState(ConnectionState.ERROR);
    }
  }

  #replaceTempAIMessage(content: string): void {
    this.#chatStore.updateLastAIMessage(content);
  }

  #disconnect(): void {
    if (this.#ws) {
      this.#ws.onopen = null;
      this.#ws.onclose = null;
      this.#ws.onerror = null;
      this.#ws.onmessage = null;

      if (this.#ws.readyState === WebSocket.OPEN) {
        this.#ws.close();
      }
      this.#ws = undefined;
    }

    if (this.#reconnectTimeout) {
      window.clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = undefined;
    }

    this.#websocketStore.setConnectionState(ConnectionState.DISCONNECTED);
  }

  #clearReconnect(): void {
    if (this.#reconnectTimeout) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = undefined;
    }
  }

  #handleConnectionFailure(): void {
    if (this.#reconnectAttempts < this.#maxReconnectAttempts) {
      this.#reconnectAttempts++;
      console.log(
        `[WS] Attempting to reconnect (${this.#reconnectAttempts}/${this.#maxReconnectAttempts})...`,
      );

      this.#clearReconnect();
      this.#reconnectTimeout = window.setTimeout(
        () => this.#tryConnect(),
        this.#reconnectDelay * this.#reconnectAttempts,
      );
    } else {
      console.error('[WS] Max reconnect attempts reached, giving up.');
      this.#chatStore.updateIsMessageStreaming(false);
      this.#reconnectAttempts = 0;
    }
  }
}
