// token.service.ts
import { Injectable } from '@angular/core';
import  { jwtDecode } from 'jwt-decode';
import { tokendecode } from '../../../../Admin/features/interfaces/jwtpayload.component'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getDecodedToken():tokendecode| null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  getUserRole(): string | null {
    const decodedToken = this.getDecodedToken();
    //["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    if(decodedToken) {
      decodedToken.Role=decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

      return decodedToken.Role
     
    }
    return null;
  }

  getUserId(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {

      decodedToken.UId=decodedToken["UId"]
      return decodedToken.UId;
    }
    return null;
  }

  getUserName(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      decodedToken.Name=decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      return decodedToken.Name;
    }
    return null;
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}
