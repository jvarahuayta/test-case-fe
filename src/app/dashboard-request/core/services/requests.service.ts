import { Injectable } from '@angular/core';
import { RequestsRepository } from '../repositories/requests.repository';
import { GetAllRecordsSpecification } from 'src/app/core/specifications/base/base.specification';
import { RequestStatusRepository } from '../repositories/request-status.repository';

@Injectable()
export class RequestsService{

    constructor(private requestsRepo : RequestsRepository, private requestStatusRepo: RequestStatusRepository){

    }

    getAllRequests(){
        return this.requestsRepo.find( new GetAllRecordsSpecification() );
    }

    getAllRequestStatus(){
        return this.requestStatusRepo.find( new GetAllRecordsSpecification() );
    }

}