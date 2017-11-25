import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TCategoryAddPage } from './t-category-add';

@NgModule({
  declarations: [
    TCategoryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TCategoryAddPage),
  ],
})
export class TCategoryAddPageModule {}
