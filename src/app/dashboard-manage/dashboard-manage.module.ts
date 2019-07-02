import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardManageRoutingModule } from './dashboard-manage-routing.module';
import { DashboardManagePagesModule } from './pages/dashboard-manage-pages.module';
import { DashboardManageComponent } from './dashboard-manage.component';

@NgModule({
  declarations: [DashboardManageComponent],
  imports: [
    SharedModule,
    DashboardManagePagesModule,
    DashboardManageRoutingModule
  ]
})
export class DashboardManageModule { }
