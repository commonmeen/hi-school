import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TCategoryAddPage } from '../t-category-add/t-category-add';


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
  categoryDetail:any;
  c_no: string;
  c_name: string;
  c_percent: string;
  subject: any;
  key:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public fireBase: AngularFireDatabase) {

    this.categorys = fireBase.list('/Category');
    fireBase.list('/Category').subscribe(data => {
    this.getCategory = data;
      console.log("test", this.getCategory);
    });
    console.log("123132", this.getCategory);

    this.subject = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryDetailPage');
  }

  addCategory() {
    this.navCtrl.push(TCategoryAddPage);
  }
  deleteCategory(c) {
    for (var i = this.getCategory.length - 1; i >= 0; i--) {
      if (this.getCategory[i].c_no == c) {
        this.categoryDetail = this.getCategory[i];
        console.log(this.categoryDetail.$key);
        this.key=this.categoryDetail.$key;

      }
      console.log(c,"123");
    }
    this.categorys.remove(this.key);
  }




}
