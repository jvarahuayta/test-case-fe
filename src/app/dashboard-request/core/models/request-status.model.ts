import { BaseEntity } from 'src/app/core/models/base/base.entity';

export class RequestStatus extends BaseEntity<RequestStatus>{

    code: string;
    name: string;
    bgColor: string;
    fgColor: string;
    
}