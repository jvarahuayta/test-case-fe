import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { flatMap, tap, map } from 'rxjs/operators';
import { DocumentReference } from '@angular/fire/firestore';

import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { Field } from '../core/models/field.model';
import { isOfType } from 'src/app/shared/helpers/instance.helper';
import { FieldType } from '../core/models/field-type.model';
import { ByIdSpecification } from 'src/app/core/specifications/base/base.specification';

@Injectable({
    providedIn: 'root'
})
export class FieldsRepository extends AfCrudRepository<Field>{

    protected _onCreate(): void {
        this.collectionName = 'fields';
        this.entityClazz = Field;
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