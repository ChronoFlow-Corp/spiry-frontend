import {Injectable, signal, WritableSignal} from '@angular/core';

import {ConnectionState} from '@service/websocket/websocket.service.type';

@Injectable({providedIn: 'root'})
export class WebSocketStore {
  readonly #$connectionState: WritableSignal<ConnectionState> = signal(
    ConnectionState.DISCONNECTED,
  );

  readonly state = {
    connectionState: this.#$connectionState.asReadonly(),
  };

  setConnectionState(state: ConnectionState): void {
    this.#$connectionState.set(state);
  }
}
