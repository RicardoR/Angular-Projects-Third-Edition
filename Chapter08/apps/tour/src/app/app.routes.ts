import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tour',
    loadChildren: () => import('@packt/visitor').then((c) => c.VisitorRoutes),
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
