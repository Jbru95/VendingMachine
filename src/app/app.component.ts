import { Component } from '@angular/core';
import { Product, IProduct } from './models/Product';
import { ProductService } from './services/product.service';
import { VMStateEnum } from './shared/VMStateEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VendingMachine';

  constructor(){
  }

  ngOnInit(){

  }

}
