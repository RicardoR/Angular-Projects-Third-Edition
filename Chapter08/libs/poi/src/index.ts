export * from './lib/poi/poi.component';

import * as PoiActions from './state/poi.actions';
import * as PoiFeature from './state/poi.reducer';
import * as PoiSelectors from './state/poi.selectors';
import { PoiEffects } from './state/poi.effects';

export { PoiActions, PoiFeature, PoiSelectors, PoiEffects };
