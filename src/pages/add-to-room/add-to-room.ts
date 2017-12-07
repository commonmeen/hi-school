import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { Events } from 'ionic-angular';
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
  wantToRemoveTeacher : any[] = [];
  wantToRemoveStudent : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data:DataProvider,public events:Events) {
  	
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
    if (this.teacherCount == 1){
      this.teacherInRoom.splice(1,1);
    }
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
      if(this.studentInRoom){
        console.log("เข้า if inroom");
        for (var i = this.studentInRoom.length - 1; i >= 0; i--) {
          let stdInRoom : any = {std_no:this.studentInRoom[i].std_no,std_name:this.studentInRoom[i].std_name,std_surname:this.studentInRoom[i].std_surname,std_status:true}
          // console.log(i);
          this.studentInRoom.splice(i,1);
          this.studentInRoom.push(stdInRoom);
          this.wantToAddStudent.push(stdInRoom.std_no);
          console.log("InRoom",this.studentInRoom);
        }
      }
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
      if(this.teacherInRoom){
        console.log("เข้า if inroom",this.teacherInRoom);
        for (var m = this.allTeacher.length - 1; m >= 0; m--){
          console.log("a");
          for (var j = this.teacherCount-1 ; j >= 0; j--) {
            console.log(this.allTeacher[m].t_no,this.teacherInRoom[j].t_no);
            if(this.allTeacher[m].t_no == this.teacherInRoom[j].t_no){
              console.log("c");
              let stdInRoom : any = {t_no:this.allTeacher[m].t_no,t_name:this.allTeacher[m].t_name,t_surname:this.allTeacher[m].t_surname,t_status:true}
              // console.log(i);
              this.teacherInRoom.splice(j,1);
              this.teacherInRoom.push(stdInRoom);
              this.wantToAddTeacher.push(stdInRoom.t_no);
              console.log("InRoom",this.teacherInRoom);
            }
          }
        }
        console.log("InRoom again",this.teacherInRoom);
      }
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
        this.wantToRemoveTeacher.push(no)
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
        this.wantToRemoveStudent.push(no);
        console.log("tikS",this.wantToAddStudent);
      }
  	}
  }

  addToRoom() {
    if (this.status == 1){  
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
        // console.log("เข้า teacher แล้วจ้า",this.allStudent[i]);
        for(var l = this.wantToRemoveTeacher.length -1 ; l>=0 ; l--){
          //console.log("เข้า Rstudents แล้วจ้า",this.wantToRemoveStudent[k]);
          if (this.allTeacher[i].t_no == this.wantToRemoveTeacher[l]){
            //console.log("ตรงแล้วจ้า",this.allStudent[i]);
            let key = this.allTeacher[i].$key ;
            this.allTeacher[i].r_no = "" ;
            this.data.updateTeacher(key,this.allTeacher[i]);
            console.log("แก้แล้วจ้า ลบห้อง",this.allTeacher[i]);
            this.wantToRemoveTeacher.splice(l,1);
          }
        }
        for (var j = this.wantToAddTeacher.length -1 ; j>=0 ; j--){
          if (this.allTeacher[i].t_no == this.wantToAddTeacher[j]){
              let key = this.allTeacher[i].$key ;
              this.allTeacher[i].r_no = this.room.r_no ;
              this.data.updateTeacher(key,this.allTeacher[i]);
              console.log("แก้แล้วจ้า เพิ่มห้อง",this.allTeacher[i]);
              this.wantToAddTeacher.splice(j,1);
              console.log("เหลือ",this.wantToAddTeacher);
          }
        }
      }  
    } else if (this.status == 2){
      for (var m = this.allStudent.length - 1; m >= 0; m--) {
        //console.log("เข้า students แล้วจ้า",this.allStudent[i]);
        for(var k = this.wantToRemoveStudent.length -1 ; k>=0 ; k--){
          //console.log("เข้า Rstudents แล้วจ้า",this.wantToRemoveStudent[k]);
          if (this.allStudent[m].std_no == this.wantToRemoveStudent[k]){
            //console.log("ตรงแล้วจ้า",this.allStudent[i]);
            let key = this.allStudent[m].$key ;
            this.allStudent[m].r_no = "" ;
            this.data.updateStudent(key,this.allStudent[m]);
            console.log("แก้แล้วจ้า ลบห้อง",this.allStudent[m]);
            this.wantToRemoveTeacher.splice(k,1);
          }
        }
        for (var n = this.wantToAddStudent.length -1 ; n>=0 ; n--){
          //console.log("เข้า Astudents แล้วจ้า",this.wantToAddStudent[j]);
          if (this.allStudent[m].std_no == this.wantToAddStudent[n]){
            //console.log("ตรงแล้วจ้า",this.allStudent[i]);
            let key = this.allStudent[m].$key ;
            this.allStudent[m].r_no = this.room.r_no ;
            this.data.updateStudent(key,this.allStudent[m]);
            //console.log("แก้แล้วจ้า",this.allStudent[i]);
            // let aStd : any = {std_no:this.allStudent[m].std_no,std_name:this.allStudent[m].std_name,std_surname:this.allStudent[m].std_surname,t_status:true}
            // let aIndex = this.studentNoRoom.indexOf(aStd);
            this.wantToAddStudent.splice(n,1);
            // this.studentNoRoom.splice(aIndex,1);
            // console.log("แก้แล้วจ้า เพิ่มห้อง",this.allStudent[m]);
            // if (this.studentInRoom.length != 0) {
            //   let index = this.studentInRoom.indexOf(this.allStudent[m]);
            console.log("เหลือ",this.wantToAddStudent);
            //   console.log("index", index);
            //   // if (this.studentInRoom[0].std_no == this.allStudent[i].std_no) {
            //     // index = 0;
            //   // }
            //   if (index > -1) {
            //     this.studentInRoom.splice(index, 1);
            //     console.log("splice" + this.allStudent[m].std_no + "แล้ว");
              // }
            // }
          }
        }
      }  
    }
    let allRoom :any[] = [] ;
    let roomKey ;
    this.data.getRoom().subscribe(data=>{
      allRoom = data ;
      for (var z = allRoom.length - 1; z >= 0; z--) {
        if(allRoom[z].r_no == this.room.r_no){
          roomKey = allRoom[z].$key ;
        } 
      }
    });
    this.room.stdCount = this.studentCount ;
    this.data.updateRoom(roomKey,this.room) ;
    this.navCtrl.pop();

  }

}
