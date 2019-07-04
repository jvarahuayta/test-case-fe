import { PipeTransform, Pipe } from '@angular/core';
import { messages } from 'src/app/core/constants/messages.constant';

@Pipe({
    name: 'toSelectCompareFn'
})
export class ToSelectCompareFn implements PipeTransform {
    transform(field: string) {
        return (a,b) => {
            if ( !a && !b ){
                return true;
            }
            if ( !a || !b ) {
                return false;
            }
            return a[field] === b[field];
        }
    }

}