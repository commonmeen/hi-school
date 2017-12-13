import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { RoomDetailPage } from '../a-room-detail/a-room-detail';
// import { DataProvider } from '../../providers/data/data' ;
import { AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fireBase: AngularFireDatabase, 
    public alertCtrl: AlertController) {
  	fireBase.list("/Room").subscribe(data=>{
          this.rooms=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ARoomPage');
  }

  moveToRoomDetail(room:any){
  	this.navCtrl.push(RoomDetailPage,room);
  }
  
  addRoom(): void {
     // let newRoom: string = prompt("New Room") ;
     let newRoom = '';
     let prompt = this.alertCtrl.create({
      title: 'สร้างห้องใหม่',
      message: "กรุณาใส่ชื่อห้อง",
      inputs: [
        {
          name: 'roomName',
          placeholder: 'Ex. ป.1/1'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            newRoom = data.roomName ;
            let rno : number ;
            let status = 0 ;
            if (newRoom != '' && newRoom != null) {
              for (var i = this.rooms.length - 1; i >= 0; i--) {
                console.log("roomloop");
                if (newRoom == this.rooms[i].r_name){
                  let alert = this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: newRoom + " มีอยู่ในรายการแล้ว",
                    buttons: ['OK']
                  });
                  alert.present();
                  status = 1 ;
                  console.log()
                  break ;
                }
              }
              if (status == 0) {
                rno = parseInt(this.rooms[this.rooms.length - 1].r_no);
                rno += 1;
                let add:any = {r_name:newRoom,r_no:rno,stdCount:0};
                this.fireBase.list("/Room").push(add);
              }
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
