import { Component, inject, signal } from '@angular/core';
import { GithubService } from '../../shared/api/github.service';
import { User } from '../../shared/domain/user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  private ghService = inject(GithubService);
  userData = toSignal(this.ghService.getUser());
}
