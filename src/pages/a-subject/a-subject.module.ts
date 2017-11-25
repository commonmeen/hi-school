import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectPage } from './a-subject';

@NgModule({
  declarations: [
    SubjectPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectPage),
  ],
})
export class ASubjectPageModule {}
