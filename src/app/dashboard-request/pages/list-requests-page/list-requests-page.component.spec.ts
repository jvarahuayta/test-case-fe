import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestsPageComponent } from './list-requests-page.component';

describe('ListRequestsPageComponent', () => {
  let component: ListRequestsPageComponent;
  let fixture: ComponentFixture<ListRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequestsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
