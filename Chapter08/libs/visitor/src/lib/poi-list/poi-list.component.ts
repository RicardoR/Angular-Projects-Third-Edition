import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  standalone: true,
  imports: [],
  templateUrl: './poi-list.component.html',
  styleUrl: './poi-list.component.css'
})
export class PoiListComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
  }
}
