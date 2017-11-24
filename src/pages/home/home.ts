import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  moveToTeacher(){
    this.navCtrl.push(TeacherProfilePage);
  }
}
