import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubService } from '../../shared/api/github.service';
import { Repository } from '../../shared/domain/repository';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  private githubService = inject(GithubService);
  repositoryList = toSignal(this.githubService.getRepos());
  ownRepos!: Signal<Repository[]>;
}
