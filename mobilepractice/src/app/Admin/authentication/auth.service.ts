/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  // Method to simulate login
  login(role: string): void {
    this.isAuthenticated = true;
    this.userRole = role;
  }

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
  }

  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Method to check if the user is an admin
  isAdmin(): boolean {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user && user.role === 'Admin';
    //return this.isAuthenticated && this.userRole === 'Admin';
  }
}
  */
 



/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  constructor() {
    this.loadUserFromLocalStorage();
  }

  // Method to simulate login
  login(role: string): void {
    this.isAuthenticated = true;
    this.userRole = role;
    this.saveUserToLocalStorage();
  }

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
    localStorage.removeItem('user');
  }

  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Method to check if the user is an admin
  isAdmin(): boolean {
    return this.isAuthenticated && this.userRole === 'admin';
  }

  // Save user state to localStorage
  private saveUserToLocalStorage(): void {
    const user = {
      isAuthenticated: this.isAuthenticated,
      role: this.userRole
    };
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Load user state from localStorage
  private loadUserFromLocalStorage(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.isAuthenticated) {
      this.isAuthenticated = user.isAuthenticated;
      this.userRole = user.role;
    }
  }
}
 */



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  constructor() {
    this.loadUserFromLocalStorage();
  }

  // Method to simulate login
  login(role: string): void {
    this.isAuthenticated = true;
    this.userRole = role;
    this.saveUserToLocalStorage();
  }

  // Method to simulate logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
    localStorage.removeItem('owner');
  }

  // Method to check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Method to check if the user is an admin
  isAdmin(): boolean {
    return this.isLoggedIn() && this.userRole === 'Admin';
  }


  // Save user state to localStorage
  private saveUserToLocalStorage(): void {
    const user = {
      isAuthenticated: this.isAuthenticated,
      role: this.userRole
    };
    localStorage.setItem('owner', JSON.stringify(user));
  }

  // Load user state from localStorage
  private loadUserFromLocalStorage(): void {
    const user = JSON.parse(localStorage.getItem('owner') || '{}');
    if (user && user.isAuthenticated) {
      this.isAuthenticated = user.isAuthenticated;
      this.userRole = user.role;
    }
  }
}
