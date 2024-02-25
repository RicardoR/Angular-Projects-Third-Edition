import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tour',
    loadComponent: () => import('@packt/visitor').then((c) => c.VisitorComponent),
  },
  {
    path: 'admin',
    loadComponent: () => import('@packt/admin').then(c => c.AdminComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
