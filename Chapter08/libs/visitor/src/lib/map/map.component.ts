import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GoogleMapsModule } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  private store = inject(Store);
  poi = toSignal(this.store.select(PoiSelectors.selectEntity), { initialValue: {} as any });
}
