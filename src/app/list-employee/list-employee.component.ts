import { Component, OnInit } from '@angular/core';
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
import { NotificationService2 } from '../services/notification2.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'employee-root',
    standalone: true,
    templateUrl: './list-employee.component.html',
    styleUrl: './list-employee.component.css',
    imports: [DetailEmployeeV2Component, DetailEmployeeComponent, EmployeeEditComponent, CreateEmployeeComponent, CommonModule, ReactiveFormsModule]
})

export class ListEmployee extends ModalComponent implements OnInit {
    // fb:FormBuilder;
    searchForm: FormGroup;
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

    constructor(private fb: FormBuilder, private employeeService: EmployeeService, private notificationService2: NotificationService2) {
        super();
        this.searchForm = this.fb.group({
            searchTerm: ['']
        })
    }

    ngOnInit(): void {


        this.employees = this.employeeService.getEmployees();
        this.setPage(this.currentPage)
        this.totalPage = Math.ceil(this.employees.length / this.itemsPerPage)

        this.searchForm.get('searchTerm')!.valueChanges.subscribe(() => {
            // if (this.searchForm.value.searchTerm) {
            this.searchEmployees();
            // } else {
            // }
        });
    }

    deleteEmployee(id: string): void {
        this.employeeService.deleteEmployee(id)
        this.employees = this.employeeService.getEmployees();
        this.notificationService2.showDeleteSuccess('Form deleted successfully!');
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

    searchEmployees() {
        const searchTerm = this.searchForm.get('searchTerm')!.value.toLowerCase();
        if (searchTerm) {
            this.pagedEmployees = this.employees.filter(employee =>
                employee.firstName.toLowerCase().includes(searchTerm) ||
                employee.lastName.toLowerCase().includes(searchTerm) ||
                employee.email.toLowerCase().includes(searchTerm)
            );
        } else {
            // this.setPage(this.currentPage);
        }
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
