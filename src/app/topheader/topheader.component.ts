import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  // to display data
  topheaderDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeader().subscribe((result) => {
      this.topheaderDisplay = result.articles;
    });
  }
}
