import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';

import { TranslatePipe } from './pipes/translate.pipe';
import { ToSelectCompareFn } from './pipes/to-select-compare-fn.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
    ToSelectCompareFn
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatSelectModule,
    TranslatePipe,
    ToSelectCompareFn
  ]
})
export class SharedModule { }
