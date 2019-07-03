import { Injectable } from '@angular/core';

@Injectable()
export class ToastService{

    show(message: string, title: string = 'Alerta'): Promise<any>{
        return new Promise((resolve)=>{
            resolve(alert(`${title}\n${message}`));
        });
    }

}