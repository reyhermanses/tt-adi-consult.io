import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { employeesData } from '../../datas/data';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private employees: Employee[] = employeesData

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: string): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(id: string, employee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: string): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  getActive() {
    return this.employees.filter(emp => emp.status === "Active")
  }

  getInActive() {
    return this.employees.filter(emp => emp.status === "Inactive")
  }

  getPending() {
    return this.employees.filter(emp => emp.status === "Pending")
  }
  getArchived() {
    return this.employees.filter(emp => emp.status === "Archived")
  }
}
