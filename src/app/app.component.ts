import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Qrcode } from './qrcode';
import { QrcodeService } from './qrcode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scanResult:any= '';
  title = 'qr-code';
  isLoading: boolean = false;
  typeSelected:string ='ball-fussion';
  message: string ='Please scan your QR code.';
  alertStyle: string = 'alert alert-primary';

  constructor(private spinnerService: NgxSpinnerService, private qrCodeService: QrcodeService) {
    this.typeSelected = 'ball-fussion';
  }

  onCodeResult(result:string){
    this.scanResult = result;
    this.isLoading = true;
    if (this.isLoading && this.scanResult!=null) {
      this.spinnerService.show();
      this.qrCodeService.addAttendance(new Qrcode(this.scanResult)).subscribe(data => {
        this.isLoading = false;
        this.spinnerService.hide();
        this.message = "Verified! Ready for next scan.";
        this.alertStyle = "alert alert-success";
      }, err=> {
        this.isLoading = false;
        this.spinnerService.hide();
        this.message = "Not Successful. Please try again!";
        this.alertStyle = "alert alert-danger";
      });

    }
  }
}
