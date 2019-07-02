import { QueryFn } from '@angular/fire/firestore';

export interface IFirebaseSpecification {

    toQueryFn(): QueryFn;

}