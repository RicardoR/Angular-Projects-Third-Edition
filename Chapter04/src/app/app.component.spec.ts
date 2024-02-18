import {
  SwUpdate,
  VersionReadyEvent,
} from '@angular/service-worker';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ReloadService } from './reload.service';

describe('AppComponent', () => {
  let swUpdateSpy: jasmine.SpyObj<SwUpdate>;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockSwUpdate: Partial<SwUpdate>;
  let mockSnackbar: Partial<MatSnackBar>;
  let reloadService: jasmine.SpyObj<ReloadService>;


  beforeEach(async () => {
    let reloadSpyObj = jasmine.createSpyObj('ReloadService', ['reloadPage']);

    mockSwUpdate = {
      versionUpdates: of({ type: 'VERSION_READY' } as VersionReadyEvent),
      activateUpdate: jasmine.createSpy('activateUpdate').and.resolveTo(true),
    };
    mockSnackbar = {
      open: jasmine.createSpy('open').and.returnValue({
        afterDismissed: () => of({ dismissedByAction: true }),
      }),
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: SwUpdate, useValue: mockSwUpdate },
        { provide: MatSnackBar, useValue: mockSnackbar },
        { provide: ReloadService, useValue: reloadSpyObj }
      ],
    }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      reloadService = TestBed.inject(ReloadService) as jasmine.SpyObj<ReloadService>;
      reloadService.reloadPage.and.returnValue();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

   it('should subscribe to versionUpdates and perform update when a new version is available', fakeAsync(() => {

     component.ngOnInit();
     flush();
     expect(mockSnackbar.open).toHaveBeenCalledWith(
       'A new version is available!',
       'Update now'
     );
     expect(mockSwUpdate.activateUpdate).toHaveBeenCalled();
     expect(reloadService.reloadPage).toHaveBeenCalled();
   }));
});
