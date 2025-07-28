import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor() { }
  order:any[]=[];
  placeOrder(obj:any){
    this.order.push(obj);
    return "Successfully ordered";
  }
  
  getAllOrders(){
    return of(this.order);
  }
  getOrderByUsername(uname:any){
    return of(this.order.filter(e=>e.username==uname));
  }

  getOrderLength(){
    return this.order.length;
  }
  
}
