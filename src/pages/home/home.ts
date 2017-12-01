import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
//import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { AllTeacherPage } from '../all-teacher/all-teacher' ;
import { Storage } from '@ionic/storage';
import { AllAdminPage } from '../all-admin/all-admin' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = "";
  pass: string = "";
  status: number = 0 ;
  teacherList: any[];
  studentList: any[];
  parentList: any[];
  adminList: any[];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, 
    public navParams: NavParams, public angularfire: AngularFireDatabase,
    public storage:Storage) {
  	// this.teacherList = angularfire.list('/teacher');
  	// this.studentList = angularfire.list('/student');
  // 	this.parentList = angularfire.list('/parent');
  // 	this.status = 0 ;
  //    this.username = "";
  // this.pass= "";

    angularfire.list('/Teacher').subscribe(data=> {
      this.teacherList = data;
      //console.dir(this.teacherList+" lenght = "+this.teacherList.length);
      
      });
  	angularfire.list('/student').subscribe(data=> {
      this.studentList = data;
      });
  	angularfire.list('/parent').subscribe(data=> {
      this.parentList = data;
      });
    angularfire.list('/Admin').subscribe(data=> {
      this.adminList = data;
     // console.log("11111");
      });
  }

  checkUser(){
    this.status = 0 ;
    console.log(this.adminList.length);
  	for (var x = this.adminList.length - 1; x >= 0; x--) {
      console.log(this.adminList[x].a_no);
      if(this.adminList[x].name == this.username){
        if(this.adminList[x].a_password == this.pass){
          this.status = 4; 
          console.log("admin");
        }
        break ;
      }
    }
    if (this.status==0){
  		console.log(this.teacherList.length);
    
  	for (var i = this.teacherList.length - 1; i >= 0; i--) {
  		console.log(this.teacherList[i].t_no);
      if(this.teacherList[i].t_no == this.username){
      	if(this.teacherList[i].password == this.pass){
      		this.status = 1;
      		console.log("teacher");
      	}
      	break ;
      }
    }
  }
   //  for (var j = this.studentList.length - 1; j >= 0; j--) {
   //    if(this.studentList[j].Std_No == this.username){
   //    	if(this.studentList[j].password == this.pass){
   //    		this.status = 2;
   //    		console.log("student");
   //    	}
   //    	break ;
   //    }
   //  }
   //  for (var k = this.parentList.length - 1; k >= 0; k--) {
   //    if(this.parentList[k].p_no == this.username){
   //    	if(this.parentList[k].password == this.pass){
   //    		this.status = 3;
   //    		console.log("parent");
   //    	}
   //    	break ;
   //  	}	
	  // }
  console.log(this.status + ' Status');	
  if(this.status == 0){
		this.presentAlert() ;
		console.log(this.username + 'login unsuccessful');
	} else if (this.status == 1){
    this.storage.set('UserId',this.username);
 		this.moveToTeacher(this.username);
 		console.log(this.username + 'login successful');
	} else if (this.status == 2){

	} else if (this.status == 3){

	} else if (this.status == 4){
    this.storage.set('admin',this.username);
     this.moveToAdmin();
     console.log('Admin'+ this.username + 'login successful');
	} else {

	}
  }

  moveToTeacher(aa){
  	console.log(aa + 'is username');
    this.navCtrl.push(AllTeacherPage,aa);
  }

  moveToAdmin(){
    this.navCtrl.push(AllAdminPage);
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Invalid Username or Password',
    buttons: ['Try Again']
  });
  alert.present();
}
}
