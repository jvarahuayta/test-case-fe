import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInformationComponent } from './field-information.component';

describe('FieldInformationComponent', () => {
  let component: FieldInformationComponent;
  let fixture: ComponentFixture<FieldInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
