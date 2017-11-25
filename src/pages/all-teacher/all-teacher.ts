import { Component } from '@angular/core';
import { IonicPage, NavController , NavParams} from 'ionic-angular';
//import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
/**
 * Generated class for the AllTeacherPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-teacher',
  templateUrl: 'all-teacher.html'
})
export class AllTeacherPage {
	

  tHomeRoot = 'TeacherProfilePage'
  tTaskRoot = 'TaskPage'
  tCategoryRoot = 'CategoryPage'


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	}
}
