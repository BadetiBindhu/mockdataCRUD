import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserhomeComponent } from './component/userhome/userhome.component';
import { UserviewComponent } from './component/userview/userview.component';
import { UsercartComponent } from './component/usercart/usercart.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { ViewOrdersComponent } from './component/view-orders/view-orders.component';
import { ViewAllOrdersComponent } from './component/view-all-orders/view-all-orders.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ViewProductsComponent,
    AddProductsComponent,
    ManageProductsComponent,
    UserdashboardComponent,
    UserhomeComponent,
    UserviewComponent,
    UsercartComponent,
    UserdetailsComponent,
    DetailsPageComponent,
    ViewOrdersComponent,
    ViewAllOrdersComponent,
    ViewordersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
