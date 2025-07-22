import { Component } from '@angular/core';
import { productstr } from '../../productStructure';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  constructor(private servive:ProductserviceService){}
  myproducts:any;
  search:any;
  ngOnInit(){
        this.servive.getProducts().subscribe((data)=>{
          this.myproducts=data;
                })
  }
  filterme(){
    this.servive.filterData(this.search).subscribe((data)=>{
      this.myproducts=data;
      console.log(this.myproducts)
    })
  }

}
