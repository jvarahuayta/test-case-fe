import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavService } from '../../services/nav.service';
import { of } from 'rxjs';
import { NavItem } from '../../models/nav-item.model';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

const navServiceStub: Partial<NavService> = {
  getNavMenu: () => {
    return of([
      new NavItem({ name: 'Manage', route: '/dashboard/manage' }),
      new NavItem({ name: 'Requests', route: '/dashboard/requests' })
    ]);
  }
}

@Component({
  selector: 'app-stub-cmp',
  template: ''
})
class StubComponent{}

const stubRoutes: Routes = [
  { path: 'dashboard/manage', component: StubComponent },
  { path: 'dashboard/requests', component: StubComponent },
]

describe('NavComponent', () => {
  let component: NavComponent;
  let debugElm: DebugElement;
  let fixture: ComponentFixture<NavComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent, StubComponent ],
      imports: [ RouterTestingModule.withRoutes( stubRoutes ) ],
      providers: [
        { provide: NavService, useValue: navServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    debugElm = fixture.debugElement;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on nav-item click', async () => {
    let navItemElm = debugElm.query( By.css('li:first-child') );
    navItemElm.triggerEventHandler('click', null);
    await fixture.whenStable();
    expect(location.path()).toBe('/dashboard/manage');
  });
});
