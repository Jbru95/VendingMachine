import { Component, OnChanges, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CCPaymentInfo } from 'src/app/models/CCPaymentInfo';
import { Product } from 'src/app/models/Product';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-credit-card-reader',
  templateUrl: './credit-card-reader.component.html',
  styleUrls: ['./credit-card-reader.component.scss']
})
export class CreditCardReaderComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() paymentProcessEvent = new EventEmitter<boolean>();

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  payPressed(): void {
    if(this.product == undefined) return;

    let newTransaction:CCPaymentInfo = {
      ccId: 12345,
      product: this.product
    }
    console.log(newTransaction);

    this.paymentService.processNewPaymentTransaction(newTransaction).subscribe(
      res => {
        console.log(res);
        this.paymentProcessEvent.emit(res);
      }
    )
  }

}
