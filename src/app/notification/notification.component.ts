import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: Notification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification: Notification | null) => {
      this.notification = notification;
    });
  }

  clearNotification(): void {
    this.notificationService.clearNotification();
  }
}
