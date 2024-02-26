import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubService } from '../../shared/api/github.service';
import { PanelComponent } from "../panel/panel.component";

@Component({
    selector: 'app-repositories',
    standalone: true,
    templateUrl: './repositories.component.html',
    styleUrl: './repositories.component.scss',
    imports: [PanelComponent]
})
export class RepositoriesComponent {
  private githubService = inject(GithubService);
  repositoryList = toSignal(this.githubService.getRepos());
  ownRepos = computed(() => this.repositoryList()?.filter(repo => !repo.fork));
}
