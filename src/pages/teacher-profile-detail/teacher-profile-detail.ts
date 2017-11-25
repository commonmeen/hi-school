import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabase } from 'angularfire2/database' ;
/**
 * Generated class for the TeacherProfileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-profile-detail',
  templateUrl: 'teacher-profile-detail.html',
})
export class TeacherProfileDetailPage {
  teachers : any[];
  teacherDetail : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fireBase: AngularFireDatabase) {
    
        fireBase.list('/Teacher').subscribe(data =>{
          this.teachers=data;
        })
      this.teacherDetail = this.navParams.data;
      
  }

  

}
