import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRequestStatusComponent } from './tabs-request-status.component';
import { RequestsService } from '../../core/services/requests.service';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { RequestStatus } from '../../core/models/request-status.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const requestsServiceStub: Partial<RequestsService> = {
  getAllRequestStatus: () => {
    return of([
      new RequestStatus({ code: 'PENDING', name: 'Pending' })
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

describe('TabsRequestStatusComponent', () => {
  let component: TabsRequestStatusComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TabsRequestStatusComponent>;
  let routerNavigateSpy: jasmine.Spy;
  let selectStatusSpy: jasmine.Spy;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRequestStatusComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: RequestsService, useValue: requestsServiceStub },
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRequestStatusComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    activatedRoute = TestBed.get(ActivatedRoute);
    routerNavigateSpy = spyOn( TestBed.get(Router), 'navigate' );
    // selectStatusSpy = spyOn( component, 'selectStatus' );
    // component.selectStatus = component.selectStatus.bind(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger router navigate on tab click', () => {
    debugElement.query( By.css('li') ).triggerEventHandler('click', null);
    expect(routerNavigateSpy).toHaveBeenCalled();
  });

  it('should change queryparams on tab click', async () => {
    const PENDING_CODE = 'PENDING'; 
    debugElement.query( By.css(`li[data-status-code=${PENDING_CODE}]`) ).triggerEventHandler('click', null);
    const { queryParams } = routerNavigateSpy.calls.first().args[1];
    activatedRoute.setQueryParams({ status: queryParams.status });
    fixture.detectChanges();
    expect(component.selectedStatusCode).toEqual(PENDING_CODE);
  });

});
