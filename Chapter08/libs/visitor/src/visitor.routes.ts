import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PoiEffects, PoiFeature } from '@packt/poi';
import { VisitorComponent } from './lib/visitor/visitor.component';

export const VisitorRoutes: Route[] = [
  {
    path: '',
    component: VisitorComponent,
    providers: [
      provideState(PoiFeature.POI_FEATURE_KEY, PoiFeature.poiReducer),
      provideEffects(PoiEffects),
    ],
  },
];
