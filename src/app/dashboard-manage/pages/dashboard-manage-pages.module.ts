import { NgModule } from '@angular/core';

import { ManageDataPageComponent } from './manage-data-page/manage-data-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardManageComponentsModule } from '../components/dashboard-manage-components.module';

@NgModule({
  declarations: [ManageDataPageComponent],
  imports: [
    SharedModule,
    DashboardManageComponentsModule
  ],
  exports: [ManageDataPageComponent]
})
export class DashboardManagePagesModule { }
