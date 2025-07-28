import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { ProductserviceService } from '../../productservice.service';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  constructor(private service:ProductserviceService,private sercart:CartService,private serviceorder:OrderServiceService){}
  totalprd:any;
  totalcart:any;
  totalprice:any;
  totalorders:any;
ngDoCheck(){ 
  this.totalprd=this.service.getProductLength();
  this.totalcart=this.sercart.getCartLength();
  this.totalprice=this.sercart.getTotalAmout();
  this.totalorders=this.serviceorder.getOrderLength();
}
// console.log("totalprd:",this.totalprd,"totalcart:",totalcart,"totalprice:",totalprice);
}
