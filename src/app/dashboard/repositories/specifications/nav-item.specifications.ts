import { BaseEntity } from 'src/app/core/models/base/base.entity';
import { NavItem } from '../../models/nav-item.model';
import { IFirebaseSpecification } from 'src/app/core/specifications/contracts/firebase.specification';
import { QueryFn } from '@angular/fire/firestore';

export class NavItemSpecification extends BaseEntity<NavItem>{

}

export class GetNavSpecification extends NavItemSpecification
    implements IFirebaseSpecification{

    toQueryFn(): QueryFn {
        return ref => ref.orderBy('order','asc');
    }

}