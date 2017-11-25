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
  c_no: string;
  c_name: string;
  c_percent: string;
  s_no: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public fireBase: AngularFireDatabase) {

    this.categorys = fireBase.list('/trans');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryDetailPage');
  }

  addCategory(){
    this.navCtrl.push(TCategoryAddPage);
  }

}
