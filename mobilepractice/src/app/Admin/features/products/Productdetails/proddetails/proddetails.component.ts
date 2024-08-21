import { Component, OnInit } from '@angular/core';
import { productResponseRequest } from '../../../interfaces/listprods.component';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit{

 
  id:string |null=null;
  details?:productResponseRequest;
  


  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {

  }

 

  ondelete(pid:number)
  {
    const confirmed=confirm('Are you sure you want to delete')
    if(confirmed)
    {
          
    this.userservice.deleteprods(pid).subscribe({
      next:(response)=>
      {
        alert('Are you sure you want to delete??');
        console.log('Product deleted successfully');
        /* const currentUrl = this.router.url;     
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() =>{this.router.navigate([currentUrl]); });*/
        this.router.navigateByUrl('login/admin/service/list')
        }
        })

      }
      
  }


      ngOnInit(): void 
      { 
          this.route.paramMap.subscribe(
            {
              next:(res)=>
              {
                this.id=res.get('id')
    
                if(this.id)
                {
                  this.userservice.getproducts(this.id).subscribe(
                    {
                      next:(response)=>{
            
                        this.details=response
                        console.log(this.details)
                        //console.log('products displayed successfully')
                      }
                    }
                  )
                }
              }
            }
          )
      }
    
    

}
