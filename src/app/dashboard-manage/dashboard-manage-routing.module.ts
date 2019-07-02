import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDataPageComponent } from './pages/manage-data-page/manage-data-page.component';
import { DashboardManageComponent } from './dashboard-manage.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardManageComponent,
    children: [
      {
        path: '',
        component: ManageDataPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardManageRoutingModule { }
