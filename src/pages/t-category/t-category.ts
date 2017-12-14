import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-t-category',
  templateUrl: 't-category.html',
})
export class CategoryPage {
  subjects: any[] = []
  subjectDetial: any[] = [];
  teachs: any[] = []
  teachDetail: any;
  teachers: any[] = [];
  teacherDetail: any;
  userId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public provideData: DataProvider,
    public storage: Storage,
    public loadingCtrl: LoadingController) {

    this.teachDetail = this.navParams.data;

    provideData.getTeach().subscribe(data => {
      this.teachs = data;
    });
    provideData.getSubject().subscribe(data => {
      this.subjects = data;
    });
    this.storage.ready().then(() => this.storage.get('UserId').then((data) => {
      this.userId = data;
    }));

    this.presentLoading();

    setTimeout(() => {
      provideData.getTeachers().subscribe(data => {
        this.teachers = data;
      });

      for (let i = this.teachers.length - 1; i >= 0; i--) {                         //find teacher from user id.
        if (this.teachers[i].t_no == this.userId) {
          this.teacherDetail = this.teachers[i];
          break;
        }
      }

      for (let j = this.teachs.length - 1; j >= 0; j--) {                              //join teachs and teacher detail by t_no
        if (this.teachs[j].t_no == this.teacherDetail.t_no) {
          this.teachDetail = this.teachs[j];
          for (let k = this.subjects.length - 1; k >= 0; k--) {                           //join subjects and teach detail by s_no
            if (this.subjects[k].s_no == this.teachDetail.s_no) {
              if (this.subjectDetial.indexOf(this.subjects[k])== -1){
              this.subjectDetial.push(this.subjects[k]);
              }
              break;
            }
          }
        }
      }
    }, 1500);

  }

  moveToCategoryDetail(sub) {
    this.navCtrl.push(TCategoryDetailPage, sub);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loader.present();
  }
}
