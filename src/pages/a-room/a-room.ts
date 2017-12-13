import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { RoomDetailPage } from '../a-room-detail/a-room-detail';
import { AlertController } from 'ionic-angular';

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

  moveToRoomDetail(room:any){
  	this.navCtrl.push(RoomDetailPage,room);
  }
  
  addRoom(): void {
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
          handler: data => {}
        },
        {
          text: 'Save',
          handler: data => {
            newRoom = data.roomName ;
            let rno : number ;
            let status = 0 ;
            if (newRoom != '' && newRoom != null) {
              for (var i = this.rooms.length - 1; i >= 0; i--) {
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
