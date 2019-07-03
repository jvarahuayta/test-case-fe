import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInformationPageComponent } from './field-information-page.component';

describe('FieldInformationPageComponent', () => {
  let component: FieldInformationPageComponent;
  let fixture: ComponentFixture<FieldInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInformationPageComponent ]
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
