import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatchTeacherPage } from './add-match-teacher';

@NgModule({
  declarations: [
    AddMatchTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatchTeacherPage),
  ],
})
export class AddMatchTeacherPageModule {}
