import { Component } from '@angular/core';
import { UserOrderresponse } from '../../../../Admin/features/interfaces/userordrespo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../Admin/features/services/user.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent {

  details:UserOrderresponse[]=[];
  uid?:string | null=null;
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {

    
  }
  
  ngOnInit(): void {

    this.route.paramMap.subscribe({

      next:(response)=>
      {
        this.uid=response.get('id');

        if(this.uid)
        {
        this.userservice.getordersbyid(this.uid).subscribe({
          next:(res)=>
          {
            this.details=res;
            
          }
        })
      }

      }

    }
    )

   
      
  }
  cancelorder(oid:number)
  {
    if(this.uid)
    {
      const confirmed=confirm('Are you sure you want to cancel')
      if(confirmed)
      {   
      this.userservice.usercancel(this.uid,oid.toString()).subscribe(
      {
        next:(response)=>
        {
          console.log('order deleted successfully');
          alert('order deleted successfully')
          const currentUrl = this.router.url;     
          this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() =>
            {this.router.navigate([currentUrl]); })
            
        },
        error(err) {
            console.log("Error occured")
        },
      }
    )
  }
    }
  }

}
