import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './userauth.service';

@Injectable({
  providedIn: 'root'
})
export class USerAuthGuard implements CanActivate {

  constructor(private authService: UserAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isUser()) {
      return true;
    } else {
      // Redirect to the login page or a 'not authorized' page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
