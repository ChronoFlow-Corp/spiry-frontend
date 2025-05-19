import {Signal} from '@angular/core';

export const LOCAL_STORAGE_AUTH_TOKEN = 'token';

export interface SuccessfulAuth {
  jwt: string;
}

export interface UserInfo {
  id: number;
  documentId: string;
  username: string;
  email: string;
}

export interface AuthServiceState {
  readonly isAuthenticationInProgress: Signal<boolean>;
  readonly isAuthenticated: Signal<boolean>;
  readonly username: Signal<UserInfo['username'] | null>;
  readonly initials: Signal<string>;
}
