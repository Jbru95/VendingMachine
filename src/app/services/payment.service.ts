import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, take } from 'rxjs/operators';
import { throwError, Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  //endPointUrl: string = "mockEndpoint/payment";
  mockPaymentOn = true;

  constructor(private http: HttpClient) { }

  /**
   * processNewPaymentTransaction
   * Adds a new payment transaction by calling the API with a json data object.
   * @param data json data object to POST to the endpoint
   */
  public processNewPaymentTransaction(paymentData: any){
    //const url = this.endPointUrl;
    //return this.post(url, paymentdata);

    return of(this.mockPaymentOn); //returning true or false just based on mockPaymentOn variable
  }

  // /**
  //  * Post
  //  * Sends an HTTP POST request
  //  * @param url url to send the POST request to 
  //  * @param data JSON object to POST to the endpoint
  //  */
  // private post(url: string, data: any ){
  //   return this.http.post(
  //     url,
  //     JSON.stringify(data),
  //     {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       observe: 'response'
  //     }).pipe(
  //       map(res => res),
  //       catchError(this.handleError)
  //     );
  // }

  // /**
  //  * handleError
  //  * Handle any HTTP Response Errors
  //  * @param error
  //  */
  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('Error occurred: ', error.error.message);
  //   }
  //   else {
  //     console.error(
  //       `API returned ${error.status},` +
  //       `body was: ${error.error}`
  //     );
  //   }
  //   return throwError(error.error);
  // }
}
