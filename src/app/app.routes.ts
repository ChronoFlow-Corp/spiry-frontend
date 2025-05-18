import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'web', pathMatch: 'full'},
  {
    path: 'web',
    loadComponent: () =>
      import('@pages/web/web.component').then((c) => c.WebComponent),
  },
  {path: '**', redirectTo: 'web'},
];
