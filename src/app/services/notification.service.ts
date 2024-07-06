import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
  Delete = 'delete',
  Edit = 'edit'
}

export interface Notification {
  type: NotificationType;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showNotification(type: NotificationType, message: string): void {
    this.notificationSubject.next({ type, message });
    
    // Automatically hide after 5 seconds (adjust as needed)
    setTimeout(() => {
      this.clearNotification();
    }, 5000);
  }

  clearNotification(): void {
    this.notificationSubject.next(null);
  }
}
