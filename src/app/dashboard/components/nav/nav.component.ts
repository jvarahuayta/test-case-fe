import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Observable, of } from 'rxjs';
import { NavItem } from '../../models/nav-item.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  $navItems: Observable<NavItem[]>;

  constructor(private navSvc: NavService) {
    this.$navItems = this.navSvc.getNavMenu();
  }

  ngOnInit() {
  }

}
