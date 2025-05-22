import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WebSocketStore {
  readonly #$connectionState: WritableSignal<WebSocket['readyState']> = signal(
    WebSocket.CLOSED,
  );

  readonly state = {
    connectionState: this.#$connectionState.asReadonly(),
  };

  setConnectionState(state: WebSocket['readyState']): void {
    this.#$connectionState.set(state);
  }
}
