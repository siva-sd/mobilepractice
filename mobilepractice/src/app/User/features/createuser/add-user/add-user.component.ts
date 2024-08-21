/* import { Component } from '@angular/core';
import { adduserrequest } from '../../../../Admin/features/models/add-user-request.model';
import { UserService } from '../../../../Admin/features/services/user.service'; 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  model:adduserrequest
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService)
  {
    this.model={
      email:'',
      name:'',
      password:'',
      confirmPassword:'',
      contact:0

    }
  }

  onsubmit()
  {
    //console.log(this.model);
    this.userservice.adduser(this.model).subscribe(
      {
        next:(response)=>{
          console.log("postded details is success")
          alert(`${this.model.name} registered successfully`)
          this.router.navigateByUrl('')
          
        } ,
        error:(err)=> {
            alert(`${this.model.email} already registered`)
        },
       
      }
    )
  }

}
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../Admin/features/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

 form: FormGroup;

  constructor(private router:Router,private fb: FormBuilder, private userRegistrationService:UserService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['',[ Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(8)]],
      contact: [1,[Validators.required,Validators.min(1111111111), Validators.max(9999999999)]]
    }, {
      validator: this.mustMatch('password', 'confirmPassword'),
      
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      const formdata=this.form.value
      console.log(formdata)
      
      this.userRegistrationService.adduser(formdata).subscribe(
        response => {
          console.log('User registered successfully', response);
          alert('User registered successfully')
          this.form.reset()
          this.router.navigateByUrl('')
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }


  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
