import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productResponseRequest } from '../../../interfaces/listprods.component';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../../authentication/auth.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  model: productResponseRequest[]=[]

 
  constructor(private authservice:AuthService,private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {

    
  }
 
  ngOnInit()
  {
    
      if(this.authservice.isAdmin())
      {
        console.log('admin logged in')
      this.userservice.getprods().subscribe(
        {
          next:(response)=>{

            this.model=response
            console.log('products displayed successfully')
          }
        }
      )
    
  }
}
 
}
