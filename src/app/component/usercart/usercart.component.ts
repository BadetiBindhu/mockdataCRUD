import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrl: './usercart.component.css'
})
export class UsercartComponent {
   constructor(private sercart:CartService){}
   all:any;
   totalamout:any=0;
   ngOnInit(){
  this.sercart.getCartItems().subscribe((data)=>{
    this.all=data;
   
  })
   }
  
   ngDoCheck(){
    this.totalamout=this.sercart.getTotalAmout();
   }
  result2:any;
   removeCart(cid:any){
    console.log("delete cardid:",cid);
    this.result2=this.sercart.deleteCart(cid);
    alert(this.result2);
   }
}
