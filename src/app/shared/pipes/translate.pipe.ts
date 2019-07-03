import { PipeTransform, Pipe } from '@angular/core';
import { messages } from 'src/app/core/constants/messages.constant';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform{
    transform(message: string) {
        return messages[message];
    }

}