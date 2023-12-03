import { Injectable } from '@angular/core';
import { ShippingModel } from '../model/shipping.model';

@Injectable({
    providedIn: 'root'
})
export class ShippingService {

    constructor() { }


    public setShipping(toCreate: ShippingModel){
        localStorage.setItem("shipping", JSON.stringify(toCreate));
    }

    public getAllShippings(): ShippingModel[]{
        return [JSON.parse(localStorage.getItem("shipping")!)];        
    }
}
