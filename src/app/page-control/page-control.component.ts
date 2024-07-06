import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Dashboard } from "../dashboard/dashboard.component";
import { ListEmployee } from "../list-employee/list-employee.component";
import { PageControlService } from '../services/page-control.service';
import { LocalStorageService } from '../services/localstorage.service';

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
  locStr: LocalStorageService

  constructor(private pageControlService: PageControlService, private localStorage: LocalStorageService) {
    this.locStr = localStorage
  }

  ngOnInit() {
    this.pageControlService.currentPageIndex.subscribe(pageIndex => {
      if (this.locStr.getItem('setPageIndex')) {
        this.pageIndex = this.locStr.getItem('setPageIndex');
      } else {
        this.pageIndex = pageIndex;
      }
    });
  }
}
