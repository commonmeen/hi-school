import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminAddTeacherPage } from '../admin-add-teacher/admin-add-teacher';
import { AdminAddStudentPage } from '../admin-add-student/admin-add-student';
/**
 * Generated class for the AdminAddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-add-user',
  templateUrl: 'admin-add-user.html',
})
export class AdminAddUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddUserPage');
  }

  Teacher(){
  	this.navCtrl.push(AdminAddTeacherPage);
  }

  Student(){
  	this.navCtrl.push(AdminAddStudentPage);
  }
}
