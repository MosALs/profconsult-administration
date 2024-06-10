import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemObject } from '../models/item-object';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  submitItem(itemObj: FormData): Observable<any> {

    const uploadHeaders = new HttpHeaders();
    uploadHeaders.append('enctype', 'multipart/form-data');

    const req = new HttpRequest('POST', 'http://localhost:8080/api/v1/dashboard/item', itemObj, {
      reportProgress: true,
      responseType: 'text',
      headers: uploadHeaders
    });

    return this.http.request(req);
  }
}
