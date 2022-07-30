import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { DatabaseCarrierService } from 'src/app/ServiceProviders/database-carrier.service';
import { DatabaseMessengerService } from 'src/app/ServiceProviders/database-messenger.service';
import { NonVolatileStorageService } from 'src/app/ServiceProviders/non-volatile-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dataArray:any =[];

  constructor(

    private _databaseCarrierServ:DatabaseCarrierService,
    private _databaseMessengerServ:DatabaseMessengerService,
    private _nonVolatileStorage:NonVolatileStorageService,
    private _router:Router

  ) { }

  ngOnInit(): void {
    
    this.data4MyCompo();
  }

  data4MyCompo(){
    this.dataArray = this._databaseCarrierServ.getDatabaseFromHQ();
  }
  go2CartPage(Id:any){
    this._nonVolatileStorage.setBasicDataInfo2LS(Id);
    this._databaseMessengerServ.sendMessengerWithData(Id);
    this._router.navigate(['cart']);
  }
}