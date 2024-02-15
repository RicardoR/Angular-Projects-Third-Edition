import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private httpClient = inject(HttpClient);
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '';
  constructor() {
    this.httpClient
      .get<{ apiKey : string }>('./assets/secrets.json')
      .subscribe((api) => (this.apiKey = api.apiKey));
  }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
        .set('units', 'metric')
        .set('q', city)
        .set('appId', this.apiKey);
    return this.httpClient.get<Weather>(this.apiUrl + 'weather', { params: options });
  }
}
