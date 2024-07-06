import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmployeeV2Component } from './detail-employee-v2.component';

describe('DetailEmployeeV2Component', () => {
  let component: DetailEmployeeV2Component;
  let fixture: ComponentFixture<DetailEmployeeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEmployeeV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEmployeeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
