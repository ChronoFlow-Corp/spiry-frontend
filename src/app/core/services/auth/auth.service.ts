import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  catchError,
  delay,
  finalize,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {
  AuthServiceState,
  LOCAL_STORAGE_AUTH_TOKEN,
  SuccessfulAuth,
  UserInfo,
} from '@service/auth/auth.service.type';

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  readonly GOOGLE_AUTH_URL = `${this.#environment.apiUrl}/connect/google`;

  readonly #isAuthenticationInProgress: WritableSignal<boolean> = signal(false);
  readonly #username: WritableSignal<UserInfo['username'] | null> =
    signal(null);
  readonly #isAuthenticated: WritableSignal<boolean> = signal(
    this.#isTokenStored(),
  );

  readonly state: AuthServiceState = {
    isAuthenticationInProgress: this.#isAuthenticationInProgress.asReadonly(),
    isAuthenticated: this.#isAuthenticated.asReadonly(),
    username: this.#username.asReadonly(),
    initials: computed(() => this.#username()?.slice(0, 2) ?? ''),
  };

  getMe(): Observable<UserInfo | null> {
    if (!this.#isTokenStored()) {
      this.#logout();
      return of(null);
    }

    return this.#http
      .get<UserInfo>(`${this.#environment.apiUrl}/users/me`)
      .pipe(
        tap(({username}) => {
          this.#username.set(username);
          this.#isAuthenticated.set(true);
        }),
        catchError(() => {
          this.#logout();
          return throwError(() => new Error('Authentication failed'));
        }),
      );
  }

  authenticateWithProvider(
    accessToken: string,
    provider = 'google',
  ): Observable<SuccessfulAuth> {
    this.#isAuthenticationInProgress.set(true);

    return this.#http
      .get<SuccessfulAuth>(
        `${this.#environment.apiUrl}/auth/${provider}/callback?access_token=${accessToken}`,
      )
      .pipe(
        tap(({jwt}) => this.saveToken(jwt)),
        switchMap((successfulAuth) =>
          this.getMe().pipe(
            map(() => successfulAuth),
            catchError(() => of(successfulAuth)),
          ),
        ),
        delay(500),
        finalize(() => this.#isAuthenticationInProgress.set(false)),
        catchError((error) => {
          console.error('Authentication failed', error);
          return throwError(() => new Error('Authentication failed'));
        }),
      );
  }

  getToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token);
    this.#isAuthenticated.set(true);
  }

  #isTokenStored(): boolean {
    return !!this.getToken();
  }

  #logout(): void {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
    this.#clearState();
  }

  #clearState(): void {
    this.#isAuthenticationInProgress.set(false);
    this.#isAuthenticated.set(false);
    this.#username.set(null);
  }
}
