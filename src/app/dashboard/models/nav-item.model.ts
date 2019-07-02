import { BaseEntity } from 'src/app/core/models/base/base.entity';

export class NavItem extends BaseEntity<NavItem>{

    name: string;
    order: string;
    code: string;
    route: string;

}