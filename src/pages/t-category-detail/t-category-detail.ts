import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TCategoryAddPage } from '../t-category-add/t-category-add';
import { config } from '../../app/app.module';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the TCategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-category-detail',
  templateUrl: 't-category-detail.html',
})
export class TCategoryDetailPage {
  categorys: FirebaseListObservable<any[]>;
  getCategory: any[] = [];
  categoryDetail: any;
  listCategory: any[] = [];
  c_no: string;
  c_name: string;
  c_percent: string;
  subject: any;
  key: string;
  teachs: any[] = [];
  rooms: any[] = [];
  roomDetail: any[] = [];
  totalPercent: number = 0;
  balancePercent: number = 100 - this.totalPercent;





  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public fireBase: AngularFireDatabase,
    public provideData: DataProvider,
    public storage: Storage,
    public modalCtrl: ModalController
  ) {

    this.subject = this.navParams.data;
    this.listCategory = this.provideData.getCatBySub(this.subject.s_no);

    provideData.getCategory().subscribe(data => {
      this.getCategory = data;
    });


    fireBase.list('/Teach').subscribe(data => {
      this.teachs = data;
      for (let i = this.teachs.length - 1; i >= 0; i--) {
        if (this.teachs[i].s_no == this.subject.s_no) {
          console.log("ตรงกันแล้วจ้า", this.teachs[i]);
          fireBase.list('/Room').subscribe(data => {
            this.rooms = data;
            for (let j = this.rooms.length - 1; j >= 0; j--) {
              if (this.rooms[j].r_no == this.teachs[i].r_no) {
                console.log("correct");
                this.roomDetail.push(this.rooms[j]);
                console.log("room Detial", this.roomDetail);
              }
            }
          })
        }
      }
    })



    console.log("Toalllllllll", this.listCategory);

    //this.totalPercent = provideData.getPercent(this.subject.s_no);
    console.log("เข้าแล้วววววววววววววววววว", this.totalPercent);

    setTimeout(() => {
      for (let k = this.listCategory.length - 1; k >= 0; k--) {
        this.totalPercent += parseInt(this.listCategory[k].c_percent);
        console.log("Total Percent", this.totalPercent);
      }
      this.balancePercent = 100 - this.totalPercent;
    }, 1000);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryDetailPage');
  }

  addCategory() {
    let a: any = { s_no: this.subject.s_no, list: this.listCategory };
    let modal = this.modalCtrl.create(TCategoryAddPage, a);
    modal.present();
    modal.onDidDismiss(data => {
      this.totalPercent = 0;
      this.balancePercent = 0;
      setTimeout(() => {
        for (let k = this.listCategory.length - 1; k >= 0; k--) {
          this.totalPercent += parseInt(this.listCategory[k].c_percent);
          console.log("Total Percent", this.totalPercent);
        }
        this.balancePercent = 100 - this.totalPercent;
      }, 1000);
    })

  }

  editCategory(listCategory) {
    let listForPush: any = { list: listCategory, s_no: this.subject.s_no };
    let modal = this.modalCtrl.create(TCategoryAddPage, listForPush);
    modal.present();
    modal.onDidDismiss(data => {
      this.totalPercent = 0;
      this.balancePercent = 0;
      setTimeout(() => {
        for (let k = this.listCategory.length - 1; k >= 0; k--) {
          this.totalPercent += parseInt(this.listCategory[k].c_percent);
          console.log("Total Percent", this.totalPercent);
        }
        this.balancePercent = 100 - this.totalPercent;
      }, 1000);
    })
  }

  deleteCategory(c) {

    for (var i = this.getCategory.length - 1; i >= 0; i--) {
      if (this.getCategory[i].c_no == c) {
        this.categoryDetail = this.getCategory[i];
        console.log("มีนหลับไปแล้ว", this.getCategory[i]);
        console.log("มมมม", this.listCategory);
        console.log("ttttt", this.categoryDetail);
        this.key = this.categoryDetail.$key;
        for (var j = this.listCategory.length - 1; j >= 0; j--) {
          if (this.listCategory[j].c_no == this.categoryDetail.c_no) {
            this.totalPercent -= parseInt(this.listCategory[j].c_percent);
            console.log("Total Percent", this.totalPercent);
            this.balancePercent = 100 - this.totalPercent;
            this.listCategory.splice(j, 1);
            break;
          }
        }
        // let index = this.listCategory.indexOf(this.getCategory[i]);
        // console.log("in จ้าา",index);
        // this.listCategory.splice(index,1);
      }

    }
    this.provideData.deleteCategory(this.key);



  }












}
