import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherProfileDetailPage } from '../teacher-profile-detail/teacher-profile-detail';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database' ;

/**
 * Generated class for the TeacherProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-profile',
  templateUrl: 'teacher-profile.html',
})
export class TeacherProfilePage {
  teachers:any[]=[];
  teacherDetail:any;
  userId:number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fireBase: AngularFireDatabase) {
              fireBase.list('/Teacher').subscribe(data=>{
                this.teachers=data
              });
      
    for(var i =0; i==this.teachers.length-1 ; i++){
      if(this.teachers[i].t_no==this.userId){
        this.teacherDetail=this.teachers[i]
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherProfilePage');
  }
  moveToProfileDetail(){
    this.navCtrl.push(TeacherProfileDetailPage);
  }

}
