import { Component } from '@angular/core';
import { AuthInterface, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent extends AuthService {
  isDropdown: boolean = false;
  kipac!: AuthInterface;

  constructor(private authService: AuthService){
    super();
    this.kipac = this.authService.authData;
    console.log(this.authService.authData, 'wkwk');
  }

  toggleDropdown() {
    this.isDropdown = !this.isDropdown
  }
}
