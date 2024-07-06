import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageControlService {
  private pageIndexSource = new BehaviorSubject<number>(1);
  currentPageIndex = this.pageIndexSource.asObservable();

  changePageIndex(pageIndex: number) {
    this.pageIndexSource.next(pageIndex);
  }
}
