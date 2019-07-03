import { Component, OnInit } from '@angular/core';
import { ManageFieldsService } from '../../services/manage-fields.service';
import { Observable } from 'rxjs';
import { Field } from '../../core/models/field.model';

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
