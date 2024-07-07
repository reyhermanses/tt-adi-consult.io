import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService, NotificationType } from '../services/notification.service';
import { NotificationService2 } from '../services/notification2.service';

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
  hide!: boolean;

  constructor(private fb: FormBuilder, private notificationService2: NotificationService2) {
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
      this.notificationService2.showSuccess('Login successfully!');
    } else {
      this.notificationService2.showError('Check Username and Password!');
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide
  }

}
