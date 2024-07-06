import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageControlService } from '../services/page-control.service';

@Component({
    selector: 'left-sidebar-root',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './left-sidebar.component.html',
    styleUrl: './left-sidebar.component.css'
})

export class LeftSidebar {
    isSubMenuOpen: boolean = false;
    pageIndex: number = 1;
    appComponent: any;
    // pageControl : PageControlComponent;

    constructor(private pageControlService: PageControlService) { }

    toggleSubMenu() {
        console.log('toogleSubMenu')
        console.log(this.isSubMenuOpen)
        this.isSubMenuOpen = !this.isSubMenuOpen;
    }

    setIndex(pageIndex: number): void {
        // console.log(pageIndex)
        // this.pageControl.setPageIndex(pageIndex);
        this.pageControlService.changePageIndex(pageIndex);
    }
}