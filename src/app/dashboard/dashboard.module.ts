import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardPagesModule } from './pages/dashboard-pages.module';
import { NavItemsRepository } from './repositories/nav-items.repository';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    DashboardPagesModule,
    DashboardRoutingModule
  ],
  providers: [
    NavItemsRepository,
    NavService
  ]
})
export class DashboardModule { }
