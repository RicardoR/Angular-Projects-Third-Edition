import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GithubService } from './github.service';
import { userMocked } from '../mocks/user-mocks';
import { repositoriesMocked } from '../mocks/repository-list.mock';
import { organizationListMocked } from '../mocks/organization-list.mock';

const apiUrlBase = 'https://api.github.com/users/ricardo-roguez';

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
    service.getUser().subscribe(user => {
      expect(user).toEqual(userMocked);
    });

    const request = httpMock.expectOne(req => req.url === apiUrlBase);
    expect(request.request.method).toBe('GET');
    request.flush(userMocked);
  });

  it('should retrieve the repos data', () => {
    service.getRepos().subscribe(repositoryList => {
      expect(repositoryList).toEqual(repositoriesMocked);
    });

    const request = httpMock.expectOne(req => req.url === `${apiUrlBase}/repos`);
    expect(request.request.method).toBe('GET');
    request.flush(repositoriesMocked);
  });

  it('should retrieve the organizations data', () => {
    service.getOrganizations().subscribe(organization => {
      expect(organization).toEqual(organizationListMocked)
    });

    const request = httpMock.expectOne((req) => req.url === `${apiUrlBase}/orgs`);
    expect(request.request.method).toBe('GET');
    request.flush(organizationListMocked);
  });
});
