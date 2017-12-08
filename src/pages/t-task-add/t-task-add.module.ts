import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TTaskAddPage } from './t-task-add';

@NgModule({
  declarations: [
    TTaskAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TTaskAddPage),
  ],
})
export class TTaskAddPageModule {}
