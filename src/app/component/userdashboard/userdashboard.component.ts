import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  len:any=0;
  constructor(private r:Router){}
  user:any;
  username:any;
  ngOnInit(){
    if(localStorage.getItem("loggedIn")!=null){
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
}
