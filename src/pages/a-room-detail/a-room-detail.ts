import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AddToRoomPage } from '../add-to-room/add-to-room' ;
import { ModalController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-a-room-detail',
  templateUrl: 'a-room-detail.html', 
})

export class RoomDetailPage {
	room : any ;
  allTeacher : any[] = [] ;
  allStudent : any[] = [] ;
  studentThisRoom : any[] = [] ;
  teacher1 : any ;
  teacher2 : any ; 
  teacherCount : number = 0 ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public data:DataProvider,
    public modalCtrl: ModalController){

  	this.room = navParams.data ;
    this.studentThisRoom = this.data.getStudentsByRoom(this.room.r_no);

    data.getTeachers().subscribe(data=>{
      this.allTeacher = data;
      this.teacher1 = undefined;
      this.teacher2 = undefined;
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
        if(this.allTeacher[i].r_no == this.room.r_no){
          if(this.teacher1 != null){
            this.teacher2 = this.allTeacher[i];
            this.teacherCount = 2 ;
          } else {
            this.teacher1 = this.allTeacher[i] ;
            this.teacherCount = 1 ;
          }
        }
      }
    });
  }

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  addTeacherToRoom(){
    let t : any[] = [this.teacher1,this.teacher2];
    let a : any = {status:1 , teacherCount:this.teacherCount, teacherInRoom:t,room:this.room};
     this.navCtrl.push(AddToRoomPage,a);
  }

  addStudentToRoom(){
    let a : any = {status:2 , studentInRoom:this.studentThisRoom,room:this.room};
    let modal = this.modalCtrl.create(AddToRoomPage,a);
    modal.present();
    modal.onDidDismiss(data => {
      this.studentThisRoom = this.data.getStudentsByRoom(this.room.r_no);
    });
  }
} 
