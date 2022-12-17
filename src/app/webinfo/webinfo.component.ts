import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteInfo } from './webinfo.types';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-webinfo',
  templateUrl: './webinfo.component.html',
  styleUrls: ['./webinfo.component.scss']
})
export class WebinfoComponent implements OnInit {
  url: string = "";

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getSiteInfo() {
    this.http.get<SiteInfo>('http://localhost:8080/webinfo?url=' + this.url)
      .subscribe(data => {
        this.openPopup(data);
      });
  }

  openPopup(data: SiteInfo) {
    this.dialog.open(PopupComponent, {
      data: data
    });
  }
}
