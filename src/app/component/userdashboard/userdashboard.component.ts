import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private r:Router,private sercart:CartService){}
  user:any;
  username:any;
  ngOnInit(){
    if(localStorage.getItem("user")!=null){
    Swal.fire({
      title: "Good job!",
      text: "Welcome to Site!",
      icon: "success"
    });
    this.user=localStorage.getItem("loggedIn");
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    }
    else{
      Swal.fire({
        title: "Ooops!",
        text: "Please Login!",
        icon: "error"
      });
      this.r.navigateByUrl("");
    }
  }

  Logout(){
    localStorage.removeItem("loggedIn");
    this.r.navigateByUrl("");
  }


  length:any=0;
  ngDoCheck(){
    this.length=this.sercart.getCartLength();
  }
}
