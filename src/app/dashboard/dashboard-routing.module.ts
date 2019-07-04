import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'manage',
        loadChildren: 'src/app/dashboard-manage/dashboard-manage.module#DashboardManageModule'
      },
      {
        path: 'requests',
        loadChildren: 'src/app/dashboard-request/dashboard-request.module#DashboardRequestModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
