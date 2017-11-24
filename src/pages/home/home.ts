import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  pass: string;
  status: number = 0 ;
  teacherList: any[];
  studentList: any[];
  parentList: any[];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase) {
  	// this.teacherList = angularfire.list('/teacher');
  	// this.studentList = angularfire.list('/student');
  	// this.parentList = angularfire.list('/parent');
  	angularfire.list('/Teacher').subscribe(data=> {
      this.teacherList = data;
      console.dir(this.teacherList+" lenght = "+this.teacherList.length);
      
      });
  	angularfire.list('/student').subscribe(data=> {
      this.studentList = data;
      });
  	angularfire.list('/parent').subscribe(data=> {
      this.parentList = data;
      });
  }

  checkUser(){
  	if(this.username == 'admin'){
  		if(this.pass == 'admin'){
  			console.log(this.pass + '11');
  			this.status = 4;
  			console.log("admin");
  		}
  		else {
  			this.status = 0;
  			console.log("admin fail");	
  		}
  	} else {
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
    for (var j = this.studentList.length - 1; j >= 0; j--) {
      if(this.studentList[j].Std_No == this.username){
      	if(this.studentList[j].password == this.pass){
      		this.status = 2;
      		console.log("student");
      	}
      	break ;
      }
    }
    for (var k = this.parentList.length - 1; k >= 0; k--) {
      if(this.parentList[k].p_no == this.username){
      	if(this.parentList[k].password == this.pass){
      		this.status = 3;
      		console.log("parent");
      	}
      	break ;
    	}	
	}}
	if(this.status == 0){
		this.presentAlert() ;
		console.log(this.username + 'login unsuccessful');
	} else if (this.status == 1){
 		this.moveToTeacher();
 		console.log(this.username + 'login successful');
	} else if (this.status == 2){

	} else if (this.status == 3){

	} else if (this.status == 4){

	} else {

	}
  }

  moveToTeacher(){
    this.navCtrl.push(TeacherProfilePage);
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
