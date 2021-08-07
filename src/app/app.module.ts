import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendingMachineComponent } from './components/vending-machine/vending-machine.component';
import { CreditCardReaderComponent } from './components/credit-card-reader/credit-card-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    CreditCardReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
