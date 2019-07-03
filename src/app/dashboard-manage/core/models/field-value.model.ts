import { BaseEntity } from 'src/app/core/models/base/base.entity';

export class FieldValue extends BaseEntity<FieldValue>{

    value: any;
    description: string;

}