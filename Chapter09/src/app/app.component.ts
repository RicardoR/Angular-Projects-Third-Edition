import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card, CardListComponent } from 'ui-controls';
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards = signal<Card[]>(assassins);

  onChange() {
    console.log(this.cards());
  }
}
