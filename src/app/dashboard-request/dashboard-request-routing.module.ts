import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRequestComponent } from './dashboard-request.component';
import { ListRequestsPageComponent } from './pages/list-requests-page/list-requests-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRequestComponent,
    children: [
      {
        path: '',
        component: ListRequestsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRequestRoutingModule { }
