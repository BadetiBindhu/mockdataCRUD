import { Component } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
       constructor(private serviceorder:OrderServiceService){}
       uorders:any;user:any;username:any;
       ngOnInit(){
        this.user=localStorage.getItem("user");
     this.user=JSON.parse(this.user);
     this.username=this.user.username;
         this.serviceorder.getOrderByUsername(this.username).subscribe((data)=>{
          this.uorders=data;
          console.log("userorders:",this.uorders);
         })
       }
}
