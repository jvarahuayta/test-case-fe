import { Injectable } from '@angular/core';

@Injectable()
export class ToastService{

    show(message: string, title: string = 'Alerta'): Promise<any>{
        return new Promise((resolve)=>{
            resolve(alert(`${title}\n${message}`));
        });
    }

    error(message: string, title: string = 'Error'): Promise<any>{
        return this.show(message, title);
    }

    success(message: string, title: string = 'Success'): Promise<any>{
        return this.show(message, title);
    }

    warn(message: string, title: string = 'Warning'): Promise<any>{
        return this.show(message, title);
    }

}