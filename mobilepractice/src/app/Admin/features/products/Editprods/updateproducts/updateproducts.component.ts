import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addProductsrequest } from '../../../interfaces/addproducts.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {

  model:addProductsrequest
  file?:File;
  id:string|null=null;

  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {

     this.model={
      pname:'',
      price:0,
      brand:'hd',
      stock_qty:0 


    }; 
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.userservice.getproducts(productId).subscribe(data => {
        this.model = data;
      });
    }
  }
 
  onfileupload(event:Event)
  {
      const image=event.currentTarget as HTMLInputElement;
      this.file=image.files?.[0];
      
  }
  onupdate()
  {

    this.route.paramMap.subscribe(
      {
        next:(res)=>
        {
          this.id=res.get('id')

          if(this.id && this.file)
          {
              this.userservice.updateproducts(this.id,this.file,this.model).subscribe(
                {
                  next:(response)=>
                  {
                    console.log("details updated successfully")
                    alert(`product ${this.model.pname}details updated successfully`)
                    this.router.navigateByUrl('login/admin/service/list')
                    
                  }
                }
              )
          }
        }
      }
    )

  }



}
