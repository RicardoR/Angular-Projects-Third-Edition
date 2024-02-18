import { PhotoService } from './../photo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturePage } from './capture.page';

describe('CapturePage', () => {
  let component: CapturePage;
  let fixture: ComponentFixture<CapturePage>;
  let photoServiceSpy: jasmine.SpyObj<PhotoService>;

  beforeEach(async () => {
    let photoServiceSpyObj = jasmine.createSpyObj('PhotoService', ['takePhoto']);

    await TestBed.configureTestingModule({
      imports: [CapturePage],
      providers: [{ provide: PhotoService, useValue: photoServiceSpyObj }]
    }).compileComponents()

    fixture = TestBed.createComponent(CapturePage);
    component = fixture.componentInstance;
    photoServiceSpy = TestBed.inject(PhotoService) as jasmine.SpyObj<PhotoService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a photo when openCamera is called', () => {
    component.openCamera();
    expect(photoServiceSpy.takePhoto).toHaveBeenCalled();
  })
});
