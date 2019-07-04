import { BaseMapper } from 'src/app/core/repositories/mappers/base/base.mapper';
import { firestore } from 'firebase';
import { firebaseConstants } from 'src/app/core/constants/firebase.constant';
import { Field } from '../../models/field.model';

export class FieldMapper extends BaseMapper<Field>{

    protected clazz: new (partial?: Partial<Field>) => Field = Field;

    mapToBe(e: Field): any{
        let beEntity = {
            ...e,
            type: firestore()
                .collection(firebaseConstants.COLLECTION_NAMES.FIELD_TYPES).doc(e.type.id)
        };
        delete beEntity.id;
        return beEntity;
    }
}