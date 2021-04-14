import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b910b3cc03e24fbc81c450b48eb22807';

  topHeader(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
