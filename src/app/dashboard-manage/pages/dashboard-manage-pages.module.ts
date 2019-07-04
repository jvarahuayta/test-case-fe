import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageDataPageComponent } from './manage-data-page/manage-data-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardManageComponentsModule } from '../components/dashboard-manage-components.module';
import { FieldInformationPageComponent } from './field-information-page/field-information-page.component';
import { SelectOrCreateAFieldPageComponent } from './select-or-create-a-field-page/select-or-create-a-field-page.component';

@NgModule({
  declarations: [ManageDataPageComponent, FieldInformationPageComponent, SelectOrCreateAFieldPageComponent],
  imports: [
    SharedModule,
    RouterModule,
    DashboardManageComponentsModule
  ],
  exports: [ManageDataPageComponent, SelectOrCreateAFieldPageComponent]
})
export class DashboardManagePagesModule { }
