import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddStudentPage } from './admin-add-student';

@NgModule({
  declarations: [
    AdminAddStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddStudentPage),
  ],
})
export class AdminAddStudentPageModule {}
