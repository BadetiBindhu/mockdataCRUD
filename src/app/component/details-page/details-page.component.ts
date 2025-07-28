import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../../productservice.service';
import { CartService } from '../../cart.service';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  constructor(private ar:ActivatedRoute,private service:ProductserviceService,private servicecart:CartService,private serviceorder:OrderServiceService){}
  pid:any;
  obj:any;
  length:any=0;
  user:any;username:any;
  ngOnInit(){
    this.pid=this.ar.snapshot.paramMap.get("id");
     console.log("detailPage:",this.pid);
     this.obj=this.service.getProductById(this.pid);
     this.user=localStorage.getItem("user");
     this.user=JSON.parse(this.user);
     this.username=this.user.username;
  }
  result:any;
  addNow(){
     if(!this.servicecart.cart.includes(this.obj)){
      this.result= this.servicecart.addTOCart(this.obj);
     alert(this.result);
     }else{
      alert("Already Added to the Cart");
     }
  }
   // Order product
   proObj:any;address:any;phone:any;
  orderNow(obj:any){
     this.proObj=obj;
  }

  orderObj:any;
  response:any;
  buyNow(){
    this.orderObj={
      id:this.proObj.id,
      img:this.proObj.img,
      title:this.proObj.title,
      username:this.username,
      orderedDate:new Date(),
      address:this.address,
      phone:this.phone
    }
  this.response=this.serviceorder.placeOrder(this.orderObj);
  alert(this.response);
  console.log(this.serviceorder.order);
  
  }
  
}
