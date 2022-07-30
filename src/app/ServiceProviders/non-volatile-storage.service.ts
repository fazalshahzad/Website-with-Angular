import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileStorageService {

  constructor() { }

  setBasicDataInfo2LS(Id:any){
    localStorage.setItem('product-id' ,JSON.stringify(Id));
  }
  getBasicDataInfoFromLS(){
    return JSON.parse(localStorage.getItem('product-item') || '{}');
  }

  setProductInfo2LS(Data:any){
    localStorage.setItem('customer-cart', JSON.stringify(Data));
  }
  getProductInfoFromLS(){
    return JSON.parse(localStorage.getItem('customer-cart') || '{}');
  }

  setCustomerOtherItemsInfo(quantity:any){
    localStorage.setItem('customer-total-items', JSON.stringify(quantity));
  }
  getCustomerOtherItemsInfo(){
    return JSON.parse(localStorage.getItem('customer-total-item') || '{}');
  }
}
