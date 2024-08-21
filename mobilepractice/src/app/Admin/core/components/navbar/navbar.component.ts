import { Component } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../../User/features/userauthentication/authentication/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private tokenservice:TokenService,private router:Router,private authservice:AuthService)
  {

  }
  logout()
  {
    this.authservice.logout();
    this.tokenservice.clearToken();
    
    this.router.navigateByUrl('')

  }

}
