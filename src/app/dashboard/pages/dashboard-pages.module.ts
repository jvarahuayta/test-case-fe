import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardComponentsModule } from '../components/dashboard-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DashboardPageComponent
    ],
    imports: [
        DashboardComponentsModule,
        RouterModule
    ],
    exports: [
        DashboardPageComponent
    ]
})
export class DashboardPagesModule{

}