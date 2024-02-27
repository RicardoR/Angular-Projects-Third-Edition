import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card, CardListComponent, CopyButtonComponent } from 'ui-controls';
import { assassins } from './assassins';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, FormsModule, CopyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards = signal<Card[]>(assassins);
  title: string = '';
  
  onChange() {
    console.log(this.cards());
  }
  
  log() {
    alert(this.title + ' copied to the clipboard');
  }
}
