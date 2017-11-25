import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddUserPage } from './admin-add-user';

@NgModule({
  declarations: [
    AdminAddUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddUserPage),
  ],
})
export class AdminAddUserPageModule {}
