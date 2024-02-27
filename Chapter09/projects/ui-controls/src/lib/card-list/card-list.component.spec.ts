import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { cardsListMock } from '../test/cards-list.mock';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListComponent);
    fixture.componentRef.setInput('cards', [...cardsListMock]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('[data-test=card]').length).toBe(cardsListMock.length);
  });

  it('should move the cards', () => {
    const myEvent = { currentIndex: 1, previousIndex: 0 } as CdkDragDrop<string[]>;
    component.sortCards(myEvent);
    expect(component.cards()[0]).toEqual(cardsListMock[1]);
  });
});
