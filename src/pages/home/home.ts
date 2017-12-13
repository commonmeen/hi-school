import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
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
  adminList: any[];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, 
    public navParams: NavParams, public angularfire: AngularFireDatabase,
    public storage:Storage) {

    angularfire.list('/Teacher').subscribe(data=> {
      this.teacherList = data;
    });
    angularfire.list('/Admin').subscribe(data=> {
      this.adminList = data;
    });
  }

  checkUser(){
    this.status = 0 ;
  	for (var x = this.adminList.length - 1; x >= 0; x--) {
      if(this.adminList[x].name == this.username){
        if(this.adminList[x].a_password == this.pass){
          this.status = 4; 
        }
        break ;
      }
    }
    if (this.status==0){
    	for (var i = this.teacherList.length - 1; i >= 0; i--) {
        if(this.teacherList[i].t_no == this.username){
        	if(this.teacherList[i].password == this.pass){
        		this.status = 1;
        	}
        	break ;
        }
      }
    }
    if(this.status == 0){
  		this.presentAlert() ;
  	} else if (this.status == 1){
      this.storage.set('UserId',this.username);
   		this.moveToTeacher(this.username);
  	} else if (this.status == 4){
      this.storage.set('admin',this.username);
       this.moveToAdmin();
  	} 
  }

  moveToTeacher(aa){
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
