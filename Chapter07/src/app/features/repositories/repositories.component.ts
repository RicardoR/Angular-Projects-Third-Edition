import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubService } from '../../shared/api/github.service';

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
  ownRepos = computed(() => this.repositoryList()?.filter(repo => !repo.fork));
}
