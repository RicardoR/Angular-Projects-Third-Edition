import { Component, model } from '@angular/core';
import { Card } from '../domain/card';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-card-list',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards = model<Card[]>([]);

  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards(), event.previousIndex, event.currentIndex);
    this.cards.update(cards => [...cards]);
  }
}
