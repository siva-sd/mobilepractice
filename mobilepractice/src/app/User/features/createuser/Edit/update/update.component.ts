/* import { Component } from '@angular/core';
import { UserService } from '../../../../../Admin/features/services/user.service';
import { userUpdate } from '../../../../../Admin/features/interfaces/updateuserdetails.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  model:userUpdate;
  email:string | null =null;

  constructor(private route : ActivatedRoute,private userservice:UserService)
  {
    this.model={

      name:'',
      contact:0,
      password:''

    };
  }

  onsubmit()
  {
    //console.log(this.model);
    this.route.paramMap.subscribe(
      {
        next:(param)=>
        {
          this.email=param.get('email');

          if(this.email)
          {
            this.userservice.updateuser(this.email,this.model).subscribe(
              {
                next:(response)=>
                {
                  console.log('user details updated successfully');
                }
              }
            );
          }

        }
       
      }

    );
  }

}
 */











//update using reactive forms
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  // Assume you have a UserService to get and update user details
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../Admin/features/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateUserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userservice:UserService,
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    // Get user id from route parameters
    const userId = this.route.snapshot.paramMap.get('id');
    
    // Fetch existing user details
    if (userId) {
      this.userservice.getUserById(userId).subscribe(user => {
        this.form.patchValue(user);
      });
    }
  }

  onSubmit() {

    const userid=this.route.snapshot.paramMap.get('id')
    if (this.form.valid) {
      if(userid)
      {
      this.userservice.updateuser(userid,this.form.value).subscribe(
        response => {
          console.log('User updated successfully', response);
          this.router.navigateByUrl('login/user/'+userid+'/list')
        },
        error => {
          console.error('Error updating user', error);
        }
      );
    }
  }
  }
}









