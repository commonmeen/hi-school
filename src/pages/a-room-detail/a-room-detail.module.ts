import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomDetailPage } from './a-room-detail';

@NgModule({
  declarations: [
    RoomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomDetailPage),
  ],
})
export class ARoomDetailPageModule {}
