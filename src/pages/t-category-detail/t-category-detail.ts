import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ItemSliding,AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database' ;


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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public fireBase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryDetailPage');
  }

  addCategory(): void {
	  let alert = this.alertCtrl.create({
		title: 'Title',
		inputs: [
		  {
			name: 'title',
			placeholder: 'title'
		  },
		  
		],
		buttons: [
		  {
			text: 'OK',
			role: 'OK',
			handler: data => {
			  console.log('OK clicked');
			}
		  },
		  
		]
	  });
    alert.present();
    // this.fireBase.
  }

}
