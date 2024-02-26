import { Component, input } from '@angular/core';
import { Card } from '../domain/card';

@Component({
  selector: 'lib-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards = input<Card[]>([]);
}
