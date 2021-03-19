import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerCallService {
  url = environment.url;
  id: any;

  constructor(private http: HttpClient) { }

  getApplicatioonId() {
    return this.http.get<any>(`${this.url}/applicationId`)
      .toPromise()
      .then(data => { return data; });
  }

  getPromoCode() {
    return this.http.get<any>(`${this.url}/promoCodeList`)
      .toPromise()
      .then(data => { return data; });
  }

  getAccountOpeningDetails() {
    return this.http.get<any>(`${this.url}/accountOpening`)
      .toPromise()
      .then(data => { return data; });
  }

  postAccountOpeningDetails(totalObj: object) {
    return this.http.post<any>(`${this.url}/accountOpening`, totalObj)
      .toPromise()
      .then(data => { return data; });
  }

  updateAccountOpeningDetails(updateObj: object) {
    this.id = sessionStorage.getItem('id');
    return this.http.put<any>(`${this.url}/accountOpening/${this.id}`, updateObj)
      .toPromise()
      .then(data => { return data; });
  }

  getAccountOpeningDetailsById() {
    this.id = sessionStorage.getItem('id');
    return this.http.get<any>(`${this.url}/accountOpening/${this.id}`)
      .toPromise()
      .then(data => { return data; });
  }


}
