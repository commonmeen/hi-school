import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToRoomPage } from './add-to-room';

@NgModule({
  declarations: [
    AddToRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToRoomPage),
  ],
})
export class AddToRoomPageModule {}
