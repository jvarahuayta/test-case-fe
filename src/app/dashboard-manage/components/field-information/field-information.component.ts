import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Field } from '../../core/models/field.model';
import { reloadPage } from 'src/app/shared/helpers/routing.helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ManageFieldsService } from '../../services/manage-fields.service';
import { FieldType } from '../../core/models/field-type.model';
import { FieldValue } from '../../core/models/field-value.model';

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
  private manageFieldsSvc: ManageFieldsService) {
    this.$fieldTypes = this.manageFieldsSvc.getFieldTypes();
    this.createForms();
    this.route.data.subscribe( data => {
      this.fieldInformation = data.afRecord;
      this.fillFormsModels(this.fieldInformation);
      console.log(this.fieldInformation);
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

  fillFormsModels( fieldInformation: Field ){
    this.resetForms();
    if( !!fieldInformation ){
      this.fieldInformationFG.patchValue(fieldInformation);
      (this.fieldInformation.values||[]).forEach( this.onAddFieldValue.bind(this) );
    }
  }

  get valuesFA(): FormArray{
    return this.fieldInformationFG.get('values') as FormArray;
  }

  onAddFieldValue(fieldValue?: FieldValue){
    const fieldValueFG = this.fb.group({
      value: [null,[Validators.required]],
      description: [null,[Validators.required]]
    });
    if( !!fieldValue ){
      fieldValueFG.patchValue(fieldValue);
    }
    this.valuesFA.push(fieldValueFG);
  }

  onSave(){
    reloadPage(this.router);
    this.mode = 'read';
  }

  onCrudButtonClick(){
    if( this.mode === 'edit' ){
      this.onSave();
    }else{
      this.mode = 'edit';
    }
  }

}
