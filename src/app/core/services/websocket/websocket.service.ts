import {inject, Injectable, OnDestroy} from '@angular/core';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {ChatStore} from '@store/chat/chat.store';
import {WebSocketStore} from '@store/websocket/websocket.store';
import {AIResponseMessage} from './websocket.service.type';

@Injectable({providedIn: 'root'})
export class WebSocketService implements OnDestroy {
  readonly #environment = inject(ENVIRONMENT_TOKEN);
  readonly #websocketStore = inject(WebSocketStore);
  readonly #chatStore = inject(ChatStore);

  #ws?: WebSocket;
  #reconnectTimeout?: ReturnType<typeof setTimeout>;

  readonly $connectionState = this.#websocketStore.state.connectionState;

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
        this.#websocketStore.setConnectionState(WebSocket.OPEN);
      };

      this.#ws.onerror = (err) => {
        console.error('[WS] Error:', err);
        this.#websocketStore.setConnectionState(WebSocket.CLOSED);
        this.#scheduleReconnect();
      };

      this.#ws.onclose = (event) => {
        console.log('[WS] Connection closed', event);
        this.#websocketStore.setConnectionState(WebSocket.CLOSED);
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
      this.#websocketStore.setConnectionState(WebSocket.CLOSED);
    }
  }

  #replaceTempAIMessage(content: string): void {
    console.log('replaceTempAIMessage', content);

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

    this.#websocketStore.setConnectionState(WebSocket.CLOSED);
  }

  #scheduleReconnect(): void {
    if (this.#reconnectTimeout) return;

    this.#reconnectTimeout = setTimeout(() => {
      this.#reconnectTimeout = undefined;
      this.connect();
    }, 3000);
  }

  #clearReconnect(): void {
    if (this.#reconnectTimeout) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = undefined;
    }
  }
}
