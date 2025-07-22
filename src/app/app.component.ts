import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AuthService} from '@service/auth/auth.service';
import {ChatService} from '@service/chat/chat.service';

@Component({
  selector: '.spiry-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  host: {class: 'h-100'},
})
export class AppComponent implements OnInit {
  readonly #authService = inject(AuthService);
  readonly #chatService = inject(ChatService);

  ngOnInit(): void {
    this.#authService.getMe();
    this.#chatService.loadChatsHistory();
  }
}
