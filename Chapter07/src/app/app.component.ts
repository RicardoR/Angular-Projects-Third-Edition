import { Component, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PersonalInfoComponent } from './features/personal-info/personal-info.component';
import { RepositoriesComponent } from "./features/repositories/repositories.component";
import { OrganizationsComponent } from "./features/organizations/organizations.component";
import { Meta, Title } from '@angular/platform-browser';

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
export class AppComponent implements OnInit{
  private titleService = inject(Title);
  private meta = inject(Meta);

  username = 'ricardo-roguez';

  ngOnInit(): void {
    this.titleService.setTitle('Github portfolio app');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s GitHub portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}
