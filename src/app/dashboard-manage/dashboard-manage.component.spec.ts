import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManageComponent } from './dashboard-manage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardManageComponent', () => {
  let component: DashboardManageComponent;
  let fixture: ComponentFixture<DashboardManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardManageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
