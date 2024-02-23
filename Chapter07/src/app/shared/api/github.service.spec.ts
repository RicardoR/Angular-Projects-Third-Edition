import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GithubService } from './github.service';
import { userMocked } from '../mocks/user-mocks';
import { repositoriesMocked } from '../mocks/repository-list.mock';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the github username ', () => {
    const username = service.getUserName();
    expect(username()).toBe('ricardo-roguez');
  });

  it('should retrieve the user data', () => {
    const apiUrl = 'https://api.github.com/users/ricardo-roguez';
    service.getUser().subscribe(user => {
      expect(user).toEqual(userMocked);
    });
    
    const request = httpMock.expectOne(req => req.url === apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(userMocked);
  });
  
  it('should retrieve the repos data', () => {
    const apiUrl = 'https://api.github.com/users/ricardo-roguez/repos';
    service.getRepos().subscribe(repositoryList => {
      expect(repositoryList).toEqual(repositoriesMocked);
    });
    
    const request = httpMock.expectOne(req => req.url === apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(repositoriesMocked);
  });
});
