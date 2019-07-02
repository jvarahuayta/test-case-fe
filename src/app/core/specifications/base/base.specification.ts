import { BaseEntity } from '../../models/base/base.entity';
import { IFirebaseSpecification } from '../contracts/firebase.specification';

export class BaseSpecification<T extends BaseEntity<T>>{

}

export class ByIdSpecification extends BaseSpecification<any>{

    constructor( public id: string ){
        super();
    }
}