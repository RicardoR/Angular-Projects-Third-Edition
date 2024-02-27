import { Component, model } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'lib-copy-button',
  standalone: true,
  imports: [
    CdkCopyToClipboard
  ],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.css'
})
export class CopyButtonComponent {
  data = model<string>('');
  
  onCopy(): void {
    this.data.set('')
  }
}
