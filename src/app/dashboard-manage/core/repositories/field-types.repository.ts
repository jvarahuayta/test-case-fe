import { Injectable } from '@angular/core';

import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { FieldType } from '../models/field-type.model';

@Injectable({
    providedIn: 'root'
})
export class FieldTypesRepository extends AfCrudRepository<FieldType>{

    protected _onCreate(): void {
        this.collectionName = 'fieldTypes';
        this.entityClazz = FieldType;
    }

}