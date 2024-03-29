import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesComponent } from './repositories.component';
import { GithubService } from '../../shared/api/github.service';
import { of } from 'rxjs';
import { repositoriesMocked, repositoryNotForkedMocked } from '../../shared/mocks/repository-list.mock';

describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;
  let githubService: jasmine.SpyObj<GithubService>;

  beforeEach(async () => {
    const githubSpy = jasmine.createSpyObj('GithubService', ['getRepos']);
    await TestBed.configureTestingModule({
      imports: [RepositoriesComponent],
      providers: [
        {provide: GithubService, useValue: githubSpy}
      ]
    })
    .compileComponents();

    githubService = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    githubService.getRepos.and.returnValue(of(repositoriesMocked));
    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the repositories from github service', () => {
    fixture.detectChanges();
    expect(component.repositoryList()).toEqual(repositoriesMocked)
  });

  it('should filter the not forked repositories', () => {
    fixture.detectChanges();
    expect(component.ownRepos()).toEqual(repositoryNotForkedMocked);
  });

  it('should display the list of the non forked repos', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('[data-test=card-repo]').length).toBe(
      repositoryNotForkedMocked.length
    );
  });
});
