import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { FieldListComponent } from './field-list/field-list.component';
import { FieldInformationComponent } from './field-information/field-information.component';

@NgModule({
  declarations: [FieldListComponent, FieldInformationComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [FieldListComponent, FieldInformationComponent]
})
export class DashboardManageComponentsModule { }
