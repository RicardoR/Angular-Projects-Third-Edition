import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { PoiSelectors, PoiActions, PoiEntity } from '@packt/poi';
import { AdminService } from '../admin.service';
import { NgChartsModule } from 'ng2-charts';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'packt-admin',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  private store = inject(Store);
  private adminService = inject(AdminService);
  private allPoiSelected =  toSignal(this.store.select(PoiSelectors.selectAllPoi), {initialValue: []});
  
  dataSets = computed(() => this.buildChart(this.allPoiSelected()));
  labels = computed(() => this.allPoiSelected().map((poi) => poi.name));

  pieChartOptions = {
    responsive: false,
  };
   
  constructor() {
    this.store.dispatch(PoiActions.initPoi());
  }

  private buildChart(poi: PoiEntity[]) {
    return [
      {
        data: this.adminService.getStatistics(poi),
      },
    ];
  }
}
