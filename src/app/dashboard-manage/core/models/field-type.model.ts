import { BaseEntity } from 'src/app/core/models/base/base.entity';

export class FieldType extends BaseEntity<FieldType>{
    
    name: string;
    description: string;

}