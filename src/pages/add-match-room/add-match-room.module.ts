import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatchRoomPage } from './add-match-room';

@NgModule({
  declarations: [
    AddMatchRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatchRoomPage),
  ],
})
export class AddMatchRoomPageModule {}
