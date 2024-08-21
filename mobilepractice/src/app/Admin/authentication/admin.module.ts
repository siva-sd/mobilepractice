import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeLoginComponent } from '../../login/homelogin/homelogin.component';
import { AdminAccessComponent } from '../features/admin-access/admin-access.component';
import { CreateUserComponent } from '../features/createuser/create-user/create-user.component';
import { UpdateComponent } from '../features/createuser/Edit/update/update.component';
import { ListproductsComponent } from '../features/products/listprods/listproducts/listproducts.component';
import { AddproductsComponent } from '../features/products/addprods/addproducts/addproducts.component';
import { UpdateproductsComponent } from '../features/products/Editprods/updateproducts/updateproducts.component';
import { ProddetailsComponent } from '../features/products/Productdetails/proddetails/proddetails.component';
import { OrderdetailsComponent } from '../features/Orderdetails/orderdetails/orderdetails.component';


const routes: Routes = [
  {
    path: '',
    component: UserHomeLoginComponent,
    children: [
        {
        path:'login/admin/service', component:AdminAccessComponent
        },
        {
          path:'login/admin/service/create', component:CreateUserComponent
        },
        {
          path:'user/create/upd/:email', component:UpdateComponent
        },
        {
          path:'login/admin/service/list',component:ListproductsComponent
        },
        {
          path:'login/admin/service/add-prods',component:AddproductsComponent
        },
        {
          path:'login/admin/details/view/:id/update',component:UpdateproductsComponent
        },
        {
          path:'login/admin/details/view/:id', component:ProddetailsComponent
        },
        {
          path:'login/admin/orderlist',component:OrderdetailsComponent
        },
    ]
  }
];

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Configuring child routes for the AdminModule
  ]
})
export class AdminModule { }
