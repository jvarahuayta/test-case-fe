import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { flatMap, tap, map } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore';

import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { isOfType } from 'src/app/shared/helpers/instance.helper';
import { ByIdSpecification } from 'src/app/core/specifications/base/base.specification';
import { FieldMapper } from './mappers/field.mapper';
import { Field } from '../models/field.model';
import { FieldType } from '../models/field-type.model';

@Injectable({
    providedIn: 'root'
})
export class FieldsRepository extends AfCrudRepository<Field>{

    protected _onCreate(): void {
        this.collectionName = 'fields';
        this.entityClazz = Field;
        this.mapper = new FieldMapper();
    }

    findOne( specification ): Observable<Field>{
        if ( specification instanceof ByIdSpecification ) {
            const $field = super.findOne(specification);
            return $field
            .pipe(
                flatMap( field => {
                    if ( isOfType<DocumentReference>(field.type, 'firestore') ) {
                        const typeId = field.type.id;
                        return from( field.type.get() )
                        .pipe(
                            map( type => new FieldType({ id: typeId, ...type.data() }) ),
                            tap( type => field.type = type ),
                            map( () => field )
                        );
                    }
                    return of(field);
                })
            );
        }
        return super.findOne(specification);
    }

}