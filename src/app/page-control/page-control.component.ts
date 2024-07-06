import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Dashboard } from "../dashboard/dashboard.component";
import { ListEmployee } from "../list-employee/list-employee.component";
import { PageControlService } from '../services/page-control.service';

@Component({
  selector: 'app-page-control',
  standalone: true,
  templateUrl: './page-control.component.html',
  // template: 'page index : {{this.pageIndex}}',
  styleUrl: './page-control.component.css',
  imports: [Dashboard, ListEmployee, CommonModule]
})
export class PageControlComponent implements OnInit {
  pageIndex!: number
  test!: number

  constructor(private pageControlService: PageControlService) { }

  ngOnInit() {
    this.pageControlService.currentPageIndex.subscribe(pageIndex => {
      this.pageIndex = pageIndex;
    });
  }
}
