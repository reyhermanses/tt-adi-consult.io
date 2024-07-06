import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeService } from '../services/employee.service';
import { ListEmployee } from '../list-employee/list-employee.component';
import moment from 'moment';
import { NotificationService, NotificationType } from '../services/notification.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],  // Gunakan Tailwind CSS di sini,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EmployeeEditComponent extends ModalComponent implements OnInit {
  @Input() employeeId!: string;

  employeeFormEdit!: FormGroup;
  fb: FormBuilder;

  employeeService!: EmployeeService
  empData!: any;

  listEmpServe!: ListEmployee

  constructor(empSrv: EmployeeService, listEmpSrv: ListEmployee,private notificationService: NotificationService) {
    super();
    this.listEmpServe = listEmpSrv
    this.employeeService = new EmployeeService();
    this.fb = new FormBuilder
    this.employeeFormEdit =
      this.employeeFormEdit = this.fb.group({
        id: [],
        username: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthDate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
        basicSalary: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
        status: ['', [Validators.required]],
        group: ['', [Validators.required]],
        description: ['']
      });
  }

  ngOnInit(): void {
    this.empData = this.employeeService.getEmployee(this.employeeId);
  }

  openModal() {
    this.empData = this.employeeService.getEmployee(this.employeeId);

    this.employeeFormEdit.patchValue({
      id: this.empData.id,
      username: this.empData.username,
      firstName: this.empData.firstName,
      lastName: this.empData.lastName,
      email: this.empData.email,
      birthDate: this.formatDate(this.empData.birthDate),
      basicSalary: this.empData.basicSalary,
      status: this.empData.status,
      group: this.empData.group,
      description: this.empData.description
    });

    this.show = true
  }


  onUpdate() {
    if (this.employeeFormEdit.valid) {
      const oldValue = this.employeeFormEdit.value
      this.employeeService.updateEmployee(this.employeeId, this.employeeFormEdit.value)
      this.notificationService.showNotification(NotificationType.Edit, 'Form updated successfully!');
      this.listEmpServe.setPage(this.listEmpServe.currentPage)
      this.close();
    }
    else {
      console.log('Form not valid');
    }
  }

  formatDate(date: any): any {
    // let dated = new Date();
    // return this.datePipe.transform(dated,"yyyy-MM-dd")
    return date ? moment(date).format('YYYY-MM-DD') : '-';
  }
}
