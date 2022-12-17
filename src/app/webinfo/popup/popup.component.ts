import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SiteInfo } from '../webinfo.types';

@Component({
  selector: 'app-popup',
  template: `
    <h1>{{ data.title }}</h1>
    <img [src]="data.imageUrl">
    <p>{{ data.description }}</p>
    <button mat-button (click)="close()">Close</button>
  `
})
export class PopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SiteInfo,
    private dialogRef: MatDialogRef<PopupComponent>
  ) { }

  close() {
    this.dialogRef.close();
  }
}
