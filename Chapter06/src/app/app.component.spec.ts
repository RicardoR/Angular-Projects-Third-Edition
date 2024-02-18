import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [RouterTestingModule]
      }
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].textContent).toContain('Take a photo');
    expect(menuItems[1].textContent).toContain('View gallery');
  });

  it('should have urls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual(
      '/capture'
    );
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual(
      '/view'
    );
  });
});
