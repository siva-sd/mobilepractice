import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../Admin/features/services/user.service';
import { productResponseRequest } from '../../../../Admin/features/interfaces/listprods.component';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent {

  model: productResponseRequest[]=[]
  showbutton:boolean=false;
 
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {

    
  }
 
  ngOnInit()
  {
    

      this.userservice.getprods().subscribe(
        {
          next:(response)=>{
            
            
            this.model=response

            console.log('products displayed successfully')

        }
  })
    
    
  }
  showbutton1(id : number): boolean{

    for (let i = 0; i < this.model.length; i++) {
              
      if (this.model[i].pid == id) {
        
        if (this.model[i].stock_qty==0) {
          this.model[i].availability="Out of Stock"
          return true;
        }
      }
      if(this.model[i].stock_qty>0)
      {
        this.model[i].availability="In Stock"
      }
      

    
    }
    return false;
    
  }
  
  


}
