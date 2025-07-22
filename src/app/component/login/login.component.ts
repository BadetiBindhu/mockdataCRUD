import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   formData:FormGroup=new FormGroup({});
  constructor(private service:ProductserviceService,private fb:FormBuilder,private r:Router){
    this.formData=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  users:any=[];
  
reqpwd:any;
result:any;
checkLogin(){
 this.reqpwd=this.formData.value.username.slice(0,3)+"123";
 
 if(this.formData.value.username=="admin"&& this.formData.value.password=='12345'){
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
  localStorage.setItem("loggedIn",JSON.stringify(this.formData.value));
  
  // alert("Login Successful"); 
  this.r.navigateByUrl('/dashboard');
 
 }else{
  if(this.reqpwd==this.formData.value.password){
      
   this.result=this.service.addUser(this.formData.value);
   alert(this.result);
   console.log(this.service.users);
    this.r.navigateByUrl("/user");
    localStorage.setItem("loggedIn",JSON.stringify(this.formData.value));
  }
  else{
    Swal.fire({
      title: "Ooops!",
      text: "Enter Correct Password!",
      icon: "error"
    });
  }
 }
}


}
