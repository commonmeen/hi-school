import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddTeacherPage } from './admin-add-teacher';

@NgModule({
  declarations: [
    AdminAddTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddTeacherPage),
  ],
})
export class AdminAddTeacherPageModule {}
