export interface IProduct{
    productName: string;
    price: number;
    count: number;
}

export class Product implements IProduct {
    productName: string;
    price: number;
    count: number;

    constructor(obj: IProduct){
        this.productName = obj.productName;
        this.price = obj.price;
        this.count = obj.count;
    }

    public isSoldOut(): boolean {
        return this.count == 0;
    }

    public toString(): string {
        return this.productName + " $" + this.price.toString() + (this.isSoldOut() ? " Sold Out" : "");
    }
}


