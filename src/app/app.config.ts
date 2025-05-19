import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import {routes} from './app.routes';

import {ThemeService} from '@service/theme/theme.service';
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
    provideAppInitializer(() => inject(ThemeService).init()),
    {provide: ENVIRONMENT_TOKEN, useValue: environment},
  ],
};
