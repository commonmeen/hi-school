import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TCategoryAddPage } from '../t-category-add/t-category-add';
import { config } from '../../app/app.module';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';

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
    public modalCtrl: ModalController,
    public alert:AlertController) {

    this.subject = this.navParams.data;
    this.listCategory = this.provideData.getCatBySub(this.subject.s_no);

    provideData.getCategory().subscribe(data => {
      this.getCategory = data;
    });

    fireBase.list('/Teach').subscribe(data => {
      this.teachs = data;
      for (let i = this.teachs.length - 1; i >= 0; i--) {
        if (this.teachs[i].s_no == this.subject.s_no) {
          fireBase.list('/Room').subscribe(data => {
            this.rooms = data;
            for (let j = this.rooms.length - 1; j >= 0; j--) {
              if (this.rooms[j].r_no == this.teachs[i].r_no) {
                this.roomDetail.push(this.rooms[j]);
              }
            }
          });
        }
      }
    });

    setTimeout(() => {
      for (let k = this.listCategory.length - 1; k >= 0; k--) {
        this.totalPercent += parseInt(this.listCategory[k].c_percent);
      }
      this.balancePercent = 100 - this.totalPercent;
    }, 1000);
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
        }
        this.balancePercent = 100 - this.totalPercent;
      }, 1000);
    })
  }

  deleteCategory(c) {
    let confirm = this.alert.create({
      title: 'คุณต้องการลบหมวดหมู่นี้?',
      message: 'ถ้าคุณลบการบ้านและคะแนนในหมวดหมู่นี้จะถูกลบด้วย',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            let cnoDelete ;
            for (var i = this.getCategory.length - 1; i >= 0; i--) {
              if (this.getCategory[i].c_no == c) {
                this.categoryDetail = this.getCategory[i];
                cnoDelete = this.categoryDetail.c_no ;
                this.key = this.categoryDetail.$key;
                for (var j = this.listCategory.length - 1; j >= 0; j--) {
                  if (this.listCategory[j].c_no == this.categoryDetail.c_no) {
                    this.totalPercent -= parseInt(this.listCategory[j].c_percent);
                    this.balancePercent = 100 - this.totalPercent;
                    this.listCategory.splice(j, 1);
                    break;
                  }
                }
              }
            }
            this.provideData.deleteCategory(this.key,cnoDelete);
          }
        }
      ]
    });
    confirm.present();
  }
}
