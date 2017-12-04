import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the TCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    public storage: Storage) {


    this.teachDetail = this.navParams.data;
    console.log("teacher detail", this.teachDetail);

    provideData.getTeach().subscribe(data => {
      this.teachs = data;

    })
    provideData.getSubject().subscribe(data => {
      this.subjects = data;
    })

    this.storage.ready().then(() => this.storage.get('UserId').then((data) => {
      this.userId = data;
      console.log("11111111111111111111111111111", this.userId);
    }));

    setTimeout(() => {
      provideData.getTeachers().subscribe(data => {
        this.teachers = data;
      })

      for (let i = this.teachers.length - 1; i >= 0; i--) {                         //find teacher from user id.
        if (this.teachers[i].t_no == this.userId) {
          this.teacherDetail = this.teachers[i];
          console.log("66666666666666666666666666666666666666", this.teacherDetail);
          console.log("777777777777777777777777,", this.teachs);
          break;
        }
      }

      for (let j = this.teachs.length - 1; j >= 0; j--) {                              //join teachs and teacher detail by t_no
        if (this.teachs[j].t_no == this.teacherDetail.t_no) {
          this.teachDetail = this.teachs[j];
          console.log("ตรงกันแล้วจ้าาาาาาาา", this.teachDetail.s_no);
          for (let k = this.subjects.length - 1; k >= 0; k--) {                           //join subjects and teach detail by s_no
            console.log("เข้า loop");
            if (this.subjects[k].s_no == this.teachDetail.s_no) {
              console.log("เข้า if");
              this.subjectDetial.push(this.subjects[k]);
              console.log("Yeahhhhhhhhhhhhhhh", this.subjectDetial);
              break;
            }
          }

        }
      }

    }, 3000);




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryPage');
  }

  moveToCategoryDetail(sub) {
    this.navCtrl.push(TCategoryDetailPage, sub);
  }



}
