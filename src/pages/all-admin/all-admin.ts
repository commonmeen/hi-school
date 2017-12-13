import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-admin',
  templateUrl: 'all-admin.html'
})
export class AllAdminPage {

  adminProfileRoot = 'AdminProfilePage'
  aRoomRoot = 'RoomPage'
  aSubjectRoot = 'SubjectPage'
  aMatchRoot = 'MatchPage' 

  constructor(public navCtrl: NavController) {}

}
