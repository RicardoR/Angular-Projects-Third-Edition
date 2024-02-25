import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PoiEntity } from '../state/poi.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private http = inject(HttpClient);

  getAll(): Observable<PoiEntity[]> {
    return this.http.get<PoiEntity[]>('assets/poi.json');
  }
}
