import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonalInfoComponent } from './personal-info.component';
import { GithubService } from '../../shared/api/github.service';
import { userMocked } from '../../shared/mocks/user-mocks';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;
  let githubService: jasmine.SpyObj<GithubService>;

  beforeEach(async () => {
    const ghServiceSpy = jasmine.createSpyObj('GithubService', ['getUser'])
    await TestBed.configureTestingModule({
      imports: [PersonalInfoComponent],
      providers: [{ provide: GithubService, useValue: ghServiceSpy }]
    })
    .compileComponents();

    githubService = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    githubService.getUser.and.returnValue(of(userMocked));
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the user data', () => {
    expect(component.userData()).toEqual(userMocked);
  });

  it('should display the info in the view', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toBe(userMocked.name);
    expect(compiled.querySelector('.card-text')?.textContent?.trim()).toBe(userMocked.bio);
    expect(compiled.querySelector('.location-data')?.textContent?.trim()).toBe(userMocked.location);
    expect(compiled.querySelector('.followers-data')?.textContent?.trim()).toBe(userMocked.followers);
    expect(compiled.querySelector('.personal-blog')?.getAttribute('href')).toBe(userMocked.blog);
  });
});
