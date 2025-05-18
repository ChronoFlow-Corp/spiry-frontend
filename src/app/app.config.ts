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

import {routes} from './app.routes';

import {ThemeService} from '@service/theme/theme.service';
import {environment} from '@environments/environment';
import {ENVIRONMENT_TOKEN} from '@environments/environment.type';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({scrollPositionRestoration: 'top'}),
    ),
    provideAppInitializer(() => inject(ThemeService).init()),
    {provide: ENVIRONMENT_TOKEN, useValue: environment},
  ],
};
