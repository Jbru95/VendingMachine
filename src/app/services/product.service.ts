import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, Product } from '../models/Product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(http: HttpClient) { }

  productsInterfaceArray: IProduct[] = [
    {
      productName: "Cookie",
      price: 1.35,
      count: 2
    },
    {
      productName: "Gum",
      price: 2.25,
      count: 4
    },
    {
      productName: "Chocolate",
      price: 3.50,
      count: 3
    }
  ];

  /**
   * getAllProducts
   * Calls api/products endpoint to recieve JSON object containing all products
   * @return Observable which can be subscribed to in order to access the success or error response
   */
  public getAllProducts(){
    //const url = this.endPointUrl;
    //return this.get(url);
    return of(this.productsInterfaceArray);
  }

  /**
   * postAddNewProduct
   * Adds a new product to the backend by calling the API and sending a json object
   * @param product product to add to the backend
   */
  // public postAddNewProduct(product: IProduct){

  // }

}
