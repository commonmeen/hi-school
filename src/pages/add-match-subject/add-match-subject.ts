import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AlertController } from 'ionic-angular';
import { AddMatchRoomPage } from '../add-match-room/add-match-room' ;
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-match-subject',
  templateUrl: 'add-match-subject.html',
})
export class AddMatchSubjectPage {

	allSubject : any[] = [] ;
	showSubject : any[] = [] ;
	chooseSubject : any ;
	teach : any ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  	public data:DataProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
  	
  	this.teach = this.navParams.data ;
  	data.getSubject().subscribe(data=>{
        this.allSubject = data;
    });
  	for (var i = this.allSubject.length -1 ; i>=0 ; i--){
    	let s = {s_no: this.allSubject[i].s_no,s_name:this.allSubject[i].s_name,credit:this.allSubject[i].credit,status:false};
    	this.showSubject.push(s);
    }
  }

  chooseThis(subject : any){
  	if (subject.status == true){
  		this.chooseSubject = subject ;
  	} else {
  		this.chooseSubject = undefined ;
  	}
  }

  moveToSelectRoom(){
  	if (this.chooseSubject){
  		let t = {teacher : this.teach,subject : this.chooseSubject}
  		this.navCtrl.push(AddMatchRoomPage,t);
  	} else {
  		let alert = this.alertCtrl.create({
        title: 'ไม่สามารถดำเนินการได้',
        subTitle: 'โปรดเลือกวิชาที่ต้องการให้ "'+ this.teach.t_name +'" สอน',
        buttons: ['OK']
      });
      alert.present(); 
  	}
  }
}
