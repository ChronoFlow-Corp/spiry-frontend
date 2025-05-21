import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import {APP_INITIALIZERS} from './app.config.model';
import {routes} from './app.routes';

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
    provideAnimations(),
    {provide: ENVIRONMENT_TOKEN, useValue: environment},
  ],
};
