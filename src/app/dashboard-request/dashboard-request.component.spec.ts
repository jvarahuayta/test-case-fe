import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestComponent } from './dashboard-request.component';

describe('DashboardRequestComponent', () => {
  let component: DashboardRequestComponent;
  let fixture: ComponentFixture<DashboardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequestComponent ]
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
