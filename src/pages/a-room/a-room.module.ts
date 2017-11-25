import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPage } from './a-room';

@NgModule({
  declarations: [
    RoomPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomPage),
  ],
})
export class ARoomPageModule {}
