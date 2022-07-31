import { Component, OnInit } from '@angular/core';
import { DatabaseCarrierService } from 'src/app/ServiceProviders/database-carrier.service';

@Component({
  selector: 'app-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css']
})
export class ProductAnalyticsComponent implements OnInit {

  productDBFromDBCServ:any = [];
  // i:any; //not sure whether its ok or not to declare it here!

  constructor(

    private _databaseCarrierServe:DatabaseCarrierService

  ) { }

  ngOnInit(): void {

    this.productDBFromDBCServ = this._databaseCarrierServe.getDatabaseFromHQ();
    console.log(this.productDBFromDBCServ);

  }

}
