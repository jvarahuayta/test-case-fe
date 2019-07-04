import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRequestStatusComponent } from './tabs-request-status.component';

describe('TabsRequestStatusComponent', () => {
  let component: TabsRequestStatusComponent;
  let fixture: ComponentFixture<TabsRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRequestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
