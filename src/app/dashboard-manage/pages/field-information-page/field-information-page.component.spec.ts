import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInformationPageComponent } from './field-information-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FieldInformationPageComponent', () => {
  let component: FieldInformationPageComponent;
  let fixture: ComponentFixture<FieldInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInformationPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
