import { Component } from '@angular/core';
import { IonicPage, NavController , NavParams} from 'ionic-angular';

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
