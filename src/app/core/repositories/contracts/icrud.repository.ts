import { BaseSpecification } from '../../specifications/base/base.specification';
import { BaseEntity } from '../../models/base/base.entity';
import { Observable } from 'rxjs';

export interface ICrudRepository<T extends BaseEntity<T>>{
    find( specification: BaseSpecification<T> ): Observable<T[]>;
    findOne( specification: BaseSpecification<T> ): Observable<T>;
    create( entity: T ): Observable<T>;
    update( entity: T ): Observable<T>;
    updatePartial( partialEntity: Partial<T> ): Observable<T>;
    delete( entity: T ): Observable<T>;
}