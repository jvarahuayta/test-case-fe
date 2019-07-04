import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { Injectable } from '@angular/core';
import { Request } from '../models/request.model';
import { RequestStatus } from '../models/request-status.model';

@Injectable({
    providedIn: 'root'
})
export class RequestStatusRepository extends AfCrudRepository<RequestStatus> {

    protected _onCreate(): void {
        this.collectionName = 'requestStatus';
        this.entityClazz = RequestStatus;
    }

}