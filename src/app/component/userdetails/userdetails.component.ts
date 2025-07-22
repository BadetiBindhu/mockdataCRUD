import { Component } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  i:any;
  constructor(private service:ProductserviceService){}
   userData=this.service.users
}
