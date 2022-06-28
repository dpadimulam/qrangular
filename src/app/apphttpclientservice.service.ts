import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Qrcode } from './qrcode';

@Injectable({
  providedIn: 'root'
})
export class ApphttpclientserviceService {

  constructor(private http: HttpClient) { }

  private qrApplication = environment.qrapplication;

  public get(endpoint: string) {
    return this.http.get(this.qrApplication + endpoint);
  }

  public post(endpoint:string, body:Qrcode) {
    return this.http.post(this.qrApplication + endpoint, body);
  }
}
