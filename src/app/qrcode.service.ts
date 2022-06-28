import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApphttpclientserviceService } from './apphttpclientservice.service';
import { Qrcode } from './qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService implements OnDestroy{

  constructor(private client: ApphttpclientserviceService) { }

  addAttendance(qrcode: Qrcode) : Observable<Object> {
    console.log(qrcode);
    return this.client.post('qrattendance', qrcode);
  }

  ngOnDestroy(): void {
    console.log('Service Destroy');
  }
}
