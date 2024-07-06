import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ModalComponent } from '../modal/modal.component';
import { ListEmployee } from '../list-employee/list-employee.component';
import { NotificationService , Notification, NotificationType} from '../services/notification.service';
import { birthDateValidator } from '../validators/date.validator';
import { NotificationService2 } from '../services/notification2.service';

@Component({
  selector: 'app-form-employee',
  standalone: true,
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateEmployeeComponent extends ModalComponent {
  notification: Notification | null = null;
  employeeForm!: FormGroup;
  employeeService!: EmployeeService;
  listEmployee!: ListEmployee;
  // modalComponent: ModalComponent;

  constructor(private fb: FormBuilder, private empSrv: EmployeeService, private listEmpSrv: ListEmployee,private notificationService2: NotificationService2) {
    // this.modalComponent = pMModalComponent;
    super();
    this.employeeForm = this.fb.group({
      id: [],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), birthDateValidator()]],
      basicSalary: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      status: ['', [Validators.required]],
      group: ['', [Validators.required]],
      description: ['']
    });

    this.employeeService = empSrv;
    this.listEmployee = listEmpSrv;

    this.employeeService.getEmployees();
  }

  ngOnInit():void{
    // this.notificationService.notification$.subscribe((notification: Notification | null) => {
    //   this.notification = notification;
    // });
  }

  checkStatus(status: string) {
    return status === 'Pilih' ? false : true
  }

  openModal() {
    // this.listEmployee.employees()
    this.show = true
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form Submitted!', this.employeeForm.value);
      const oldValue = this.employeeForm.value
      const newValue = { ...oldValue, id: this.listEmpSrv.employees.length + 1 }
      this.employeeService.addEmployee(newValue)
      this.listEmpSrv.setPage(this.listEmpSrv.totalPage)
      this.notificationService2.showSuccess('Form created successfully!');
      this.close();
    }
    else {
      console.log('Form not valid');
    }
  }

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Form Submitted!', form.value);
  //     // Handle form submission, e.g., send data to the server
  //   } else {
  //     console.log('Form not valid');
  //   }
  // }
}
