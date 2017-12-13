import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-t-category-add',
  templateUrl: 't-category-add.html',
})

export class TCategoryAddPage {
  addForm: FormGroup;
  connectFirebase: FirebaseListObservable<any[]>;
  categoryDetail: any;
  categorys: any[] = [];
  c_no: number;
  name: string;
  percent: string;
  s_no: number;
  getc_no: any[] = [];
  cno: number;
  params: any;
  totalPercent: number=0;
  listCategory:any[]=[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public builder: FormBuilder,
    public fireBase: AngularFireDatabase,
    private toastCtrl: ToastController,
    public provideData: DataProvider,
    private alertCtrl: AlertController,
    public storage: Storage) {

    this.params = this.navParams.data;
    this.s_no = this.params.s_no;
    this.listCategory = this.params.list;

    this.connectFirebase = this.fireBase.list('/Category');
    this.addForm = this.builder.group({
      'name': ['', Validators.required],
      'percent': ['', Validators.required]
    });

    fireBase.list('/Category').subscribe(data => {
      this.getc_no = data;
      this.cno = parseInt(this.getc_no[this.getc_no.length - 1].c_no);
      this.cno += 1;
    });

    this.categoryDetail = this.params.list;
    this.totalPercent = this.findTotalPercent();
  }

  addCat() {
    let percent = parseInt(this.percent);
    let checkPercent = this.findTotalPercent() + percent;
    if (checkPercent > 100 || percent <= 0) {
      let alert = this.alertCtrl.create({
        title: 'ไม่สามารถเพิ่มหมวดหมู่งานได้',
        subTitle: 'คะแนนรวมเกิน 100% หรือ มีค่าติดลบ',
        buttons: ['OK']
      });
      alert.present();
    } else {
      if (this.categoryDetail.$key == null) {
        let newCat: any = { c_no: this.cno, c_name: this.name, c_percent: this.percent, s_no: this.s_no }
        this.connectFirebase.push(newCat);
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message: 'เพิ่มหมวดหมู่สำเร็จ!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        let newCat: any = { c_no: this.categoryDetail.c_no, c_name: this.name, c_percent: this.percent, s_no: this.s_no };
        let k = this.categoryDetail.$key;
        this.provideData.updateCategory(k, newCat);
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message: 'แก้ไขหมวดหมู่สำเร็จ!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
  }

  findTotalPercent():number{
    let ttPercent = 0
    for (let k = this.listCategory.length - 1; k >= 0; k--) {
      ttPercent += parseInt(this.listCategory[k].c_percent);
    }
    return ttPercent ;
  }
}
