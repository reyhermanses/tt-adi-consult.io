import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { DetailEmployeeComponent } from '../detail-employee/detail-employee.component';

@Component({
    selector: 'dashboard-root',
    standalone: true,
    imports: [DetailEmployeeComponent, CommonModule],
    templateUrl: './dashboard.component.html',
    // styleUrl: './dashboard.component.css'
})

export class Dashboard {

    employeeService: any;
    totalEmp: number;

    constructor(private empSrv: EmployeeService) {
        this.employeeService = empSrv
        this.totalEmp = this.employeeService.employees.length
    }

    totalEmployee(): void {
    }
}