import { AfCrudRepository } from 'src/app/core/repositories/base/af-crud.repository';
import { NavItem } from '../models/nav-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class NavItemsRepository extends AfCrudRepository<NavItem>{

    protected _onCreate(): void {
        this.collectionName = '_core-navigation';
        this.entityClazz = NavItem;
    }

}