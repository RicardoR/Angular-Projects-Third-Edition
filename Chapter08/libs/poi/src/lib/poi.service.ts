import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoiEntity } from '../state/poi.models';

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  getAll(): Observable<PoiEntity[]> {
    throw new Error('Method not implemented.');
  }
}
