import { Component, OnInit } from '@angular/core';
import { Product, IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { VMStateEnum } from '../../shared/VMStateEnum';


@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss']
})
export class VendingMachineComponent implements OnInit {
  title = 'VendingMachine';
  inventory: Product[] = [];
  state: string = VMStateEnum.OFF;
  displayLine1: string = "Welcome";
  displayLine2: string = "Select a product";
  selectionIndex: number = 0;
  selectedProduct: Product | undefined;
  dispensedItems: Product[] = [];
  totalAmountReceived: number = 0;
  totalProductsSold: Product[] = [];

  constructor(private productService: ProductService){
  }

  ngOnInit(){
    this.setInventory();
    this.setInitialState();
  }

  //Initial set and API interaction fucntions
  public setInventory(): void {
    this.productService.getAllProducts().subscribe(
      (res: IProduct[]) => {
        res.forEach(elem => this.inventory.push(new Product(elem)))
      }
    )
  }

  public setInitialState(): void {
    this.displayLine1 = "Welcome";
    this.selectionIndex = 0;
    this.selectedProduct = undefined;
    if(this.isInventoryEmpty()){
      this.displayLine2 = "Sold Out";
      this.state = VMStateEnum.SOLD_OUT;
    }
    else{
      this.displayLine2 = "Select a product";
    }
  }

  public getPaymentResponse(result: boolean){
    this.displayLine1 = "Press any key to continue";

    if(result == true){
      this.displayLine2 = "Please take your product";
      if(this.selectedProduct != undefined){
        this.totalProductsSold.push(this.selectedProduct);
        this.totalAmountReceived += this.selectedProduct.price
        this.dispensedItems.push(this.selectedProduct);
        this.selectedProduct.count -= 1;
      }       
    }
    else{
      this.displayLine2 = "Payment Failed";
    }
    this.selectedProduct = undefined;
  }


  //Checking Functions
  public isInventoryEmpty(): boolean {
    return this.inventory.every(prod => prod.isSoldOut())
  }

  public checkForInputAndResetState(): boolean{
    if(this.displayLine1 == "Press any key to continue"){
      this.setInitialState();
      return true;
    }
    else{
      return false;
    }
  }

  //Button Click Handlers
  public onOffButtonClick(): void {
    if(this.state == VMStateEnum.OFF){
      this.state = this.isInventoryEmpty() ? VMStateEnum.SOLD_OUT : VMStateEnum.ON;
    }
    else{
      this.state = VMStateEnum.OFF;
    }
  }

  public directionButtonClick(direction: string): void {
    if(this.state != VMStateEnum.ON || this.checkForInputAndResetState()){
      return;
    }

    if(this.displayLine1 == "Welcome"){
      if(direction == 'up'){
        this.selectionIndex = this.selectionIndex == 0 ? this.inventory.length-1 : ((this.selectionIndex - 1) % this.inventory.length);
      }
      else{
        this.selectionIndex = (this.selectionIndex + 1) % this.inventory.length;
      } 
      this.selectedProduct = this.inventory[this.selectionIndex];
      this.displayLine2 = this.selectedProduct.toString();
    }
  }

  public dispensedItemClick(itemIndexToRemove: number){
    this.dispensedItems.splice(itemIndexToRemove, 1);
    this.checkForInputAndResetState();
  }
}
