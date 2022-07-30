import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { DatabaseCarrierService } from 'src/app/ServiceProviders/database-carrier.service';
import { DatabaseMessengerService } from 'src/app/ServiceProviders/database-messenger.service';
import { NonVolatileStorageService } from 'src/app/ServiceProviders/non-volatile-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data:any;
  lsOfCart:any = [];
  showBox:Boolean = false;
  dataThatNeedForStorage:any = [];
  filteredDBElement:any = [];
  productActualQuantity:any;
  selectedQuantity = 0;
  cart:any = [];
  newCart:any = [];
  cartQuantity = 0;
  showCart:Boolean = false;

  constructor(

    private _databaseCarrierServ:DatabaseCarrierService,
    private _dataMessengerServ:DatabaseMessengerService,
    private _nonVolatileStorage:NonVolatileStorageService,
    private _router:Router,
    private _toastr:ToastrService

  ) { }

  ngOnInit(): void {
    this._dataMessengerServ.getMessengerWithData().subscribe((inComingDataFromServ:any) => {
      this.data = inComingDataFromServ;
    }
    )
    this.getDataFromServForStorage();
    this.lsOfCart = this._nonVolatileStorage.getProductInfoFromLS();
    if(Object.entries(this.lsOfCart).length ! == 0){
      this.showBox = true;
    }
  }
  getDataFromServForStorage(){
    this.dataThatNeedForStorage = this._databaseCarrierServ.getDatabaseFromHQ();
    if(this.data === undefined){
      const Id = this._nonVolatileStorage.getBasicDataInfoFromLS();
      this.filteredDBElement = this.dataThatNeedForStorage.filter((Result:any) => { return (Result._id === Id)});
      this.productActualQuantity = this.filteredDBElement[0].qty;
      return
    }
    this.filteredDBElement = this.dataThatNeedForStorage.filter((Result:any) => {return (Result._id === this.data.Id)});
    this.productActualQuantity = this.filteredDBElement[0].qty;
  }

  addItem(){
    this.showBox = true;
    let cartItemAddition = this._nonVolatileStorage.getProductInfoFromLS();
    if(this.selectedQuantity >= this.productActualQuantity){
      this._toastr.error('Sorry, your desired quantity is not in stock!');
      return
    }
    if(Object.entries(cartItemAddition).length === 0){
      this.cart.push(this.filteredDBElement[0]);
      this._nonVolatileStorage.setProductInfo2LS(this.cart);
      this.data = undefined;
      this.lsOfCart = this._nonVolatileStorage.getProductInfoFromLS();
      return
    }
    if(Object.entries(cartItemAddition).length ! == 0 && this.data ! == undefined){
      this.newCart.push(this.filteredDBElement[0]);
      cartItemAddition.forEach((element:any) => {
        this.newCart.push(element);
      });
      this._nonVolatileStorage.setProductInfo2LS(this.newCart);
      this.data = undefined;
      this.lsOfCart = this._nonVolatileStorage.getProductInfoFromLS();
      return
    }
    cartItemAddition.map((element:any) => {
      if(this.filteredDBElement[0]._id === element._id){
        element.newQuantity++;
        this.selectedQuantity++;
      }
    });
    this._nonVolatileStorage.setProductInfo2LS(cartItemAddition);
    this._nonVolatileStorage.setCustomerGatherItemsInfo(this.cartQuantity);
    this.lsOfCart = this._nonVolatileStorage.getProductInfoFromLS();
  }

  subItem(){
    let cartItemAddition = this._nonVolatileStorage.getProductInfoFromLS();
    if(this.selectedQuantity <= 0){
      return
    } 
    cartItemAddition.map((element:any) => {
      if(this.filteredDBElement[0]._id === element._id){
        element.newQuantity--;
        this.selectedQuantity--;
      }
    });
    this._nonVolatileStorage.setProductInfo2LS(cartItemAddition);
    this._nonVolatileStorage.setCustomerGatherItemsInfo(this.cartQuantity);
  }

}