import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.css']
})
export class AdminAccessComponent {

  constructor(private auth:AuthService)
  {

  }

  
 
}
