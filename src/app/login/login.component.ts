import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService, NotificationType } from '../services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AuthService {
  isLogged!: boolean;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private notificationService: NotificationService) {
    super();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isLogged = this.login(this.loginForm.value.username, this.loginForm.value.password)
    // console.log(this.isLogged)
    if (this.isLogged) {
      this.notificationService.showNotification(NotificationType.Success, 'Login successfully!');
    } else {
      this.notificationService.showNotification(NotificationType.Error, 'Check Username and Password!');
    }
  }

}
