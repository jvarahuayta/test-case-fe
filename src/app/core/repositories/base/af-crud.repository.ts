import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, tap, flatMap } from 'rxjs/operators';

import { ICrudRepository } from '../contracts/icrud.repository';
import { BaseSpecification, ByIdSpecification } from '../../specifications/base/base.specification';
import { BaseEntity } from '../../models/base/base.entity';
import { isOfType } from 'src/app/shared/helpers/instance.helper';
import { IFirebaseSpecification } from '../../specifications/contracts/firebase.specification';

@Injectable()
export abstract class AfCrudRepository<T extends BaseEntity<T>> implements ICrudRepository<T> {

    protected collectionName: string = null;
    protected entityClazz: (new (partial?: Partial<T>) => T) = null;
    protected docsWithId: boolean = true;
    private createEntity: (e) => T = ( e ) => new this.entityClazz(e);

    constructor(private af: AngularFirestore) {
        this._onCreate();
    }

    protected abstract _onCreate(): void;

    find(specification: BaseSpecification<T>): Observable<T[]> {
        if ( isOfType<IFirebaseSpecification>(specification, 'toQueryFn') ) {
            if( this.docsWithId ){
                return this.af.collection(this.collectionName, specification.toQueryFn() )
                .snapshotChanges()
                .pipe(
                    map( docs => docs.map( doc => ({
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data()
                    }))),
                    map( docs => docs.map( this.createEntity.bind(this) ) )
                );
            }else{
                return this.af.collection(this.collectionName, specification.toQueryFn() )
                .valueChanges()
                .pipe(
                    map( docs => docs.map( this.createEntity.bind(this) ) )
                );
            }
        }
        throw new Error("Method not implemented.");
    }

    findOne(specification: BaseSpecification<T>): Observable<T> {
        if ( specification instanceof ByIdSpecification ) {
            return this.af.collection(this.collectionName)
            .doc(specification.id)
            .valueChanges()
            .pipe(
                flatMap( val => {
                    if( !!val ){
                        return of(val)
                        .pipe(
                            map( val => ({ id: specification.id, ...val }) ),
                            map( this.createEntity.bind(this) )
                        )
                    }
                    return of(undefined);
                })
            );
        }
        throw new Error("Method not implemented.");
    }

    create( entity: T ): Observable<T> {
        return from(
            this.af.collection(this.collectionName).add({
                ...entity
            })
        ).pipe(
            map( doc => entity )
        );
    }

    update(entity: T): Observable<T> {
        return from(
            this.af.collection(this.collectionName)
            .doc(entity.id)
            .set({
                entity
            })
        ).pipe(
            map( doc => entity )
        );
    }

    updatePartial(partialEntity: Partial<T>): Observable<T> {
        return this.update(partialEntity as T);
    }

    delete(entity: T): Observable<T> {
        return from(
            this.af.collection(this.collectionName).doc(entity.id).delete()
        ).pipe(
            map( doc => entity )
        );
    }

}