import { Component } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private serviceorder:OrderServiceService){}
  allorders:any;
  ngDoCheck(){
    this.serviceorder.getAllOrders().subscribe((data)=>{
    this.allorders=data;
    console.log("allorders:",this.allorders);
    })
  }
}
