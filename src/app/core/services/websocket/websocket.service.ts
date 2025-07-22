import {effect, inject, Injectable, OnDestroy} from '@angular/core';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {
  AIResponseMessage,
  ConnectionState,
  WebSocketErrorMessage,
  WebSocketMessage,
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
  #currentAiResponse = '';

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

  #tryConnect(): void {
    try {
      this.#websocketStore.setConnectionState(ConnectionState.CONNECTING);
      this.#ws = new WebSocket(this.#environment.wsUrl);

      this.#ws.onopen = () => {
        console.log('[WS] Connected');
        this.#reconnectAttempts = 0;
        this.#websocketStore.setConnectionState(ConnectionState.CONNECTED);
        this.#websocketStore.setLastError(null);
      };

      this.#ws.onerror = (err) => {
        console.error('[WS] Error:', err);
        this.#websocketStore.setConnectionState(ConnectionState.ERROR);
        this.#websocketStore.setLastError('WebSocket connection error');
      };

      this.#ws.onclose = (event) => {
        console.log('[WS] Connection closed', event);
        this.#websocketStore.setConnectionState(ConnectionState.DISCONNECTED);
        this.#websocketStore.setConnectionType(null);

        if (!event.wasClean) {
          this.#websocketStore.setConnectionState(ConnectionState.ERROR);
          this.#websocketStore.setLastError('Connection closed unexpectedly');
        }
      };

      this.#ws.onmessage = (event) => {
        console.log('[WS] Message:', event);

        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.#handleMessage(message);
        } catch (error) {
          console.error('[WS] Failed to parse message:', error);
          this.#websocketStore.setLastError('Failed to parse server message');
        }
      };
    } catch (error) {
      console.error('[WS] Failed to create WebSocket connection:', error);
      this.#websocketStore.setConnectionState(ConnectionState.ERROR);
      this.#websocketStore.setLastError(
        'Failed to create WebSocket connection',
      );
    }
  }

  #handleMessage(message: WebSocketMessage): void {
    switch (message.type) {
      case 'error':
        'data' in message
          ? this.#handleError(message as WebSocketErrorMessage)
          : this.#handleAIError(message as AIResponseMessage);
        break;
      case 'chunk':
        this.#handleChunk(message as AIResponseMessage);
        break;
      case 'done':
        this.#handleDone();
        break;
      default:
        console.warn('[WS] Unknown message type:', message);
    }
  }

  #handleError(message: WebSocketErrorMessage): void {
    console.error('[WS] Server error:', message.data.message);
    this.#websocketStore.setLastError(message.data.message);
  }

  #handleAIError(message: AIResponseMessage): void {
    if (message.type === 'error') {
      console.error('[WS] AI error:', message.message);
      this.#websocketStore.setLastError(message.message);
      this.#chatStore.updateIsMessageStreaming(false);
    }
  }

  #handleChunk(message: AIResponseMessage): void {
    if (message.type === 'chunk') {
      this.#chatStore.updateIsMessageStreaming(true);
      this.#currentAiResponse += message.content;
      this.#replaceTempAIMessage(this.#currentAiResponse);
    }
  }

  #handleDone(): void {
    console.log('[WS] AI response completed');
    this.#chatStore.updateIsMessageStreaming(false);
    this.#currentAiResponse = '';
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

    this.#clearReconnect();
    this.#websocketStore.reset();
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
      this.#websocketStore.setLastError(
        'Failed to reconnect after multiple attempts',
      );
    }
  }
}
