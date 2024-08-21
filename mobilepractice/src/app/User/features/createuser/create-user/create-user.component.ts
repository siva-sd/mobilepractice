import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../Admin/features/services/user.service';
import { userlistrequest } from '../../../../Admin/features/interfaces/userdetails.component';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../userauthentication/authentication/userauth.service';
import { TokenService } from '../../userauthentication/authentication/token.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  details?:userlistrequest
  email:string | null=null;
  
  constructor(private token:TokenService,private userauth:UserAuthService,private router:Router,private route:ActivatedRoute,private userservice:UserService )
  {
   
  }
  ngOnInit(): void {
    const userid=this.route.snapshot.paramMap.get('id')
    if(userid)
    {
    this.userservice.getUserById(userid).subscribe(
      {
        next:(response)=>
        {
          
          this.details=response;
          
        }
      }
    )
  }
  }

  onsubmit(email:string)
  {
  
    this.userservice.deleteuser(email).subscribe({
      next:(response)=>
      {
        alert('Are you sure you want to delete??');
        console.log('User deleted successfully');
      const
currentUrl = this.router.url;     
this.router.navigateByUrl('/', {skipLocationChange: true})
.then(() =>
{this.router.navigate([currentUrl]); });}
})

}

logout()
{
  this.userauth.logout();
  this.token.clearToken();
}
  
  

}
