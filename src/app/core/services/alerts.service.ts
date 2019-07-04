import { Injectable } from '@angular/core';

@Injectable()
export class AlertsService{

    confirm(message: string, title: string = 'Confirm'): Promise<boolean>{
        return Promise.resolve(confirm(`${title}\n${message}`));
    }

}