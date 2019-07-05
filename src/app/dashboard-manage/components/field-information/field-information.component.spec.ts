import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInformationComponent } from './field-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ManageFieldsService } from '../../core/services/manage-fields.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Field } from '../../core/models/field.model';
import { FieldType } from '../../core/models/field-type.model';
import { first } from 'rxjs/operators';

const delay = ( time ) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
};

class ActivatedRouteStub{
  $data = new BehaviorSubject(
    {
      afRecord: new Field({
        id: '1',
        name: 'Key0',
        description: '...',
        type: null,
        sensitivity: false
      })
    }
  );
  get data(){
    return this.$data.asObservable();
  }
  setData(data){
    this.$data.next(data);
  }
}

const fieldType = new FieldType({ id: '1', name: 'field-type' });

const manageFieldsServiceStub: Partial<ManageFieldsService> = {
  getFieldTypes: () => {
    return of([
      fieldType
    ]);
  },
  updateField: (field) => {
    return of(field);
  }
};


describe('FieldInformationComponent', () => {
  let component: FieldInformationComponent;
  let debugElm: DebugElement;
  let fixture: ComponentFixture<FieldInformationComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldInformationComponent ],
      imports: [ SharedModule, RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
        { provide: ManageFieldsService, useValue: manageFieldsServiceStub },
        AlertsService,
        ToastService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInformationComponent);
    component = fixture.componentInstance;
    debugElm = fixture.debugElement;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initially in read mode', () => {
    expect(component.mode).toBe('read');
  });

  it('should change to edit mode on edit click', () => {
    debugElm.query( By.css('#editBtn') ).triggerEventHandler('click',null);
    expect(component.mode).toBe('edit');
  });

  it('shouldn\'t show form controls on read mode', () => {
    const keyNameFC = debugElm.query( By.css('#keyNameFC') );
    const descriptionFC = debugElm.query( By.css('#descriptionFC') );
    const typeFC = debugElm.query( By.css('#typeFC') );
    const sensitivityFC = debugElm.query( By.css('#sensitivityFC') );
    const addValueBtn = debugElm.query( By.css('#addValueBtn') );
    expect(
      !keyNameFC && !descriptionFC && !typeFC && !sensitivityFC && !addValueBtn
    ).toBe(true);
  });

  it('should show form controls on edit mode', () => {
    debugElm.query( By.css('#editBtn') ).triggerEventHandler('click', null);
    fixture.detectChanges();
    const keyNameFC = debugElm.query( By.css('#keyNameFC') );
    const descriptionFC = debugElm.query( By.css('#descriptionFC') );
    const typeFC = debugElm.query( By.css('#typeFC') );
    const sensitivityFC = debugElm.query( By.css('#sensitivityFC') );
    const addValueBtn = debugElm.query( By.css('#addValueBtn') );
    expect(
      !!keyNameFC && !!descriptionFC && !!typeFC && !!sensitivityFC && !!addValueBtn
    ).toBe(true);
  });

  it('update field information after save', async () => {

    await fixture.whenStable();

    debugElm.query( By.css('#editBtn') ).triggerEventHandler('click', null);
    fixture.detectChanges();

    const keyNameFC = debugElm.query( By.css('#keyNameFC') );
    const descriptionFC = debugElm.query( By.css('#descriptionFC') );
    const typeFC = debugElm.query( By.css('#typeFC') );
    const sensitivityFC = debugElm.query( By.css('#sensitivityFC') );

    const newFieldInformation = new Field({
      id: '1',
      name: 'Key1',
      description: 'Desc',
      type: fieldType,
      sensitivity: true,
      values: []
    });

    keyNameFC.nativeElement.value = newFieldInformation.name;
    keyNameFC.nativeElement.dispatchEvent(new Event('input'));
    descriptionFC.nativeElement.value = newFieldInformation.description;
    descriptionFC.nativeElement.dispatchEvent(new Event('input'));
    typeFC.nativeElement.value = typeFC.nativeElement.options[1].value;
    typeFC.nativeElement.dispatchEvent(new Event('change'));
    sensitivityFC.nativeElement.checked = true;
    sensitivityFC.nativeElement.dispatchEvent(new Event('change'));

    const fieldInformationValue = new Field(component.fieldInformationFG.value);

    debugElm.query( By.css('#editBtn') ).triggerEventHandler('click', null);
    activatedRoute.setData({ afRecord: fieldInformationValue });

    expect( component.fieldInformation ).toEqual( newFieldInformation );

  });

});
