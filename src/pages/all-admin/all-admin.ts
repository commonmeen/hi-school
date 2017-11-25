import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AllAdminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
