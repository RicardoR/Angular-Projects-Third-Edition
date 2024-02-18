import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap, map } from 'rxjs';
import { ReloadService } from './reload.service';
import { WeatherComponent } from './features/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WeatherComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private updates = inject(SwUpdate);
  private snackbar = inject(MatSnackBar);
  private destroyRef = inject(DestroyRef);
  private reloadService = inject(ReloadService)

  ngOnInit(): void {
    this.updates.versionUpdates.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => this.snackbar.open('A new version is available!', 'Update now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.updates.activateUpdate().then(() => this.reloadService.reloadPage()))
    ).subscribe()
  }
}
