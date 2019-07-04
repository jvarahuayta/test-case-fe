import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRequestStatusComponent } from './tabs-request-status/tabs-request-status.component';
import { FilteredRequestListComponent } from './filtered-request-list/filtered-request-list.component';

@NgModule({
  declarations: [TabsRequestStatusComponent, FilteredRequestListComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsRequestStatusComponent, FilteredRequestListComponent]
})
export class DashboardRequestComponentsModule { }
