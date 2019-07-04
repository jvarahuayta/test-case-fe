import { FormGroup, FormArray, AbstractControl } from "@angular/forms";


const markAllChildrenAsTouchedForFG = ( fg: FormGroup ) => {
    Object.values( fg.controls )
    .forEach( control => {
        markAllChildrenAsTouched( control );
    });
}

const markChildrenAsTouchedForFA = ( fa: FormArray ) => {
    fa.controls.forEach( control => {
        markAllChildrenAsTouched( control );
    });
}

const markAllChildrenAsTouched = ( control: AbstractControl ) => {
    if ( control instanceof FormGroup ) {
        markAllChildrenAsTouchedForFG( control );
    } else if ( control instanceof FormArray ) {
        markChildrenAsTouchedForFA( control );
    } else {
        control.markAsTouched();
    }
}

export const FormsHelper = {
    markAllChildrenAsTouched
}