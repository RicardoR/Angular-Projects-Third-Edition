import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsComponent } from './organizations.component';
import { GithubService } from '../../shared/api/github.service';
import { organizationListMocked } from '../../shared/mocks/organization-list.mock';
import { of } from 'rxjs';

describe('OrganizationsComponent', () => {
  let component: OrganizationsComponent;
  let fixture: ComponentFixture<OrganizationsComponent>;
  let githubSerice: jasmine.SpyObj<GithubService>;

  beforeEach(async () => {
    const ghserviceSpy = jasmine.createSpyObj('GithubService', ['getOrganizations']);
    await TestBed.configureTestingModule({
      imports: [OrganizationsComponent],
      providers: [{provide: GithubService, useValue: ghserviceSpy}]
    })
    .compileComponents();

    githubSerice = TestBed.inject(GithubService) as jasmine.SpyObj<GithubService>;
    githubSerice.getOrganizations.and.returnValue(of(organizationListMocked));

    fixture = TestBed.createComponent(OrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the organizations from gitubService', () => {
    fixture.detectChanges();
    expect(component.organizationList()).toEqual(organizationListMocked);
  })
});
