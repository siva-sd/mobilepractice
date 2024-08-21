import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Admin/features/createuser/create-user/create-user.component';
import { AddUserComponent } from './User/features/createuser/add-user/add-user.component';
import { UpdateComponent } from './Admin/features/createuser/Edit/update/update.component';
import { ListproductsComponent } from './Admin/features/products/listprods/listproducts/listproducts.component';
import { AddproductsComponent } from './Admin/features/products/addprods/addproducts/addproducts.component';
import { UpdateproductsComponent } from './Admin/features/products/Editprods/updateproducts/updateproducts.component';
import { ProddetailsComponent } from './Admin/features/products/Productdetails/proddetails/proddetails.component';
import { NavbarComponent } from './Admin/core/components/navbar/navbar.component';
import { UserNavbarComponent } from './User/core/components/navbar/navbar.component';
import { RegisterUserComponent } from './User/features/createuser/create-user/create-user.component';
import { CartitemsComponent } from './User/features/wishlist/cartitems/cartitems.component';
import { CartdetailsComponent } from './User/features/Productdetails/proddetails/proddetails.component';
import { AdminAccessComponent } from './Admin/features/admin-access/admin-access.component';
import { OrderdetailsComponent } from './Admin/features/Orderdetails/orderdetails/orderdetails.component';
import { HomenavbarComponent } from './homenvbar/homenavbar/homenavbar.component';
import { UserorderComponent } from './User/features/Userorder/userorder/userorder.component';
import { UpdateUserComponent } from './User/features/createuser/Edit/update/update.component';
import { UserHomeLoginComponent } from './login/homelogin/homelogin.component';

//this is for authentication purpose

import { AuthGuard } from './Admin/authentication/auth.guard';
import { USerAuthGuard } from './User/features/userauthentication/authentication/userauth.guard';


const routes: Routes = [
{
  path:'',component:HomenavbarComponent
}, 
{
    path:'login', component:UserHomeLoginComponent
},
{
  path:'create', component:AddUserComponent
},
{
  path: 'login/admin',
  component: NavbarComponent,
  canActivate: [AuthGuard],
    
},

{ path: 'login/admin/service', component: AdminAccessComponent, canActivate:[AuthGuard] },
    { path: 'login/admin/service/create', component: CreateUserComponent ,canActivate:[AuthGuard] },
    { path: 'login/admin/service/list', component: ListproductsComponent,canActivate:[AuthGuard]  },
    { path: 'login/admin/service/add-prods', component: AddproductsComponent ,canActivate:[AuthGuard] },
    { path: 'login/admin/details/view/:id/update', component: UpdateproductsComponent, canActivate:[AuthGuard]  },
    { path: 'login/admin/details/view/:id', component: ProddetailsComponent ,canActivate:[AuthGuard] },
    { path: 'login/admin/orderlist', component: OrderdetailsComponent,canActivate:[AuthGuard]  },

    /* {
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
}, */

//user components and paths
{
  path:'login/user/:id',component:UserNavbarComponent,
  canActivate:[USerAuthGuard]
  
},
{
  path:'user/create', component:RegisterUserComponent,
  canActivate:[USerAuthGuard]
  
},
{
  path:'user/create/add-user', component:AddUserComponent,
  canActivate:[USerAuthGuard]
  
},
{
  path:'login/user/:userid/cart-items',component:CartitemsComponent,
  canActivate:[USerAuthGuard]
  
},
/* {
  path:'user/create/cart/:uid',component:CartitemsComponent
}, */
/* {
  path:'user/create/cart/:uid/usercart/:id',component:CartdetailsComponent
}, */
{
  path:'login/user/:id/list',component:RegisterUserComponent,
  canActivate:[USerAuthGuard]
  
},
{
  path:'login/user/:id/list/upd',component:UpdateUserComponent,
  canActivate:[USerAuthGuard]
  
},
{
  path:'login/user/:userid/details/:prodid',component:CartdetailsComponent,
  canActivate:[USerAuthGuard]
},
{
  path:'login/user/:id/orderlist',component:UserorderComponent,
  canActivate:[USerAuthGuard]
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
