import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';
import { GetAfRecordByIdResolver } from './resolvers/get-af-record-by-id.resolver';
import { ToastService } from './services/toast.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFirestoreModule
  ],
  providers: [
    GetAfRecordByIdResolver,
    ToastService
  ]
})
export class CoreModule { }
