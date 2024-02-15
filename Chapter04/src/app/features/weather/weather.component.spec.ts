import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import SpyObj = jasmine.SpyObj;
import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { dummyWeather } from './mocks/weather-mock';
import { C } from '@angular/cdk/keycodes';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    let spyObj = jasmine.createSpyObj('WeatherService', ['getWeather']);
    await TestBed.configureTestingModule({
      imports: [WeatherComponent],
      providers: [{provide: WeatherService, useValue: spyObj  }]
    })
    .compileComponents();

    weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
    weatherServiceSpy.getWeather.and.returnValue(of(dummyWeather))
    
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the weather data when calling service', () => {
    component.search('Valladolid');
    expect(component.weather()).toEqual(dummyWeather);
  });
});
