import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteInfo } from './webinfo.types';

@Component({
  selector: 'app-webinfo',
  templateUrl: './webinfo.component.html',
  styleUrls: ['./webinfo.component.scss']
})
export class WebinfoComponent implements OnInit {
  url: string = "";
  isLoading = false;
  errorMessage: string = "";
  result?: SiteInfo

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getSiteInfo() {
    this.isLoading = true;
    this.errorMessage = "";
    this.http.get<SiteInfo>('http://localhost:8080/webinfo?url=' + this.url)
      .subscribe(
        data => {
          this.result = data;
          this.isLoading = false;
        },
        error => {
          this.errorMessage = 'An error occurred while retrieving the site information. Please try again.';
          this.isLoading = false;
        }
      );
  }
}
