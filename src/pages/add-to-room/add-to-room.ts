import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { Events } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  	public data:DataProvider,
    public events:Events) {
  	
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

    if (this.teacherCount == 1){
      this.teacherInRoom.splice(1,1);
    } else if (this.teacherCount == 0){
      this.teacherInRoom.splice(0,2);
    }

    if (this.status == 2){
      data.getStudents().subscribe(data=>{
        this.allStudent = data;
        for (var i = this.allStudent.length - 1; i >= 0; i--) {
          if(this.allStudent[i].r_no == ""){
            let stdNoRoom : any = {std_no:this.allStudent[i].std_no,std_name:this.allStudent[i].std_name,std_surname:this.allStudent[i].std_surname,std_status:false};
            this.studentNoRoom.push(stdNoRoom);
          }
        }
      });
      if(this.studentInRoom){
        for (var i = this.studentInRoom.length - 1; i >= 0; i--) {
          let stdInRoom : any = {std_no:this.studentInRoom[i].std_no,std_name:this.studentInRoom[i].std_name,std_surname:this.studentInRoom[i].std_surname,std_status:true};
          this.studentInRoom.splice(i,1);
          this.studentInRoom.push(stdInRoom);
          this.wantToAddStudent.push(stdInRoom.std_no);
        }
      }
    } else if (this.status == 1) {
      data.getTeachers().subscribe(data=>{
        this.allTeacher = data;
        for (var i = this.allTeacher.length - 1; i >= 0; i--) {
          if(this.allTeacher[i].r_no == ""){
      	    let stdNoRoom : any = {t_no:this.allTeacher[i].t_no,t_name:this.allTeacher[i].t_name,t_surname:this.allTeacher[i].t_surname,t_status:false};
            this.studentNoRoom.push(stdNoRoom);
          }
        }
      });
      if(this.teacherInRoom){
        for (var m = this.allTeacher.length - 1; m >= 0; m--){
          for (var j = this.teacherCount-1 ; j >= 0; j--) {
            if(this.allTeacher[m].t_no == this.teacherInRoom[j].t_no){
              let stdInRoom : any = {t_no:this.allTeacher[m].t_no,t_name:this.allTeacher[m].t_name,t_surname:this.allTeacher[m].t_surname,t_status:true};
              this.teacherInRoom.splice(j,1);
              this.teacherInRoom.push(stdInRoom);
              this.wantToAddTeacher.push(stdInRoom.t_no);
            }
          }
        } 
      }
    }
  }

  updateRoom(no:number,t:boolean){
  	if (this.status == 1){
      if (t){
        this.teacherCount++ ;
        this.wantToAddTeacher.push(no);
      } else {
        this.teacherCount-- ;
        let i = this.wantToAddTeacher.indexOf(no);
        this.wantToAddTeacher.splice(i,1);
        this.wantToRemoveTeacher.push(no)
      }
  	}  else if (this.status == 2){
      if (t){
        this.studentCount++ ;
        this.wantToAddStudent.push(no);
      } else {
        this.studentCount-- ;
        let i = this.wantToAddStudent.indexOf(no);
        this.wantToAddStudent.splice(i,1);
        this.wantToRemoveStudent.push(no);
      }
  	}
  }

  addToRoom() {
    if (this.status == 1){  
      for (var i = this.allTeacher.length - 1; i >= 0; i--) {
        for(var l = this.wantToRemoveTeacher.length -1 ; l>=0 ; l--){
          if (this.allTeacher[i].t_no == this.wantToRemoveTeacher[l]){
            let key = this.allTeacher[i].$key ;
            this.allTeacher[i].r_no = "" ;
            this.data.updateTeacher(key,this.allTeacher[i]);
            this.wantToRemoveTeacher.splice(l,1);
          }
        }
        for (var j = this.wantToAddTeacher.length -1 ; j>=0 ; j--){
          if (this.allTeacher[i].t_no == this.wantToAddTeacher[j]){
              let key = this.allTeacher[i].$key ;
              this.allTeacher[i].r_no = this.room.r_no ;
              this.data.updateTeacher(key,this.allTeacher[i]);
              this.wantToAddTeacher.splice(j,1);
          }
        }
      }  
    } else if (this.status == 2){
      for (var m = this.allStudent.length - 1; m >= 0; m--) {
        for(var k = this.wantToRemoveStudent.length -1 ; k>=0 ; k--){
          if (this.allStudent[m].std_no == this.wantToRemoveStudent[k]){
            let key = this.allStudent[m].$key ;
            this.allStudent[m].r_no = "" ;
            this.data.updateStudent(key,this.allStudent[m]);
            this.wantToRemoveTeacher.splice(k,1);
          }
        }
        for (var n = this.wantToAddStudent.length -1 ; n>=0 ; n--){
          if (this.allStudent[m].std_no == this.wantToAddStudent[n]){
            let key = this.allStudent[m].$key ;
            this.allStudent[m].r_no = this.room.r_no ;
            this.data.updateStudent(key,this.allStudent[m]);
            this.wantToAddStudent.splice(n,1);
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
