import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeService } from '../services/employee.service';
import { ListEmployee } from '../list-employee/list-employee.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-employee-v2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detail-employee-v2.component.html',
  styleUrl: './detail-employee-v2.component.css'
})
export class DetailEmployeeV2Component extends ModalComponent implements OnInit {
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
