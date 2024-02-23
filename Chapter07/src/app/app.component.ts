import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PersonalInfoComponent } from './features/personal-info/personal-info.component';
import { RepositoriesComponent } from "./features/repositories/repositories.component";
import { OrganizationsComponent } from "./features/organizations/organizations.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        NgOptimizedImage,
        PersonalInfoComponent,
        RepositoriesComponent,
        OrganizationsComponent
    ]
})
export class AppComponent {
  username = 'ricardo-roguez';
}
