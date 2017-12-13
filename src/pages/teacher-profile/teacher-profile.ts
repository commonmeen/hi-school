import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TeacherProfileDetailPage } from '../teacher-profile-detail/teacher-profile-detail';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { LoadingController,MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoryPage } from '../t-category/t-category';
import { THelpPage } from '../t-help/t-help';
import { AboutUsPage } from '../about-us/about-us' ;

@IonicPage()
@Component({
  selector: 'page-teacher-profile',
  templateUrl: 'teacher-profile.html',
})
export class TeacherProfilePage {
  teachers: any[] = [];
  teacherDetail: any = { t_name: '' };
  userId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public storage: Storage, 
    public loadingCtrl: LoadingController,
    public app: App,
    public menuCtrl: MenuController) {
    
    setTimeout(() => {
      this.storage.get('UserId').then((data) => {
        this.userId = data;
      });
    }, 1000);

    fireBase.list('/Teacher').subscribe(data => {
      this.teachers = data;
    });
    
    setTimeout(() => {
      this.findDataTeacher();
    }, 1100);
  }

  ionViewDidLoad() {

  }

  moveToProfileDetail() {
    this.navCtrl.push(TeacherProfileDetailPage, this.teacherDetail);
  }

  findDataTeacher() {
    for (var i = this.teachers.length - 1; i >= 0; i--) {
      if (this.teachers[i].t_no == this.userId) {
        this.teacherDetail = this.teachers[i];
        break;
      }
    }
  }

  logout() {
    this.storage.clear();
    console.log(this.app.getRootNav());
    //this.app.getRootNav().popToRoot();
    this.app.getRootNav().setRoot(HomePage);
    //this.navCtrl.push(HomePage);
    //this.app.getRootNavs[0].popToRoot();
    //this.app.getRootNav().popToRoot();

  }
  moveToHelp(){
    this.navCtrl.push(THelpPage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  moveToAboutUs(){
    this.navCtrl.push(AboutUsPage);
  }
}
