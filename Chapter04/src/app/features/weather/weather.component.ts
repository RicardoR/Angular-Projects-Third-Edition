import { Component, inject, signal } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weather =signal<Weather|null>(null);
  private weatherService = inject(WeatherService);
  
  search(city: string) {}
}
