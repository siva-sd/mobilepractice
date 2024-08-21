import { Component, OnInit } from '@angular/core';
import { UserOrderresponse } from '../../interfaces/userordrespo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  details:UserOrderresponse[]=[];
    constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
    {
  
      
    }
    
    ngOnInit(): void {

      this.userservice.admingetorders().subscribe({
        next:(res)=>
        {
          this.details=res;
          
        }
      })
        
    }

    
  

}
