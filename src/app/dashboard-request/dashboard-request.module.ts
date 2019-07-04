import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardRequestRoutingModule } from './dashboard-request-routing.module';
import { DashboardRequestComponent } from './dashboard-request.component';
import { DashboardRequestCoreModule } from './core/dashboard-request-core.module';
import { DashboardRequestPagesModule } from './pages/dashboard-request-pages.module';

@NgModule({
  declarations: [DashboardRequestComponent],
  imports: [
    RouterModule,
    DashboardRequestPagesModule,
    DashboardRequestCoreModule,
    DashboardRequestRoutingModule
  ]
})
export class DashboardRequestModule { }
