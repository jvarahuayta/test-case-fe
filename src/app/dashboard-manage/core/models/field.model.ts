import { BaseEntity } from 'src/app/core/models/base/base.entity';
import { FieldType } from './field-type.model';
import { FieldValue } from './field-value.model';

export class Field extends BaseEntity<Field>{

    name: string;
    description: string;
    type: FieldType;
    sensitivity: 'PERSONAL' | 'PUBLIC';
    values: FieldValue[];

}