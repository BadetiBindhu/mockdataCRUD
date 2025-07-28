import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart:any[]=[];
  result:any;
  addTOCart(obj:any){
    this.cart.push(obj);
    return "successfully added ...";
  }
  getCartItems(){
    return of(this.cart);
  }
  getCartLength(){
    return this.cart.length;
  }
  total:any;
  getTotalAmout(){
    this.total=0;
    for(let obj of this.cart){
  
        this.total+=parseInt(obj.price);
    }
    console.log("total:",this.total);
    return this.total;
  }

  index:any;
  deleteCart(pid:any){
    this.index=this.cart.findIndex((e)=>e.id==pid);
    this.cart.splice(this.index,1);
    return "Successfully deleted";
  }
}
