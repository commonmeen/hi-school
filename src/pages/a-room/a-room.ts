import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { RoomDetailPage } from '../a-room-detail/a-room-detail';
/**
 * Generated class for the ARoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-room',
  templateUrl: 'a-room.html',
})
export class RoomPage {
 rooms : any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireBase: AngularFireDatabase) {
  	fireBase.list('/Room').subscribe(data=>{
          this.rooms=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ARoomPage');
  }

  moveToRoomDetail(room:any){
  	this.navCtrl.push(RoomDetailPage,room);
  }
}
