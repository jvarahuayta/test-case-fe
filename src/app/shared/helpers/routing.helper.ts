import { Router } from '@angular/router';

export const reloadPage = ( router: Router ) => {
    router.navigated = false;
    router.navigate([router.url]);
}