import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { BaseSpecification } from 'src/app/core/specifications/base/base.specification';
import { isOfType } from 'src/app/shared/helpers/instance.helper';
import { Request } from '../models/request.model';

@Injectable({
    providedIn: 'root'
})
export class RequestsRepository extends AfCrudRepository<Request> {

    protected _onCreate(): void {
        this.collectionName = 'requests';
        this.entityClazz = Request;
    }

    find( specification: BaseSpecification<Request> ): Observable<Request[]> {
        return super.find( specification )
        .pipe(
            map(
                requests => requests.map( req => {
                    if( typeof req.date['toDate'] === 'function' ){
                        req.date = req.date['toDate']();
                    }
                    return req;
                })
            )
        );
    }

}