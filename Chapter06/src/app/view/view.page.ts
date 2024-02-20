import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Viewer } from 'cesium';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') content: ElementRef | undefined;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const viewer = new Viewer(this.content?.nativeElement);
  }

}
