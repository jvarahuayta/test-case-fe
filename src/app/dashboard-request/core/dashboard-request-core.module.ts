import { NgModule } from '@angular/core'
import { RequestsRepository } from './repositories/requests.repository';
import { RequestStatusRepository } from './repositories/request-status.repository';
import { RequestsService } from './services/requests.service';

@NgModule({
  providers: [
    RequestsRepository,
    RequestStatusRepository,
    RequestsService,
  ]
})
export class DashboardRequestCoreModule { }
