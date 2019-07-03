import { BaseEntity } from '../../models/base/base.entity';
import { IFirebaseSpecification } from '../contracts/firebase.specification';
import { QueryFn } from '@angular/fire/firestore';

export class BaseSpecification<T extends BaseEntity<T>>{

}

export class GetAllRecordsSpecification extends BaseSpecification<any>
implements IFirebaseSpecification{
    
    toQueryFn(): QueryFn{
        return ref => ref;
    }

}

export class ByIdSpecification extends BaseSpecification<any>{

    constructor( public id: string ){
        super();
    }
}