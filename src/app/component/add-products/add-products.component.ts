import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from '../../productservice.service';
import { productstr } from '../../productStructure';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  formData:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private service:ProductserviceService){
    this.formData=this.fb.group(
      { 
        id:['',Validators.required],
        title:['',Validators.required],
        description:['',Validators.required],
        category:['',Validators.required],
        img:['',Validators.required],
        price:['',Validators.required]
      }
    )
  }
  result:any;
  AddTech(){
    let ob=new productstr();
    let obkeys=Object.keys(ob);
    let Fobkeys=Object.keys(this.formData);
    if(obkeys.every(k=>Fobkeys.includes(k)))
    {
      this.result=this.service.addProduct(this.formData.value);
      alert(this.result);
     
    
    }
    else{
      alert("Something went wrong");
    }
 
  }

}
