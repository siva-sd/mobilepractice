import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { userUpdate } from '../../../interfaces/updateuserdetails.component';
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
