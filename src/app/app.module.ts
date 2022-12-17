import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WebinfoComponent } from './webinfo/webinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './webinfo/popup/popup.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    WebinfoComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
