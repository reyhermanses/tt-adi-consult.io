import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ListEmployee } from '../list-employee/list-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-employee',
  standalone: true,
  // imports: [CommonModule],
  // templateUrl: './detail-employee.component.html',
  template: '<h1>Nama </h1>',
  styleUrl: './detail-employee.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class DetailEmployeeComponent extends ModalComponent implements OnInit {

  @Input() employeeId!: string;

  employeeService!: EmployeeService
  empData!: any;

  listEmpServe!: ListEmployee

  constructor(listEmpSrv: ListEmployee) {
    super();
    this.listEmpServe = listEmpSrv
    this.employeeService = new EmployeeService();
  }
  ngOnInit(): void {
    this.empData = this.employeeService.getEmployee(this.employeeId);
  }

  openModal() {
    this.empData = this.employeeService.getEmployee(this.employeeId);
    this.show = true
  }
}
