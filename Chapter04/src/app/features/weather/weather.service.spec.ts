import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { dummyWeather } from './mocks/weather-mock';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve weather data from the API via GET', () => {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/';
    const city = 'New York';

    service.getWeather(city).subscribe(weather => {
      expect(weather).toEqual(dummyWeather);
    });

    const req = httpMock.expectOne(req => req.url === `${apiUrl}weather`);
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('units')).toBe('metric');
    expect(req.request.params.get('q')).toBe(city);
    expect(req.request.params.get('appId')).toBeDefined();

    req.flush(dummyWeather);
  });
});
