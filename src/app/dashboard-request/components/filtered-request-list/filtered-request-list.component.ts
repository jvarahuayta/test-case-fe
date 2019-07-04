import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Request } from '../../core/models/request.model';
import { RequestsService } from '../../core/services/requests.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, flatMap, map, filter } from 'rxjs/operators';
import { componentDestroyed } from 'src/app/shared/helpers/observable.helper';

@Component({
  selector: 'app-filtered-request-list',
  templateUrl: './filtered-request-list.component.html',
  styleUrls: ['./filtered-request-list.component.scss']
})
export class FilteredRequestListComponent implements OnInit {

  $requests: Observable<Request[]>;
  selectedStatus: string;

  constructor(private requestsSvc: RequestsService, private route: ActivatedRoute,) {
    const $afRequests = this.requestsSvc.getAllRequests();
    const $afRequestStatus = this.requestsSvc.getAllRequestStatus();
    const $routeQueryParams = this.route.queryParams;
    this.$requests = combineLatest(
      $afRequests,
      $routeQueryParams,
      $afRequestStatus
    ).pipe(
      filter( values => values.every( val => !!val ) ),
      map( ([ requests, queryParams, requestStatus ]) => {
        this.selectedStatus = queryParams.status;
        return requests
        .filter( req => !queryParams.status || req.statusCode === queryParams.status )
        .map( req => {
          req.status = requestStatus.find( status => status.code === req.statusCode );
          return req;
        })
      })
    );
  }

  ngOnInit() {
  }

}
