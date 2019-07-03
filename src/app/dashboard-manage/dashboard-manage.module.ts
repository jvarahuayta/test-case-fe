import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardManageRoutingModule } from './dashboard-manage-routing.module';
import { DashboardManagePagesModule } from './pages/dashboard-manage-pages.module';
import { DashboardManageComponent } from './dashboard-manage.component';
import { FieldsRepository } from './repositories/fields.repository';
import { ManageFieldsService } from './services/manage-fields.service';
import { FieldTypesRepository } from './repositories/field-types.repository';

@NgModule({
  declarations: [DashboardManageComponent],
  imports: [
    SharedModule,
    DashboardManagePagesModule,
    DashboardManageRoutingModule
  ],
  providers: [
    FieldsRepository,
    FieldTypesRepository,
    ManageFieldsService
  ]
})
export class DashboardManageModule { }
