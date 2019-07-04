import { PipeTransform, Pipe } from '@angular/core';
import { messages } from 'src/app/core/constants/messages.constant';
import { getValueByPath } from '../helpers/object.helper';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform{
    transform(message: string) {
        return getValueByPath(messages,message);
    }

}