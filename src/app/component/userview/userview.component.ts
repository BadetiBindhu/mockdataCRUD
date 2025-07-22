import { Component } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrl: './userview.component.css'
})
export class UserviewComponent {
  constructor(private service:ProductserviceService){}
  availpro:any;
  ngOnInit(){
    this.service.getProducts().subscribe((data)=>{
      this.availpro=data;
      console.log("availpro:",this.availpro);
    })
  }
  search:any;
  filterme(){
    this.service.filterData(this.search).subscribe((d)=>{
      this.availpro=d;
      console.log("availpro:",this.availpro)
    })
  }

}
