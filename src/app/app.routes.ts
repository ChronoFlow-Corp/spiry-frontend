import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'web', pathMatch: 'full'},
  {
    path: 'web',
    loadComponent: () =>
      import('@pages/web/web.component').then((c) => c.WebComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/web/main/main.component').then(
            (c) => c.PageWebMainComponent,
          ),
      },
      {
        path: 'category/:categoryName',
        loadComponent: () =>
          import('@pages/web/category/category.component').then(
            (c) => c.CategoryComponent,
          ),
        children: [
          {
            path: ':toolName',
            loadComponent: () =>
              import('@pages/web/category/tool/tool.component').then(
                (c) => c.ToolComponent,
              ),
          },
        ],
      },
      {path: '**', pathMatch: 'full', redirectTo: 'category/text-content'},
    ],
  },
  {path: '**', redirectTo: 'web'},
];
