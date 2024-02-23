import { Component, Signal, signal } from '@angular/core';
import { Repository } from '../../shared/domain/repository';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  repositoryList!: Signal<Repository[]>;
}
