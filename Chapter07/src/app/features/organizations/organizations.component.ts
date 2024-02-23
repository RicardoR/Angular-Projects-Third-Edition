import { Component, Signal, inject } from '@angular/core';
import { Organization } from '../../shared/domain/organization';
import { GithubService } from '../../shared/api/github.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  private githubService = inject(GithubService);
  organizationList = toSignal(this.githubService.getOrganizations());
}
