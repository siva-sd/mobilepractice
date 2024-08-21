import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Admin/core/components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductsComponent } from './Admin/features/products/addprods/addproducts/addproducts.component';

import { CreateUserComponent } from './Admin/features/createuser/create-user/create-user.component';
import { ListproductsComponent } from './Admin/features/products/listprods/listproducts/listproducts.component'
import { UpdateproductsComponent } from './Admin/features/products/Editprods/updateproducts/updateproducts.component';
import { ProddetailsComponent } from './Admin/features/products/Productdetails/proddetails/proddetails.component';
import { UserNavbarComponent } from './User/core/components/navbar/navbar.component';
import { RegisterUserComponent } from './User/features/createuser/create-user/create-user.component';
import { UserorderComponent } from './User/features/Userorder/userorder/userorder.component';
import { CartitemsComponent } from './User/features/wishlist/cartitems/cartitems.component';
import { CartdetailsComponent } from './User/features/Productdetails/proddetails/proddetails.component';
import { AdminAccessComponent } from './Admin/features/admin-access/admin-access.component';
import { OrderdetailsComponent } from './Admin/features/Orderdetails/orderdetails/orderdetails.component';

import { HomenavbarComponent } from './homenvbar/homenavbar/homenavbar.component';
import { AddUserComponent } from './User/features/createuser/add-user/add-user.component';
import { UpdateComponent } from './Admin/features/createuser/Edit/update/update.component';
import { UpdateUserComponent } from './User/features/createuser/Edit/update/update.component';
import { UserHomeLoginComponent } from './login/homelogin/homelogin.component';
import { AuthGuard } from './Admin/authentication/auth.guard';
import { AuthService } from './Admin/authentication/auth.service';
import { UserAuthService } from './User/features/userauthentication/authentication/userauth.service';
import { USerAuthGuard } from './User/features/userauthentication/authentication/userauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserNavbarComponent,
    AddUserComponent,
    RegisterUserComponent,
    CreateUserComponent,
    UpdateComponent,
    AdminAccessComponent,
    AddproductsComponent,
    ListproductsComponent,
    UpdateproductsComponent,
    ProddetailsComponent,
    CartitemsComponent, 
    UserorderComponent,
    UpdateUserComponent,
    CartdetailsComponent, OrderdetailsComponent,UserHomeLoginComponent, HomenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [AuthGuard,AuthService,UserAuthService,USerAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
