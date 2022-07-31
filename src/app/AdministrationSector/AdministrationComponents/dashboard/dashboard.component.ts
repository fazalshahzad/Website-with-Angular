import { Component, OnInit } from '@angular/core';
import { DatabaseCarrierService } from 'src/app/ServiceProviders/database-carrier.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productInfoComingFromTSAfterServ:any =  [];

  constructor(

    private _databaseCarrierServ:DatabaseCarrierService


  ) { }

  ngOnInit(): void {

    this.getDataFromServForCards();
  }
  
  getDataFromServForCards(){
   this.productInfoComingFromTSAfterServ = this._databaseCarrierServ.getDatabaseFromHQ();
  }

}
