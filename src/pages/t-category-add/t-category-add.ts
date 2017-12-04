import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the TCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-category-add',
  templateUrl: 't-category-add.html',
})
export class TCategoryAddPage {
  addForm: FormGroup;
  connectFirebase: FirebaseListObservable<any[]>;
  categoryDetail:any;
  c_no: number;
  name: string;
  percent: number;
  s_no: number;
  getc_no: any[] = [];
  cno: number ;
  params : any ;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public builder: FormBuilder,
    public fireBase: AngularFireDatabase,
    private toastCtrl: ToastController,
    public provideData: DataProvider) {

      this.params = this.navParams.data ;
    this.s_no = this.params.s_no ;
    console.log(this.s_no);
    this.connectFirebase = this.fireBase.list('/Category');
    this.addForm = this.builder.group({
      'name': ['', Validators.required],
      'percent': ['', Validators.required]
    })
    fireBase.list('/Category').subscribe(data => {
      this.getc_no = data;
      console.log('Cno', this.getc_no.length);
      this.cno = parseInt(this.getc_no[this.getc_no.length - 1].c_no);
      this.cno += 1;
    }
    );

    this.categoryDetail = this.params.list ;
    console.log("hellooooooooooooooooooooooooooooooooooooooooooooooo",this.categoryDetail);
    




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryAddPage');
  }

  addCat() {
    
    if(this.categoryDetail.$key ==null ){
      let newCat: any = { c_no: this.cno, c_name: this.name, c_percent: this.percent, s_no: this.s_no }
      this.connectFirebase.push(newCat);
      this.navCtrl.pop();  

      let toast = this.toastCtrl.create({
        message: 'เพิ่มหมวดหมู่สำเร็จ!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
  
    }else {
      console.log("keyyyyyyyyyyyyyyyyyyyyy",this.categoryDetail.$key);
      let newCat: any = { c_no: this.categoryDetail.c_no, c_name: this.name, c_percent: this.percent, s_no: this.s_no }
      console.log("นิววววววว",newCat);
      let k = this.categoryDetail.$key ;
      this.provideData.updateCategory(k,newCat);
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
