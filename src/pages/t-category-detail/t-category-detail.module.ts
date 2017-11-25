import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TCategoryDetailPage } from './t-category-detail';

@NgModule({
  declarations: [
    TCategoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TCategoryDetailPage),
  ],
})
export class TCategoryDetailPageModule {}
