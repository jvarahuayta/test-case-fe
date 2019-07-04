import { NgModule } from '@angular/core';
import { FieldsRepository } from './repositories/fields.repository';
import { FieldTypesRepository } from './repositories/field-types.repository';
import { ManageFieldsService } from './services/manage-fields.service';

@NgModule({
  providers: [
    FieldsRepository,
    FieldTypesRepository,
    ManageFieldsService
  ]
})
export class DashboardManageCoreModule { }
