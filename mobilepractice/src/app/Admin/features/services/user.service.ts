import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adduserrequest } from '../models/add-user-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userUpdate } from '../interfaces/updateuserdetails.component';
import { addProductsrequest } from '../interfaces/addproducts.component';
import { userOrderReq } from '../interfaces/userordreq.component';
import { TokenService } from '../../../User/features/userauthentication/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private tokenService:TokenService,private http:HttpClient) { }


  adduser( model:any):Observable<any>{
    return this.http.post<void>('http://localhost:7067/api/user/addusers',model)
  }

  getuser():Observable<any>
  {
    return this.http.get('http://localhost:7067/api/user/detailsofuser')
  }

  getUserById(userid:string):Observable<any>{
    return this.http.get('http://localhost:7067/api/user/api/Getuserdetails/'+userid)
  }

  updateuser(id:string,model:any):Observable<void>
  {
    return this.http.put<void>('http://localhost:7067/api/user/updateuserdetails/'+id,model);
  }
  deleteuser(email:string):Observable<void>
  {
    return this.http.delete<void>('http://localhost:7067/api/user/'+email);
  }

  
  //adding the products by admin
  /* addproducts(file:File,model:addProductsrequest):Observable<any>
  {
    //file:model.image?.stream;
   

    const formdata=new FormData();
    formdata.append('pname',model.pname)
    formdata.append('Price',model.price.toString());
 
    formdata.append('Brand',model.brand);
 
    formdata.append('stock_qty',model.stock_qty.toString());
 
    formdata.append('image',file);

    console.log(model);
    //model.image=file;
    return this.http.post<any>('https://localhost:7067/api/prod/addproducts',formdata)
  } */


    addproducts(model:any):Observable<any>
    {
     /*  const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); 
    console.log(headers)  */
      return this.http.post<any>('http://localhost:7067/api/prod/addproducts',model)
    }

  //getting the list of products by admin

  getprods():Observable<any>{
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); 
    console.log(headers) 
    return this.http.get('http://localhost:7067/api/prod/Get',{ headers })
  }

  //deleting the existing product by admin using the id
  deleteprods(id:number):Observable<void>
  {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); 
    return this.http.delete<void>('http://localhost:7067/api/prod/'+id,{headers});
  }

  //get product details by id

  getproducts(id:string):Observable<any>
  {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get('http://localhost:7067/api/prod/'+id,{headers});
  }

  //updating the existing product by admin
  updateproducts(id:string,file:File,model:addProductsrequest):Observable<any>
  {
    //file:model.image?.stream;
   

    const formdata=new FormData();
    formdata.append('pname',model.pname)
    formdata.append('Price',model.price.toString());
 
    formdata.append('Brand',model.brand);
 
    formdata.append('stock_qty',model.stock_qty.toString());
 
    formdata.append('image',file);

    console.log(model);
    //model.image=file;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); 
    return this.http.put<any>('http://localhost:7067/api/prod/'+id,formdata,{headers})
  }

  //user to order the products

  createorder(uid:string,pid:string,model:userOrderReq):Observable<any>
  {
    
    const formdata=new FormData();
    {
      formdata.append('uid',uid);
      formdata.append('pid',pid);
      formdata.append('deliv_address',model.deliv_address);
      formdata.append('quantity',model.quantity.toString())
    }
    return this.http.post<any>('http://localhost:7067/api/order/'+uid+'/'+pid,formdata)
  }

  //userorder details

  getordersbyid(uid:string):Observable<any>{
    return this.http.get<any>('http://localhost:7067/api/order/'+uid)
  }

  //getting the orders by admin

  admingetorders():Observable<any>
  {
    return this.http.get('http://localhost:7067/api/order/Getorders')
  }


  //user to cancel the order

  usercancel(uid:string,oid:string):Observable<any>
  {
    return this.http.delete('http://localhost:7067/api/order/cancelorder/'+uid+'/'+oid)
  }

}
