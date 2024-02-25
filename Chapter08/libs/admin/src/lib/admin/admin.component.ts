import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { PoiSelectors, PoiActions, PoiEntity } from '@packt/poi';
import { Subscription } from 'rxjs';
import { ChartDataset, ChartOptions } from 'chart.js';
import { AdminService } from '../admin.service';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'packt-admin',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  dataSets: ChartDataset[] = [];
  labels: string[] = [];

  public pieChartOptions = {
    responsive: false,
  };
  constructor(
    private store: Store,
    private adminService: AdminService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(PoiSelectors.selectAllPoi)
      .subscribe((pois) => this.buildChart(pois));
    this.store.dispatch(PoiActions.initPoi());
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private buildChart(pois: PoiEntity[]) {
    this.labels = pois.map((poi) => poi.name);
    this.dataSets = [
      {
        data: this.adminService.getStatistics(pois),
      },
    ];
    console.log(this.dataSets);

    this.changeDetectorRef.detectChanges();
  }
}
