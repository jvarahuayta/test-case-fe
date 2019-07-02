import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from '../models/nav-item.model';
import { NavItemsRepository } from '../repositories/nav-items.repository';
import { GetNavSpecification } from '../repositories/specifications/nav-item.specifications';

@Injectable()
export class NavService{

    constructor(private navItemsRepo: NavItemsRepository) {

    }

    getNavMenu(): Observable<NavItem[]>{
        return this.navItemsRepo.find( new GetNavSpecification() );
    }

}