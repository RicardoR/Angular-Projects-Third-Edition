import { Injectable } from '@angular/core';
import { PoiEntity } from '@packt/poi';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getStatistics(pois: PoiEntity[]): number[] {
    return pois.map((poi) => {
      const stat = localStorage.getItem('tour-' + poi.id) ?? Math.floor(Math.random() * 10);
      return +stat;
    });
  }
}
