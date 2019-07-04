import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredRequestListComponent } from './filtered-request-list.component';

describe('FilteredRequestListComponent', () => {
  let component: FilteredRequestListComponent;
  let fixture: ComponentFixture<FilteredRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
