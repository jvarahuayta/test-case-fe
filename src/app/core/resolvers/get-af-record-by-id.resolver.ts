import { Injector, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AfCrudRepository } from '../repositories/base/af-crud.repository';
import { ByIdSpecification } from '../specifications/base/base.specification';
import { first, catchError, map, tap } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Injectable()
export class GetAfRecordByIdResolver implements Resolve<any>{

    constructor(private injector: Injector, private toast: ToastService, private router: Router){

    }

    resolve(route: ActivatedRouteSnapshot): Observable<any>{
        const afRepository: AfCrudRepository<any> = this.injector.get(route.data.$$getAfRecord.repository);
        const redirectToOnNotFound = route.data.$$getAfRecord.redirectToOnNotFound;
        const docId = route.params.id;
        return afRepository.findOne( new ByIdSpecification(docId) )
        .pipe(
            first(),
            map( doc => {
                if ( !!doc ) {
                    return doc;
                }
                throw new Error();
            }),
            catchError( err => {
                console.log(err);
                this.toast.show('No se ha encontrado el documento solicitado');
                if ( !!redirectToOnNotFound ) {
                    this.router.navigateByUrl(redirectToOnNotFound);
                }
                return EMPTY;
            })
        );
    }

}