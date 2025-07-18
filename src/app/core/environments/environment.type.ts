import {InjectionToken} from '@angular/core';

export type EnvironmentType = {
  origin: string;
  apiUrl: string;
  wsUrl: string;
  debug: boolean;
};

export const ENVIRONMENT_TOKEN = new InjectionToken<EnvironmentType>(
  'Environment',
);
