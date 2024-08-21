import { Component } from '@angular/core';
import { adduserrequest } from '../../models/add-user-request.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  model:adduserrequest
  constructor(private userservice:UserService)
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
          console.log("this is success")
        } 
      }
    )
  }

}
