import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
/**
 * Generated class for the AddToRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-to-room',
  templateUrl: 'add-to-room.html',
})
export class AddToRoomPage {

	allStudent : any[] = [] ;
	allTeacher : any[] = [] ;
	studentNoRoom : any[] =[] ;
  studentInRoom : any[] =[] ;
  teacherInRoom : any[] = [] ;
  params : any ;
	status : number = 0 ;
	teacherCount : number = 0 ;
  studentCount : number = 0 ;
  room : any ;
  wantToAddTeacher : any[] = [];
  wantToAddStudent : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data:DataProvider) {
  	
  	this.params = navParams.data ;
    this.teacherCount = this.params.teacherCount ;
    this.status = this.params.status;
    this.studentInRoom = this.params.studentInRoom ;
    this.teacherInRoom = this.params.teacherInRoom ;
    this.room = this.params.room ;
    this.studentNoRoom = [] ;
    if (this.studentInRoom){
    this.studentCount = this.studentInRoom.length ;
  }
    console.log("tIn",this.teacherInRoom);
    console.log("sIn",this.studentInRoom);
  if (this.status == 2){
  data.getStudents().subscribe(data=>{
      this.allStudent = data;
      for (var i = this.allStudent.length - 1; i >= 0; i--) {
      if(this.allStudent[i].r_no == ""){
      //	console.log("re wongwong");
        let stdNoRoom : any = {std_no:this.allStudent[i].std_no,std_name:this.allStudent[i].std_name,std_surname:this.allStudent[i].std_surname,std_status:false}
        this.studentNoRoom.push(stdNoRoom);
        console.log("NoRoom",this.studentNoRoom);
      } else if (this.allStudent[i].r_no == null){
      	console.log("re null");
       //this.studentThisRoom.push(this.allStudent[i]);
      } 
    }
    });
} else if (this.status == 1) {
  data.getTeachers().subscribe(data=>{
      this.allTeacher = data;
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
      if(this.allTeacher[i].r_no == ""){
      	let stdNoRoom : any = {t_no:this.allTeacher[i].t_no,t_name:this.allTeacher[i].t_name,t_surname:this.allTeacher[i].t_surname,t_status:false}
        this.studentNoRoom.push(stdNoRoom);
      }
    }
   });
}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToRoomPage');
  }

  updateRoom(no:number,t:boolean){
  	console.log(no + " " +t);
  	if (this.status == 1){
      if (t){
        this.teacherCount++ ;
        this.wantToAddTeacher.push(no);
        console.log("tikT",this.wantToAddTeacher);
      } else {
        this.teacherCount-- ;
        let i = this.wantToAddTeacher.indexOf(no);
        this.wantToAddTeacher.splice(i,1);
        console.log("tikT",this.wantToAddTeacher);
      }
  	}  else if (this.status == 2){
      if (t){
        this.studentCount++ ;
        this.wantToAddStudent.push(no);
        console.log("tikS",this.wantToAddStudent);
      } else {
        this.studentCount-- ;
        let i = this.wantToAddStudent.indexOf(no);
        this.wantToAddStudent.splice(i,1);
        console.log("tikS",this.wantToAddStudent);
      }
  	}
  }

  addToRoom() {
    if (this.status == 1){  
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
        console.log("เข้า teacher แล้วจ้า",this.allStudent[i]);
        for (var j = this.wantToAddTeacher.length -1 ; j>=0 ; j--){
          if (this.allTeacher[i].t_no == this.wantToAddTeacher[j]){
              let key = this.allTeacher[i].$key ;
              this.allTeacher[i].r_no = this.room.r_no ;
              this.data.updateTeacher(key,this.allTeacher[i]);
              console.log("แก้แล้วจ้า",this.allTeacher[i]);
              this.wantToAddTeacher.splice(j,1);
          }
        }
      }  
    } else if (this.status == 2){
      for (var i = this.allStudent.length - 1; i >= 0; i--) {
        console.log("เข้า students แล้วจ้า1",this.allStudent[i]);
        for (var j = this.wantToAddStudent.length -1 ; j>=0 ; j--){
          console.log("เข้า students แล้วจ้า2",this.wantToAddStudent[j]);
          if (this.allStudent[i].std_no == this.wantToAddStudent[j]){
            console.log("ตรงแล้วจ้า",this.allStudent[i]);
            let key = this.allStudent[i].$key ;
            this.allStudent[i].r_no = this.room.r_no ;
            this.data.updateStudent(key,this.allStudent[i]);
            console.log("แก้แล้วจ้า",this.allStudent[i]);
            let aStd : any = {std_no:this.allStudent[i].std_no,std_name:this.allStudent[i].std_name,std_surname:this.allStudent[i].std_surname,t_status:true}
            let aIndex = this.studentNoRoom.indexOf(aStd);
            this.wantToAddStudent.splice(j,1);
            this.studentNoRoom.splice(aIndex,1);
            if (this.studentInRoom.length != 0) {
              let index = this.studentInRoom.indexOf(this.allStudent[i]);

              console.log("index", index);
              // if (this.studentInRoom[0].std_no == this.allStudent[i].std_no) {
                // index = 0;
              // }
              if (index > -1) {
                this.studentInRoom.splice(index, 1);
                console.log("splice" + this.allStudent[i].t_no + "แล้ว");
              }
            }
          }
        }
      }  
    }
    this.navCtrl.pop();
  }

}
