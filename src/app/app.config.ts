import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import {routes} from './app.routes';
import {APP_INITIALIZERS} from './app.config.model';

import {environment} from '@environments/environment';
import {ENVIRONMENT_TOKEN} from '@environments/environment.type';
import {tokenInterceptor} from '@interceptor/token/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({scrollPositionRestoration: 'top'}),
    ),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAppInitializer(APP_INITIALIZERS()),
    {provide: ENVIRONMENT_TOKEN, useValue: environment},
  ],
};
