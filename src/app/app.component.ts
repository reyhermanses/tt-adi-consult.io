import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebar } from "./left-sidebar/left-sidebar.component";
import { LoginComponent } from "./login/login.component";
import { PageControlComponent } from "./page-control/page-control.component";
import { HeaderComponent } from "./header/header.component";
import { AuthService } from './services/auth.service';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PageControlComponent, NotificationComponent, LoginComponent, HeaderComponent, LeftSidebar, CommonModule]
})

export class AppComponent extends AuthService {
  constructor() {
    super();
  }
}
