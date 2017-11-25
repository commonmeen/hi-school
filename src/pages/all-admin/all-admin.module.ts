import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAdminPage } from './all-admin';

@NgModule({
  declarations: [
    AllAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AllAdminPage),
  ]
})
export class AllAdminPageModule {}
