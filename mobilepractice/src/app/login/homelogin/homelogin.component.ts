import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../../User/features/userauthentication/authentication/userauth.service';
import { AuthService } from '../../Admin/authentication/auth.service';
import { TokenService } from '../../User/features/userauthentication/authentication//token.service';  // Adjust the path as needed
import { userlistrequest } from '../../Admin/features/interfaces/userdetails.component';
import { tokendecode } from '../../Admin/features/interfaces/jwtpayload.component';

@Component({
  selector: 'app-login',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css']
})
export class UserHomeLoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private userauth: UserAuthService,
    private adminauth: AuthService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private tokenService: TokenService  // Inject the TokenService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  onValidate() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.http.get<tokendecode>(`http://localhost:7067/api/user/api/Getuserdetailsbylogin/${email}/${password}`)
      .subscribe(data => {
        const token = data?.token;  // Adjust this based on your API response
        if (token) {
          //const decodedtoken= this.tokenService.getDecodedToken()
          this.tokenService.setToken(token);
         const role =this.tokenService.getUserRole()
         //const role=data.role
          console.log(role)

          const uid=this.tokenService.getUserId();
          const name=this.tokenService.getUserName();

          if (role === 'Admin') {
            this.adminauth.login('Admin');  // Simulate admin login
            
              alert(`Welcome admin`);
              this.router.navigateByUrl('login/admin');
          } else if (role === 'User') {
            this.userauth.Userlogin('User');  // Simulate user login
           
              alert(`Leo Mobiles Welcome's you  ${name}`);
              this.router.navigateByUrl(`login/user/${uid}`);
          } else {
            alert('Invalid User')
            console.error('Invalid role');
          }
        } else {
          alert('Password or email is wrong');
          console.error('Password or email is wrong');
        }
      },
      error => {
        console.error('Error fetching user details', error);
      });
  }
}
