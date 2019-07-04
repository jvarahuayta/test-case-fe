import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDataPageComponent } from './pages/manage-data-page/manage-data-page.component';
import { DashboardManageComponent } from './dashboard-manage.component';
import { FieldInformationPageComponent } from './pages/field-information-page/field-information-page.component';
import { GetAfRecordByIdResolver } from '../core/resolvers/get-af-record-by-id.resolver';
import { SelectOrCreateAFieldPageComponent } from './pages/select-or-create-a-field-page/select-or-create-a-field-page.component';
import { FieldsRepository } from './core/repositories/fields.repository';

const routes: Routes = [
  {
    path: '',
    component: DashboardManageComponent,
    children: [
      {
        path: '',
        component: ManageDataPageComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SelectOrCreateAFieldPageComponent
          },
          {
            path: 'create',
            component: FieldInformationPageComponent,
            data: {
              mode: 'edit'
            }
          },
          {
            path: ':id',
            component: FieldInformationPageComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              afRecord: GetAfRecordByIdResolver
            },
            data: {
              $$getAfRecord: {
                repository: FieldsRepository,
                redirectToOnNotFound: '/dashboard/manage'
              }
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardManageRoutingModule { }
