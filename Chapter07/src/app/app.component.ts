import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PersonalInfoComponent } from './features/personal-info/personal-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PersonalInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username = 'ricardo-roguez';
}
