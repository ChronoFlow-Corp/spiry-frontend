import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AuthService} from '@service/auth/auth.service';

@Component({
  selector: '.spiry-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent implements OnInit {
  readonly #authService = inject(AuthService);

  ngOnInit(): void {
    this.#authService.getMe().subscribe();
  }
}
