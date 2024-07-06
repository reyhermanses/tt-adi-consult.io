import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class NotificationService2 {
    constructor() { }

    showSuccess(message: string): void {
        Swal.fire({
            color: '#96d491',
            icon: 'success',
            title: 'Success',
            text: message,
            timer: 3000,
            showConfirmButton: false
        });
    }

    showEditSuccess(message: string): void {
        Swal.fire({
            color: '#ffff00',
            icon: 'success',
            title: 'Success',
            text: message,
            timer: 3000,
            showConfirmButton: false
        });
    }

    showDeleteSuccess(message: string): void {
        Swal.fire({
            color: '#cc0000',
            icon: 'success',
            title: 'Success',
            text: message,
            timer: 3000,
            showConfirmButton: false
        });
    }

    showError(message: string): void {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            timer: 3000,
            showConfirmButton: false
        });
    }

    showUpdate(message: string): void {
        Swal.fire({
            icon: 'info',
            title: 'Update',
            text: message,
            timer: 3000,
            showConfirmButton: false
        });
    }
}
