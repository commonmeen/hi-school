import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ARoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-room-detail',
  templateUrl: 'a-room-detail.html',
})
export class RoomDetailPage {
	room : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.room = navParams.data ;
  	console.log(this.room);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ARoomDetailPage');
  }

}
