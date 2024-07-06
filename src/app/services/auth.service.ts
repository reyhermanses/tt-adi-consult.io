import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';

export interface AuthInterface {
  username: string;
  name: string;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends LocalStorageService {
  // private isAuthenticated = false;
  authData:AuthInterface;
  key: string = 'auth';

  /**
   *
   */
  constructor() {
    super();
    this.authData = {
      isLoggedIn: false,
      name: '',
      username: ''
    };
  }

  login(username: string, password: string): boolean {
    // Static authentication logic
    if (username === 'admin' && password === 'password') {
      const dataAuth = {
        username: 'admin',
        name: 'Administrator',
        isLoggedIn: true
      }
      // this.isAuthenticated = true;
      // this.authData = JSON.parse(JSON.stringify(dataAuth));
      this.authData = dataAuth;
      this.setItem(this.key, this.authData)
      console.log(this.authData, 'ucup');
      
      return true;
    }
    return false;
  }

  logout(): void {
    // this.isAuthenticated = false;
    console.log('hitted!')
    this.removeItem(this.key)
    this.isLoggedIn()
  }

  isLoggedIn(): boolean {
    // return this.isAuthenticated;
    this.authData = this.getItem(this.key);

    // console.log(getAuth.name)
    return this.authData && this.authData.isLoggedIn ? true : false;
  }
}
