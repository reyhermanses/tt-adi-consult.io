import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageControlService } from '../services/page-control.service';
import { LocalStorageService } from '../services/localstorage.service';

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
    locStr: LocalStorageService

    constructor(private pageControlService: PageControlService, localStorage: LocalStorageService) { 
        this.locStr = localStorage
        this.getPageIndex()
    }

    toggleSubMenu() {
        console.log('toogleSubMenu')
        console.log(this.isSubMenuOpen)
        this.isSubMenuOpen = !this.isSubMenuOpen;
    }

    setIndex(pageIndex: number): void {
        console.log(pageIndex);
        this.locStr.removeItem('setPageIndex')
        this.pageControlService.changePageIndex(pageIndex);
        this.locStr.setItem('setPageIndex', pageIndex);
    }

    getPageIndex(){
        console.log('get page index', this.locStr.getItem('setPageIndex'))
    }
}