import { Route } from '@angular/router';
import { PoiComponent } from './lib/poi/poi.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromPoi from './state/poi.reducer';
import { PoiEffects } from './state/poi.effects';

export const poiRoutes: Route[] = [
  {
    path: '',
    component: PoiComponent,
    providers: [
      provideState(fromPoi.POI_FEATURE_KEY, fromPoi.poiReducer),
      provideEffects(PoiEffects),
    ],
  },
];
