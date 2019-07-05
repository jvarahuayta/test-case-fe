import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestComponent } from './dashboard-request.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardRequestComponent', () => {
  let component: DashboardRequestComponent;
  let fixture: ComponentFixture<DashboardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequestComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
