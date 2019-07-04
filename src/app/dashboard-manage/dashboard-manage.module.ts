import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardManageRoutingModule } from './dashboard-manage-routing.module';
import { DashboardManagePagesModule } from './pages/dashboard-manage-pages.module';
import { DashboardManageComponent } from './dashboard-manage.component';
import { DashboardManageCoreModule } from './core/dashboard-manage-core.module';

@NgModule({
  declarations: [DashboardManageComponent],
  imports: [
    SharedModule,
    DashboardManageCoreModule,
    DashboardManagePagesModule,
    DashboardManageRoutingModule
  ],
  providers: [
  ]
})
export class DashboardManageModule { }
