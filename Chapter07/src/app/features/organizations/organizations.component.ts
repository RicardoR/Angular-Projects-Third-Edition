import { Component, inject } from '@angular/core';
import { GithubService } from '../../shared/api/github.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PanelComponent } from "../panel/panel.component";

@Component({
    selector: 'app-organizations',
    standalone: true,
    templateUrl: './organizations.component.html',
    styleUrl: './organizations.component.scss',
    imports: [PanelComponent]
})
export class OrganizationsComponent {
  private githubService = inject(GithubService);
  organizationList = toSignal(this.githubService.getOrganizations());
}
