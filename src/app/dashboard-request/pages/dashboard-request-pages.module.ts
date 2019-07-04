import { NgModule } from '@angular/core';
import { ListRequestsPageComponent } from './list-requests-page/list-requests-page.component';
import { DashboardRequestComponentsModule } from '../components/dashboard-request-components.module';

@NgModule({
  declarations: [ListRequestsPageComponent],
  imports: [
    DashboardRequestComponentsModule
  ],
  exports: [ListRequestsPageComponent]
})
export class DashboardRequestPagesModule { }
