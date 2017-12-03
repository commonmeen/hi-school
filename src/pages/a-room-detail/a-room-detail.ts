import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AddToRoomPage } from '../add-to-room/add-to-room' ;
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
  allTeacher : any[] = [] ;
  allStudent : any[] = [] ;
  studentThisRoom : any[] = [] ;
  teacher1 : any ;
  teacher2 : any ; 
  teacherCount : number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fireBase: AngularFireDatabase,public loadingCtrl: LoadingController,
    public data:DataProvider) {
  	this.room = navParams.data ;
  	console.log(this.room);
    // setTimeout(()=>{
      data.getTeachers().subscribe(data=>{
      this.allTeacher = data;
     // console.log("lazy");
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
   //   console.log("Loop in roomdetail");
      if(this.allTeacher[i].r_no == this.room.r_no){
        if(this.teacher1!= null){
           this.teacher2 = this.allTeacher[i];
           this.teacherCount = 2 ;
          console.log("teacher2",this.allTeacher[i]);
        } else {
          this.teacher1 = this.allTeacher[i] ;
          this.teacherCount = 1 ;
          console.log("teacher1",this.teacher1);
        }
      }
    }
   });//}, 3000);

    data.getStudents().subscribe(data=>{
      this.allStudent = data;
     // console.log("lazy");
      for (var i = this.allStudent.length - 1; i >= 0; i--) {
   //   console.log("Loop in roomdetail");
      if(this.allStudent[i].r_no == this.room.r_no){
        this.studentThisRoom.push(this.allStudent[i]);
      }
    }
    });

  //  this.presentLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ARoomDetailPage');
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
    this.navCtrl.push(AddToRoomPage,a);
  }
} //
