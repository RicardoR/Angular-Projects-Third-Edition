import { Component, inject, Injector, signal, Signal } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from './weather.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { DecimalPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    DecimalPipe,
    MatInput
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  private injector = inject(Injector)
  weather: Signal<Weather> = signal({} as Weather);
  private weatherService = inject(WeatherService);
  
  search(city: string): void {
    this.weather = toSignal(this.weatherService.getWeather(city), {injector: this.injector, initialValue: {} as Weather});
  }
}
