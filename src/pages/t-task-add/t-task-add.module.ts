import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskAddPage } from './t-task-add';

@NgModule({
  declarations: [
    TaskAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskAddPage),
  ],
})
export class TaskAddPageModule {}
