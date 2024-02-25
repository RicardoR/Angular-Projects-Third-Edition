import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tour',
    loadChildren: () => import('@packt/visitor').then((c) => c.VisitorRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('@packt/admin').then(c => c.AdminRoutes)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
