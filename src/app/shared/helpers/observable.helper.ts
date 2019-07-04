import { Observable } from "rxjs";
import { OnDestroy } from "@angular/core";

export const componentDestroyed = ( ngComponent: OnDestroy | any ) => {
    return new Observable<boolean>( (sub) => {
        ngComponent.ngOnDestroy = ngComponent.ngOnDestroy || ( () => {} );
        const oldOnDestroy = ngComponent.ngOnDestroy.bind(ngComponent) || ( ()=>{} );
        ngComponent.ngOnDestroy = () => {
            sub.next(true);
            sub.complete();
            sub.unsubscribe();
            oldOnDestroy();
        }
    });
}