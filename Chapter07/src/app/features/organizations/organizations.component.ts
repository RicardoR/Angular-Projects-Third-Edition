import { Component, Signal } from '@angular/core';
import { Organization } from '../../shared/domain/organization';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  organizationList!: Signal<Organization[]>;
}
