import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';

const expectedCaption = "dummy caption!";
const expectedIcon = "icon";

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('caption', expectedCaption);
    fixture.componentRef.setInput('icon', expectedIcon);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the caption and icon', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.caption-content')?.textContent?.trim()).toBe(expectedCaption);
    expect(compiled.querySelector(`.bi-${expectedIcon}`)).toBeTruthy();
  });
});
