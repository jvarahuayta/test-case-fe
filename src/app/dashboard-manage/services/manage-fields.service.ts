import { Injectable } from '@angular/core';

import { FieldsRepository } from '../repositories/fields.repository';
import { Observable } from 'rxjs';
import { Field } from '../core/models/field.model';
import { GetAllRecordsSpecification } from 'src/app/core/specifications/base/base.specification';
import { FieldType } from '../core/models/field-type.model';
import { FieldTypesRepository } from '../repositories/field-types.repository';

@Injectable()
export class ManageFieldsService{

    constructor(public fieldsRepo: FieldsRepository, private fieldTypesRepo: FieldTypesRepository) {

    }

    getFields(): Observable<Field[]>{
        return this.fieldsRepo.find( new GetAllRecordsSpecification() );
    }

    getFieldTypes(): Observable<FieldType[]>{
        return this.fieldTypesRepo.find( new GetAllRecordsSpecification() );
    }
}