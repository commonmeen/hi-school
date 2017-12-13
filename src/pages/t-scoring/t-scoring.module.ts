import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoringPage } from './t-scoring';

@NgModule({
  declarations: [
    ScoringPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoringPage),
  ],
})
export class TScoringPageModule {}
