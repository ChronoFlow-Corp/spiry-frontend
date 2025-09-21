import {Signal} from '@angular/core';

export const LOCAL_STORAGE_AUTH_TOKEN = 'token';

export interface SuccessfulAuth {
  readonly jwt: string;
}

export interface UserInfo {
  readonly id: number;
  readonly documentId: string;
  readonly username: string;
  readonly email: string;
  readonly subscription: 'free' | 'premium';
  readonly avatarUrl: string;
}

export interface AuthServiceState {
  readonly isAuthenticationInProgress: Signal<boolean>;
  readonly isAuthenticated: Signal<boolean>;
  readonly username: Signal<UserInfo['username'] | null>;
  readonly email: Signal<UserInfo['email'] | null>;
  readonly subscription: Signal<UserInfo['subscription'] | null>;
  readonly avatarUrl: Signal<UserInfo['avatarUrl'] | null>;
}
