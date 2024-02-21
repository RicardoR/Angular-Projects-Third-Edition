import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonalInfoComponent } from './personal-info.component';
import { GithubService } from '../../shared/api/github.service';
import { exampleUser } from '../../shared/mocks/user-mocks';

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
    
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    githubService.getUser.and.returnValue(of(exampleUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the user data', () => {
    expect(component.userData()).toEqual(exampleUser);
  });
});
