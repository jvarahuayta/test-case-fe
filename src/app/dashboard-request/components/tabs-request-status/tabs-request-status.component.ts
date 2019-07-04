import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestStatus } from '../../core/models/request-status.model';
import { RequestsService } from '../../core/services/requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from 'src/app/shared/helpers/observable.helper';

@Component({
  selector: 'app-tabs-request-status',
  templateUrl: './tabs-request-status.component.html',
  styleUrls: ['./tabs-request-status.component.scss']
})
export class TabsRequestStatusComponent implements OnInit {

  $requestStatus: Observable<RequestStatus[]>
  selectedStatusCode: string;
  
  constructor( private requestsSvc: RequestsService, private route: ActivatedRoute,
  private router: Router ) {
    this.$requestStatus = this.requestsSvc.getAllRequestStatus();
    this.route.queryParams
    .pipe(
      takeUntil(componentDestroyed(this))
    )
    .subscribe( queryParams => {
      this.selectedStatusCode = queryParams.status;
    });
  }

  ngOnInit() {
  }

  selectStatus(statusCode: string){
    this.router.navigate(['./'],{ relativeTo: this.route, queryParams: { status: statusCode } })
  }

}
