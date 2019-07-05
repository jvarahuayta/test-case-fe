import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestsPageComponent } from './list-requests-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListRequestsPageComponent', () => {
  let component: ListRequestsPageComponent;
  let fixture: ComponentFixture<ListRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequestsPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
