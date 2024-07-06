import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { ModalComponent } from '../modal/modal.component';
import { CreateEmployeeComponent } from "../form-employee/form-employee.component";
import { DetailEmployeeComponent } from '../detail-employee/detail-employee.component';
import { EmployeeEditComponent } from "../edit-employee/edit-employee.component";
import { DetailEmployeeV2Component } from "../detail-employee-v2/detail-employee-v2.component";
import { NotificationService, NotificationType } from '../services/notification.service';


@Component({
    selector: 'employee-root',
    standalone: true,
    templateUrl: './list-employee.component.html',
    styleUrl: './list-employee.component.css',
    imports: [DetailEmployeeV2Component, DetailEmployeeComponent, EmployeeEditComponent, CreateEmployeeComponent, CommonModule]
})

export class ListEmployee extends ModalComponent {
    // fb:FormBuilder;
    title = 'emp-mng';
    employees!: Employee[];
    pagedEmployees!: Employee[];
    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalPage: number = 1;
    Math: any;
    message: string = "rey hermanses";
    setIndex: number = 1;
    selectedEmployeeId!: string;
    updateEmployee!: EmployeeEditComponent;
    getUpdateEmp!: Employee;

    constructor(private employeeService: EmployeeService, private notificationService: NotificationService) {
        super();
        this.employees = this.employeeService.getEmployees();
        this.setPage(this.currentPage)
        this.totalPage = Math.ceil(this.employees.length / this.itemsPerPage)
    }

    deleteEmployee(id: string): void {
        this.employeeService.deleteEmployee(id)
        this.employees = this.employeeService.getEmployees();
        this.notificationService.showNotification(NotificationType.Delete, 'Form deleted successfully!');
        this.setPage(this.currentPage)
    }

    setPage(page: number): void {
        // Calculate start and end index based on current page and items per page
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.currentPage = page;
        this.pagedEmployees = this.employees.slice(startIndex, endIndex);
        this.totalPage = Math.ceil(this.employees.length / this.itemsPerPage);
    }

    hasNextPage(): boolean {
        return this.currentPage < Math.ceil(this.employees.length / this.itemsPerPage);
    }

    hasPreviousPage(): boolean {
        return this.currentPage > 1;
    }

    formatDate(date: any): any {
        // let dated = new Date();
        // return this.datePipe.transform(dated,"yyyy-MM-dd")
        return date ? moment(date).format('YYYY-MM-DD') : '-';
    }

    range(n: number) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }
}
