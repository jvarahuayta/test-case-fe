import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Field } from '../../core/models/field.model';
import { reloadPage as refreshFieldInformation } from 'src/app/shared/helpers/routing.helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FieldType } from '../../core/models/field-type.model';
import { FieldValue } from '../../core/models/field-value.model';
import { takeUntil, catchError } from 'rxjs/operators';
import { componentDestroyed } from 'src/app/shared/helpers/observable.helper';
import { ToastService } from 'src/app/core/services/toast.service';
import { crud } from 'src/app/core/constants/crud.constants';
import { messages } from 'src/app/core/constants/messages.constant';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { FormsHelper } from 'src/app/shared/helpers/forms.helper';
import { ManageFieldsService } from '../../core/services/manage-fields.service';

@Component({
  selector: 'app-field-information',
  templateUrl: './field-information.component.html',
  styleUrls: ['./field-information.component.scss']
})
export class FieldInformationComponent implements OnInit {

  fieldInformation: Field;
  fieldInformationFG: FormGroup;
  $fieldTypes: Observable<FieldType[]>;
  mode: 'edit' | 'read' = 'read';

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
  private manageFieldsSvc: ManageFieldsService, private toast: ToastService,
  private alerts: AlertsService) {
    this.$fieldTypes = this.manageFieldsSvc.getFieldTypes();
    this.createForms();
    this.route.data
    .pipe(
      takeUntil( componentDestroyed(this) )
    )
    .subscribe( data => {
      this.mode = data.mode || 'read';
      this.fieldInformation = data.afRecord;
      this.fillFormsModels(this.fieldInformation);
    });
  }

  ngOnInit() {
  }

  createForms() {
    this.fieldInformationFG = this.fb.group({
      id: null,
      name: [null,[Validators.required]],
      description: [null,[Validators.required]],
      type: [null,[Validators.required]],
      sensitivity: [true],
      values: this.fb.array([])
    });
  }

  resetForms(){
    this.fieldInformationFG.reset();
    this.fieldInformationFG.setControl('values',this.fb.array([]));
  }

  fillFormsModels( fieldInformation?: Field ){
    this.resetForms();
    if ( !!fieldInformation ) {
      this.fieldInformationFG.patchValue(fieldInformation);
      (this.fieldInformation.values||[]).forEach( this.addFieldValue.bind(this) );
    }
  }

  get valuesFA(): FormArray{
    return this.fieldInformationFG.get('values') as FormArray;
  }

  addFieldValue(fieldValue?: FieldValue){
    const fieldValueFG = this.fb.group({
      value: [null,[Validators.required]],
      description: [null,[Validators.required]]
    });
    if( !!fieldValue ){
      fieldValueFG.patchValue(fieldValue);
    }
    this.valuesFA.push(fieldValueFG);
  }

  removeFieldValue(index: number){
    this.valuesFA.removeAt(index);
  }

  onSave(){
    if( this.fieldInformationFG.invalid ){
      this.toast.warn(messages.MANAGE_DATA.FIELD_EXIST_INVALID_CONTROLS);
      FormsHelper.markAllChildrenAsTouched( this.fieldInformationFG );
      return;
    }
    const managedField = new Field({
      ...this.fieldInformationFG.value,
      sensitivity: this.fieldInformationFG.value.sensitivity
    });
    const crudOperation = !!managedField.id ? crud.OPERATIONS.UPDATE : crud.OPERATIONS.CREATE;
    const $crud = crudOperation === crud.OPERATIONS.CREATE ?
      this.manageFieldsSvc.createField(managedField) :
      this.manageFieldsSvc.updateField(managedField);
    $crud.pipe(
      catchError( err => {
        console.error(err);
        const errorMessage = crudOperation === crud.OPERATIONS.CREATE ?
          messages.MANAGE_DATA.FIELD_ERROR_ON_CREATE : messages.MANAGE_DATA.FIELD_ERROR_ON_UPDATE;
        this.toast.error(errorMessage);
        return of(undefined);
      })
    )
    .subscribe( (result: Field) => {
      if ( !!result ) {
        const successMessage = crudOperation === crud.OPERATIONS.CREATE ?
          messages.MANAGE_DATA.FIELD_SUCCESS_ON_CREATE : messages.MANAGE_DATA.FIELD_SUCCESS_ON_UPDATE;
        this.toast.success(successMessage);
        if ( crudOperation === crud.OPERATIONS.CREATE ) {
          this.router.navigate([`../${result.id}`],{ relativeTo: this.route });
        } else {
          refreshFieldInformation(this.router);
          this.mode = 'read';
        }
      }
    });
  }

  onCrudButtonClick(){
    if( this.mode === 'edit' ){
      this.onSave();
    }else{
      this.mode = 'edit';
      this.fillFormsModels(this.fieldInformation);
    }
  }

  cancel(){
    if ( !!this.fieldInformation ) {
      this.mode = 'read';
      this.resetForms();
    } else {
      this.navigateToNotSelectedFieldView();
    }
  }

  deleteField(){
    this.alerts.confirm(messages.MANAGE_DATA.FIELD_CONFIRM_DELETE)
    .then( confirm => {
      if( confirm ){
        this.manageFieldsSvc.deleteField(this.fieldInformation)
        .pipe(
          catchError(err => {
            console.error(err);
            this.toast.error(messages.MANAGE_DATA.FIELD_ERROR_ON_DELETE);
            return of(undefined)
          })
        )
        .subscribe( result => {
          if( !!result ){
            this.toast.success(messages.MANAGE_DATA.FIELD_SUCCESS_ON_DELETE);
            this.navigateToNotSelectedFieldView();
          }
        });
      }
    })
  }

  //NAVIGATION
  navigateToNotSelectedFieldView(){
    this.router.navigate(['../'],{ relativeTo: this.route });
  }

}
