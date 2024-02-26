import { poiListMock } from './../lib/mocks/poi-list.mock';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import * as PoiActions from './poi.actions';
import { PoiEffects } from './poi.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PoiService } from '../lib/poi.service';

describe('PoiEffects', () => {
  let poiServiceMock: { getAll: jest.Mock };

  let actions: Observable<Action>;
  let effects: PoiEffects;

  beforeEach(() => {
    poiServiceMock = {
      getAll: jest.fn()
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PoiEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        { provide: PoiService, useValue: poiServiceMock },
      ],
    });

    effects = TestBed.inject(PoiEffects);
    poiServiceMock.getAll.mockReturnValue(of(poiListMock));
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PoiActions.initPoi() });

      const expected = hot('-a-|', {
        a: PoiActions.loadPoiSuccess({ poi: poiListMock }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
