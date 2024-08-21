/* import { Component } from '@angular/core';
import { addProductsrequest } from '../../../interfaces/addproducts.component';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {

  model:addProductsrequest
  file?:File;
  

  constructor(private router:Router,private userservice:UserService)
  {

    this.model={
      pname:'siva',
      price:0,
      brand:'hd',
      stock_qty:0


    };
  }
 
  onfileupload(event:Event)
  {
      const image=event.currentTarget as HTMLInputElement;
      this.file=image.files?.[0];
      
  }
  onsubmit()
  {
    if(this.file)
    {
      
      this.model.image=this.file

      this.userservice.addproducts(this.file,this.model).subscribe(
        {
          next:(response)=>{
            console.log('products added successfully')
            this.router.navigateByUrl('login/admin/service/list')
          }
        }
      )
    }
    
  }

  
  

}
 */


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addProductsrequest } from '../../../interfaces/addproducts.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  form: FormGroup;
  file?: File;
  submitted = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService:UserService
  ) {
    this.form = this.fb.group({
      pname: ['', Validators.required],
      price: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
      brand: ['', Validators.required],
      stock_qty: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
      productImage: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  onFileUpload(event: Event) {
    const image = event.currentTarget as HTMLInputElement;
    this.file = image.files?.[0];
    this.form.patchValue({ productImage: this.file });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {

      /* public string pname { get; set; }

public double price { get; set; }

public string Brand { get; set; } 

public IFormFile image {  get; set; }
public string? imageurl { get; set; }

public int stock_qty { get; set; } */
      const formData = new FormData();
      formData.append('pname', this.form.value.pname);
      formData.append('price', this.form.value.price);
      formData.append('Brand', this.form.value.brand);
      formData.append('stock_qty', this.form.value.stock_qty);
    /*   if (this.file) {
        formData.append('image', this.file, this.file.name);
        console.log("formdata",formData)
      } */

        if (this.file) {
          formData.append('image', this.file, this.file.name);
          console.log("FormData after append:", formData.get('pname'), formData.get('price'), formData.get('Brand'), formData.get('stock_qty'), formData.get('image'));
        }

      this.userService.addproducts(formData).subscribe(
        {
          
          next: (response) => {
            console.log(formData)
            console.log('Product added successfully');
            setTimeout(()=>{
            alert(`${this.form.value.pname} added successfully`);
            this.router.navigateByUrl('login/admin/service/list');
           } ,2000)
          },
          error: (err) => {
            this.errorMessage = 'Failed to add product. Please try again.';
          }
        }
      );
    }
  }
}
