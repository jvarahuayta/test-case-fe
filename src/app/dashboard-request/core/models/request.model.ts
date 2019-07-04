import { BaseEntity } from 'src/app/core/models/base/base.entity';
import { RequestStatus } from './request-status.model';

export class Request extends BaseEntity<Request>{

    date: Date;
    reason: string;
    statusCode: string;
    status: RequestStatus;

}