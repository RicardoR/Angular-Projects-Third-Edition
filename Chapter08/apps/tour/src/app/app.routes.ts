import { VisitorComponent } from '@packt/visitor';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tour',
    loadComponent: () =>
      import('@packt/visitor').then((c) => c.VisitorComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
