import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { dummyWeather } from './mocks/weather-mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    let spyObj = jasmine.createSpyObj('WeatherService', ['getWeather']);
    await TestBed.configureTestingModule({
      imports: [WeatherComponent, HttpClientTestingModule, BrowserAnimationsModule],
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
    expect(weatherServiceSpy.getWeather).toHaveBeenCalledWith('Valladolid');
    expect(component.weather()).toEqual(dummyWeather);
  });

  it('should contain the info when we retrieve data', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("mat-card-header")).toBeNull();

    component.search('valladolid');
    fixture.detectChanges();
    const newCompiled = fixture.nativeElement as HTMLElement;
    expect(newCompiled.querySelector("mat-card-header")).toBeTruthy();
  });
});
