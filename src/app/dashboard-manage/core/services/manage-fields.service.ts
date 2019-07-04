import { Injectable } from '@angular/core';

import { FieldsRepository } from '../repositories/fields.repository';
import { Observable } from 'rxjs';
import { GetAllRecordsSpecification } from 'src/app/core/specifications/base/base.specification';
import { FieldTypesRepository } from '../repositories/field-types.repository';
import { Field } from '../models/field.model';
import { FieldType } from '../models/field-type.model';

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

    updateField(field: Field): Observable<Field>{
        return this.fieldsRepo.update(field);
    }

    createField(field: Field): Observable<Field>{
        return this.fieldsRepo.create(field);
    }

    deleteField(field: Field): Observable<Field>{
        return this.fieldsRepo.delete(field);
    }
}