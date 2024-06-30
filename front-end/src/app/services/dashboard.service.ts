import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComnpanyLinks, Gallery, ItemObject, Partner } from '../models/item-object';
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

  submitPartner(partnerObj: FormData): Observable<any> {

    const uploadHeaders = new HttpHeaders();
    uploadHeaders.append('enctype', 'multipart/form-data');

    const req = new HttpRequest('POST', 'http://localhost:8080/api/v1/dashboard/partner', partnerObj, {
      reportProgress: true,
      responseType: 'text',
      headers: uploadHeaders
    });

    return this.http.request(req);
  }

  submitGallery(galleryObj: FormData): Observable<any> {

    const uploadHeaders = new HttpHeaders();
    uploadHeaders.append('enctype', 'multipart/form-data');

    const req = new HttpRequest('POST', 'http://localhost:8080/api/v1/dashboard/gallery', galleryObj, {
      reportProgress: true,
      responseType: 'text',
      headers: uploadHeaders
    });

    return this.http.request(req);
  }

  submitLinks(payload: ComnpanyLinks) {
    const req = new HttpRequest('POST', 'http://localhost:8080/api/v1/dashboard/links', payload, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getAllItems(): Observable<ItemObject[]> {
    return this.http.get('http://localhost:8080/api/v1/dashboard/all-items') as Observable<ItemObject[]>;
  }


  getAllPartners(): Observable<Partner[]> {
    return this.http.get('http://localhost:8080/api/v1/dashboard/all-partners') as Observable<Partner[]>;
  }

  getAllGalleries() : Observable<Gallery[]> {
    return this.http.get('http://localhost:8080/api/v1/dashboard/all-galleries') as Observable<Gallery[]>;
  }

  deleteOne(id: any , key :string) {
    return this.http.delete('http://localhost:8080/api/v1/dashboard/delete/'+id+'/'+key) as Observable<boolean[]>;
  }

}
