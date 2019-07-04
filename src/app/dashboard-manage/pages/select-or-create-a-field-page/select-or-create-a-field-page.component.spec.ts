import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrCreateAFieldPageComponent } from './select-or-create-a-field-page.component';

describe('SelectOrCreateAFieldPageComponent', () => {
  let component: SelectOrCreateAFieldPageComponent;
  let fixture: ComponentFixture<SelectOrCreateAFieldPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOrCreateAFieldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrCreateAFieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
