import { Component } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';
import { Router } from '@angular/router';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrl: './userview.component.css'
})
export class UserviewComponent {
  constructor(private service:ProductserviceService,private router:Router,private serviceorder:OrderServiceService){}
  availpro:any;user:any;username:any;
  ngOnInit(){
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.service.getProducts().subscribe((data)=>{
      this.availpro=data;
      console.log("availpro:",this.availpro);
    })
  }

  // Search Bar
  search:any;
  filterme(){
    this.service.filterData(this.search).subscribe((d)=>{
      this.availpro=d;
      console.log("availpro:",this.availpro)
    })
  }

  //Select Category
  selectedCategory:any;
  selectedProducts(){

      this.service.getSelectCategoryProducts(this.selectedCategory).subscribe((data)=>{
      this.availpro=data;
      console.log("selectedCategory products:",this.availpro);
    })
  }

  //To Open Details Page based on id
  openDetail(pid:any){
      this.router.navigateByUrl(`user/details/${pid}`);
  }

  //OrderAll
order:any;address:any;phone:any;result2:any;orderall:any;
  orderAll(){
    this.orderall=true;
    console.log("orderall method called");
  }
  orderAllNow(){
    for(let obj of this.availpro){
      console.log("orderAllNow method called");
      this.order={
        id:obj.id,
      img:obj.img,
      title:obj.title,
      username:this.username,
      orderedDate:new Date(),
      address:this.address,
      phone:this.phone
      }
      this.result2=this.serviceorder.placeOrder(this.order);
    }
    alert(this.result2);
    
  }
}
