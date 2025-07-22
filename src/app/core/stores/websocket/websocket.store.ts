import {Injectable, signal} from '@angular/core';

import {
  ConnectionState,
  ConnectionType,
} from '@service/websocket/websocket.service.type';

@Injectable({providedIn: 'root'})
export class WebSocketStore {
  readonly #connectionState = signal<ConnectionState>(
    ConnectionState.DISCONNECTED,
  );

  readonly #connectionType = signal<ConnectionType | null>(null);

  readonly #lastError = signal<string | null>(null);

  readonly state = {
    connectionState: this.#connectionState.asReadonly(),
    connectionType: this.#connectionType.asReadonly(),
    lastError: this.#lastError.asReadonly(),
  };

  setConnectionState(state: ConnectionState): void {
    this.#connectionState.set(state);
  }

  setConnectionType(type: ConnectionType | null): void {
    this.#connectionType.set(type);
  }

  setLastError(error: string | null): void {
    this.#lastError.set(error);
  }

  reset(): void {
    this.#connectionState.set(ConnectionState.DISCONNECTED);
    this.#connectionType.set(null);
    this.#lastError.set(null);
  }
}
