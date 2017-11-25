import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchPage } from './a-match';

@NgModule({
  declarations: [
    MatchPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchPage),
  ],
})
export class AMatchPageModule {}
