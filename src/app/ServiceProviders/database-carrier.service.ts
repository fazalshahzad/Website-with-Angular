import { Injectable } from '@angular/core';
import ProductDetailsDatabase from '../DatabaseHeadquarter/ProductDetailsDatabase.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseCarrierService {

  Database = ProductDetailsDatabase

  constructor() { }

  getDatabaseFromHQ(){
    return this.Database;
  }
}
