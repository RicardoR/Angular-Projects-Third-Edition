import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { VisitorComponent } from './visitor.component';
import { PoiSelectors } from '@packt/poi';

describe('VisitorComponent', () => {
  let component: VisitorComponent;
  let fixture: ComponentFixture<VisitorComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        provideMockStore({
          selectors: [{ selector: PoiSelectors.selectAllPoi, value: [] }],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
