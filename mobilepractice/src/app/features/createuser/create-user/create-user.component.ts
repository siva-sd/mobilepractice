import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { userlistrequest } from '../../interfaces/userdetails.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  details:userlistrequest[]=[]
  email:string | null=null;
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService )
  {
   
  }
  ngOnInit(): void {
    this.userservice.getuser().subscribe(
      {
        next:(response)=>
        {
          this.details=response;
        }
      }
    )
  }

  onsubmit(email:string)
  {
    this.userservice.deleteuser(email).subscribe({
      next:(response)=>
      {
        alert('Are you sure you want to delete??');
        console.log('User deleted successfully');
      const currentUrl = this.router.url;     
this.router.navigateByUrl('/', {skipLocationChange: true})
.then(() =>
{this.router.navigate([currentUrl]); });}
})

}

  
  

}
