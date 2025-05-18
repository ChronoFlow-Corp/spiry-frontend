import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {
  catchError,
  delay,
  finalize,
  map,
  Observable,
  of,
  retry,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {SuccessfulAuth, UserInfo} from '@service/auth/auth.service.type';

const LOCAL_STORAGE_TOKEN = 'token';

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  readonly GOOGLE_AUTH_URL = `${this.#environment.apiUrl}/connect/google`;

  readonly #isAuthenticationInProgress: WritableSignal<boolean> = signal(false);
  readonly #username: WritableSignal<string | null> = signal(null);
  readonly #_isAuthenticated: WritableSignal<boolean> = signal(
    this.#isAuthenticated(),
  );

  readonly state = {
    isAuthenticationInProgress: this.#isAuthenticationInProgress.asReadonly(),
    isAuthenticated: this.#_isAuthenticated.asReadonly(),
    username: this.#username.asReadonly(),
    initials: computed(() => this.#username()?.slice(0, 2) ?? ''),
  };

  getMe(): Observable<UserInfo | null> {
    const token = this.getToken();

    if (!token) {
      this.#logout();
      return of(null);
    }

    return this.#http
      .get<UserInfo>(`${this.#environment.apiUrl}/users/me`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .pipe(
        retry(2),
        tap(({username}) => {
          this.#_isAuthenticated.set(true);
          this.#username.set(username);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) this.#_isAuthenticated.set(false);
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
            catchError((error) => {
              console.error(
                'Failed to get user info after authentication',
                error,
              );
              return of(successfulAuth);
            }),
          ),
        ),
        delay(500),
        finalize(() => this.#isAuthenticationInProgress.set(false)),
        catchError((error) => {
          console.error('Authentication failed', error);
          this.#isAuthenticationInProgress.set(false);
          return throwError(() => new Error('Authentication failed'));
        }),
      );
  }

  getToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    this.#_isAuthenticated.set(true);
  }

  logout(): void {
    this.#logout();
  }

  #isAuthenticated(): boolean {
    return !!this.getToken();
  }

  #logout(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    this.#clearState();
  }

  #clearState(): void {
    this.#isAuthenticationInProgress.set(false);
    this.#_isAuthenticated.set(false);
    this.#username.set(null);
  }
}
