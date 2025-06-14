import {Injectable, signal, WritableSignal} from '@angular/core';

import {
  ConnectionState,
  ConnectionType,
} from '@service/websocket/websocket.service.type';

@Injectable({providedIn: 'root'})
export class WebSocketStore {
  readonly #$connectionState: WritableSignal<ConnectionState> = signal(
    ConnectionState.DISCONNECTED,
  );

  readonly #$connectionType: WritableSignal<ConnectionType | null> =
    signal(null);

  readonly #$lastError: WritableSignal<string | null> = signal(null);

  readonly state = {
    connectionState: this.#$connectionState.asReadonly(),
    connectionType: this.#$connectionType.asReadonly(),
    lastError: this.#$lastError.asReadonly(),
  };

  setConnectionState(state: ConnectionState): void {
    this.#$connectionState.set(state);
  }

  setConnectionType(type: ConnectionType | null): void {
    this.#$connectionType.set(type);
  }

  setLastError(error: string | null): void {
    this.#$lastError.set(error);
  }

  reset(): void {
    this.#$connectionState.set(ConnectionState.DISCONNECTED);
    this.#$connectionType.set(null);
    this.#$lastError.set(null);
  }
}
