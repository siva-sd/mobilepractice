import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  constructor() {
    this.loadUserFromLocalStorage();
  }

  // Method to simulate login
  Userlogin(role: string): void {
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

  // Method to check if the user is a regular user
  isUser(): boolean {
    return this.isLoggedIn() && this.userRole === 'User';
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
