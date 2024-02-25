import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListComponent } from './poi-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@packt/poi';

describe('PoiListComponent', () => {
  const initialState = {

  };

  let component: PoiListComponent;
  let fixture: ComponentFixture<PoiListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoiListComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: PoiSelectors.selectAllPoi, value: [] },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PoiListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
