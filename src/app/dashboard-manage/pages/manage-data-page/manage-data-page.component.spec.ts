import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataPageComponent } from './manage-data-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ManageDataPageComponent', () => {
  let component: ManageDataPageComponent;
  let fixture: ComponentFixture<ManageDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDataPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
