import { Component } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
    constructor(private service:ProductserviceService){}
    myproducts:any;
     ngOnInit(){
      this.service.getProducts().subscribe((data)=>
      this.myproducts=data)
     }

    result:any;
    deleteNow(pid:any){
      console.log(pid);
      this.result=this.service.deleteProduct(pid);
      alert(this.result);
    }

    newObj:any;
    updateObj(obj:any){
      this.newObj=obj;
      console.log(this.newObj);
    }

     result2:any;
    updateObject(){
      this.result2=this.service.updateProduct(this.newObj);
      alert(this.result2);
    }
}
