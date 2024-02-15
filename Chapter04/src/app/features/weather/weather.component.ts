import { Component, inject, Injector, Signal } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from './weather.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  private injector = inject(Injector)
  weather!: Signal<Weather|undefined>;
  private weatherService = inject(WeatherService);
  
  search(city: string): void {
    this.weather = toSignal(this.weatherService.getWeather(city), {injector: this.injector});
  }
}
