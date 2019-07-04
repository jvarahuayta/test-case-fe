import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../../core/models/field.model';
import { ManageFieldsService } from '../../core/services/manage-fields.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {

  $fields: Observable<Field[]>

  constructor( private manageFieldsSvc: ManageFieldsService ) {
    this.$fields = this.manageFieldsSvc.getFields();
  }

  ngOnInit() {
  }

}
