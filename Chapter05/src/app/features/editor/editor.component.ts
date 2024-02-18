import { Component } from '@angular/core';
import { NgxWigModule } from 'ngx-wig';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NgxWigModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {}
