import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { ViewProductsComponent } from './component/view-products/view-products.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserhomeComponent } from './component/userhome/userhome.component';
import { UserviewComponent } from './component/userview/userview.component';
import { UsercartComponent } from './component/usercart/usercart.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"userdetails",component:UserdetailsComponent},
      {path:"add",component:AddProductsComponent},
      {path:"view",component:ViewProductsComponent},
      {path:"manage",component:ManageProductsComponent},
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'',component:UserhomeComponent},
      {path:'view',component:UserviewComponent},
      {path:'cart',component:UsercartComponent},
      {path:"details/:id",component:DetailsPageComponent},
      {path:"vieworders",component:ViewordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
