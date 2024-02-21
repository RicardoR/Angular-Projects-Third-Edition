import { Component, inject } from '@angular/core';
import { GithubService } from '../../shared/api/github.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../shared/domain/user';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  private ghService = inject(GithubService);
  userData = toSignal(this.ghService.getUser(), {initialValue: {} as User});
}
