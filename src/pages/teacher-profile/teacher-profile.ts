import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherProfileDetailPage } from '../teacher-profile-detail/teacher-profile-detail';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database' ;
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

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
  teacherDetail :any = {t_name:''};
  userId:number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fireBase: AngularFireDatabase,
              public storage: Storage,public loadingCtrl: LoadingController) {
 //   console.log(navParams.data);
     this.storage.ready().then(() => this.storage.get('UserId').then((data) => {
      this.userId = data;
    }) );
     this.presentLoading();
     setTimeout(()=>{fireBase.list('/Teacher').subscribe(data=>{
          this.teachers=data;
      });
      this.findDataTeacher();
      console.log(this.teacherDetail + 'detail con');}, 3000);
     this.teacherDetail.t_name = 'wait' ;
      console.log(this.teacherDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherProfilePage');
  }
  moveToProfileDetail(){
    this.navCtrl.push(TeacherProfileDetailPage);
  }

  findDataTeacher(){
    console.log(this.userId + 'userID3');
    for(var i = this.teachers.length - 1; i >= 0; i--){
      console.log(i);
      console.log(this.teachers[i].t_no);
      if(this.teachers[i].t_no==this.userId){

        this.teacherDetail=this.teachers[i];
        console.log(this.teacherDetail);
        break;
      }
    }
  }

  getUserId(){
    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  delay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }
}
