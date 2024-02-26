import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListComponent } from './poi-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { PoiSelectors } from '@packt/poi';

describe('PoiListComponent', () => {
  let component: PoiListComponent;
  let fixture: ComponentFixture<PoiListComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
