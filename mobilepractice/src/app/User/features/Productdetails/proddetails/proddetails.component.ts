import { Component, OnInit } from '@angular/core';
import { productResponseRequest } from '../../../../Admin/features/interfaces/listprods.component';
import { UserService } from '../../../../Admin/features/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { userOrderReq } from '../../../../Admin/features/interfaces/userordreq.component';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class CartdetailsComponent implements OnInit{

 
  id:string |null=null;
  uid:string|null=null;
  details?:productResponseRequest;
  stockquatity : number =0;
  isdisabled:boolean=true

  model:userOrderReq;
  prodincre:number=0;
  


  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {
      this.model={
        deliv_address:'',
        quantity:0,
        uid:0,
        pid:0,
        amt:0
      }
  }

 

 /*  ondelete(pid:number)
  {
    this.userservice.deleteprods(pid).subscribe({
      next:(response)=>
      {
        alert('Are you sure you want to delete??');
        console.log('Product deleted successfully');
        const currentUrl = this.router.url;     
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() =>{this.router.navigate([currentUrl]); });}
        })

      } */


      ngOnInit(): void 
      { 
        
          this.route.paramMap.subscribe(
            {
              next:(res)=>
              {
                this.id=res.get('prodid')
    
                if(this.id)
                {
                  this.userservice.getproducts(this.id).subscribe(
                    {
                      next:(response)=>{
            
                        this.details=response
                        if(this.details){this.model.quantity=this.details.stock_qty}
                        
                        console.log(this.model.quantity)
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

      onorder()
      {
        console.log(this.id)
        this.route.paramMap.subscribe(
          {
            next:(res)=>
            {
              console.log(res);
              this.uid=res.get('userid')
              console.log(this.uid)
              this.id=res.get('prodid')
              

              if(this.uid && this.id && this.details)
              {
                this.model.deliv_address='chennai';
                this.model.quantity=this.prodincre;
                this.model.amt=this.model.quantity*this.model.amt;
                
               const confirmed= confirm('Are you sure you want to place the order')
               if(confirmed)
               {
                this.userservice.createorder(this.uid,this.id,this.model).subscribe(
                  {
                    next:(response)=>
                    {
                      
                      console.log('order placed successfully')
                     
                      this.router.navigateByUrl('login/user/'+this.uid)
                      
                      
                    },
                  
                    error(err) {
                     
                        alert('you cant place the order')
                   
                    },
                  
                  }
                )
              }
            }
            
            }
          }
        )
      }

      
  
      incrementproduct()
      {

        
        if(this.prodincre<this.model.quantity)
        {
          
          if(this.model.quantity>0)
          {
            this.prodincre++;
            if(this.prodincre){this.isdisabled=false}
            if(this.details?.stock_qty){this.details.stock_qty-=1};
          }
          console.log("this is while incrementing"+this.prodincre)
        }

      }
      decrementproduct()
      {
        
        if(this.prodincre>0)
          {
            
            /* 
            if(this.model.quantity>=0)
              {
                if(this.details?.stock_qty)
                  { */
                    
                    if (this.details?.stock_qty ==0 ||this.details?.stock_qty) {
                      this.details.stock_qty+=1;
                      this.prodincre--;
                      if(this.prodincre==0)
                      {
                        this.isdisabled=true
                      }
                    }
                    
                  
                
                
              }
              console.log("this is while decrementing"+this.prodincre)
          
      }
    
    
    

}
