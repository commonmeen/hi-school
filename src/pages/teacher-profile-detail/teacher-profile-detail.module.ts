import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherProfileDetailPage } from './teacher-profile-detail';

@NgModule({
  declarations: [
    TeacherProfileDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherProfileDetailPage),
  ],
})
export class TeacherProfileDetailPageModule {}
