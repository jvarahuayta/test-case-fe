import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredRequestListComponent } from './filtered-request-list.component';
import { RequestsService } from '../../core/services/requests.service';
import { of, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../core/models/request.model';
import { RequestStatus } from '../../core/models/request-status.model';
import { first } from 'rxjs/operators';

const requestsServiceStub: Partial<RequestsService> = {
  getAllRequests: () => {
    return of([
      new Request({ statusCode: 'PENDING' }),
      new Request({ statusCode: 'DENIED' }),
      new Request({ statusCode: 'APPROVED' })
    ]);
  },
  getAllRequestStatus: () => {
    return of([
      new RequestStatus({ code: 'PENDING' }),
      new RequestStatus({ code: 'DENIED' }),
      new RequestStatus({ code: 'APPROVED' })
    ]);
  }
}

class ActivatedRouteStub{
  queryParamsSubject = new BehaviorSubject({});
  get queryParams() {
    return this.queryParamsSubject.asObservable();
  }
  setQueryParams(queryParams){
    this.queryParamsSubject.next(queryParams);
  }
}

describe('FilteredRequestListComponent', () => {
  let component: FilteredRequestListComponent;
  let fixture: ComponentFixture<FilteredRequestListComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredRequestListComponent ],
      providers: [
        { provide: RequestsService, useValue: requestsServiceStub },
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredRequestListComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter requets in queryparams change', async () => {
    activatedRoute.setQueryParams({ status: 'PENDING' });
    let requests = await component.$requests.pipe( first() ).toPromise();
    expect( requests.every( req => req.statusCode === 'PENDING' ) ).toBe(true);
    activatedRoute.setQueryParams({ status: 'DENIED' });
    requests = await component.$requests.pipe( first() ).toPromise();
    expect( requests.every( req => req.statusCode === 'DENIED' ) ).toBe(true);
  });
  
});
