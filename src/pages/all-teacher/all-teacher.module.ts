import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTeacherPage } from './all-teacher';

@NgModule({
  declarations: [
    AllTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTeacherPage),
  ]
})
export class AllTeacherPageModule {}
