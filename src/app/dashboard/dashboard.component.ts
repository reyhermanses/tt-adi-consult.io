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
    totalActive: number = 0;
    totalInActive: number = 0;
    totalPending: number = 0;
    totalArchived: number = 0;

    constructor(private empSrv: EmployeeService) {
        this.employeeService = empSrv
        this.totalEmp = this.employeeService.employees.length
        this.totalActive = this.employeeService.getActive().length;
        this.totalInActive = this.employeeService.getInActive().length;
        this.totalPending = this.employeeService.getPending().length;
        this.totalArchived = this.employeeService.getArchived().length;
        // console.log(this.employeeService.getActive());
    }

    getActive() {
    }
}