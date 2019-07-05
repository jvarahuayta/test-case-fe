import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldListComponent } from './field-list.component';
import { ManageFieldsService } from '../../core/services/manage-fields.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Field } from '../../core/models/field.model';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

const manageFieldsServiceStub: Partial<ManageFieldsService> = {
  getFields: () => {
    return of([
      new Field({ id: '123456' })
    ]);
  }
}

@Component({ selector: 'app-stub-cmp', template: '' })
class StubComponent { }

const stubRoutes: Routes = [
  { path: ':id', component: StubComponent }
];

describe('FieldListComponent', () => {
  let component: FieldListComponent;
  let debugElm: DebugElement;
  let fixture: ComponentFixture<FieldListComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldListComponent, StubComponent ],
      imports: [ RouterTestingModule.withRoutes( stubRoutes ) ],
      providers: [
        { provide: ManageFieldsService, useValue: manageFieldsServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldListComponent);
    component = fixture.componentInstance;
    debugElm = fixture.debugElement;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to details on field click', async () => {
    let fieldOptionElm = debugElm.query( By.css('li:first-child') );
    fieldOptionElm.triggerEventHandler('click', null);
    await fixture.whenStable();
    expect(location.path()).toBe(`/123456`);
  });
});
