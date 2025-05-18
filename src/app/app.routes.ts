import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/web/web.component').then((c) => c.WebComponent),
  },
];
