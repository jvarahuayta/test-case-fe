import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        NavComponent
    ],
    exports: [
        HeaderComponent,
        NavComponent
    ]
})
export class DashboardComponentsModule{

}