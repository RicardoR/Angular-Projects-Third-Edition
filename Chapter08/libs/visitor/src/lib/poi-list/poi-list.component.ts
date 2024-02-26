import { toSignal } from '@angular/core/rxjs-interop';
import { Component, OnInit, inject } from '@angular/core';
import { MatActionList } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  standalone: true,
  imports: [MatActionList],
  templateUrl: './poi-list.component.html',
  styleUrl: './poi-list.component.css',
})
export class PoiListComponent implements OnInit {
  private store = inject(Store);
  pois = toSignal(this.store.select(PoiSelectors.selectAllPoi));

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }));
  }
}
