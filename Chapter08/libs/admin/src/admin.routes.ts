import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PoiEffects, PoiFeature } from '@packt/poi';
import { AdminComponent } from './lib/admin/admin.component';

export const AdminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    providers: [
      provideState(PoiFeature.POI_FEATURE_KEY, PoiFeature.poiReducer),
      provideEffects(PoiEffects),
    ],
  },
];
