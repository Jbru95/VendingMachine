import { Product } from "./Product";

export interface ICCPaymentInfo{
    ccId: number;
    product: Product;
}

export class CCPaymentInfo implements ICCPaymentInfo {
    ccId: number;
    product: Product;

    constructor(obj: ICCPaymentInfo){
        this.ccId = obj.ccId;
        this.product = obj.product;
    }
}


