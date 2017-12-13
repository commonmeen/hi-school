import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AddMatchSubjectPage } from '../add-match-subject/add-match-subject' ;
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-match-teacher',
  templateUrl: 'add-match-teacher.html',
})

export class AddMatchTeacherPage {

	allTeachers : any[] =[] ;
	showTeachers : any[] = [] ;
	chooseTeacher : any ;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
  	public data:DataProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
  	
  	data.getTeachers().subscribe(data=>{
        this.allTeachers=data;
    });

    for (var i = this.allTeachers.length -1 ; i>=0 ; i--){
    	let t = {t_no: this.allTeachers[i].t_no,t_name:this.allTeachers[i].t_name,t_surname:this.allTeachers[i].t_surname,status:false};
    	this.showTeachers.push(t);
    }
  }

  moveToSelectSubject(){
  	if (this.chooseTeacher){
      let modal = this.modalCtrl.create(AddMatchSubjectPage, this.chooseTeacher);
      modal.present();
      modal.onDidDismiss(data => {
        this.navCtrl.pop();
      });
  	} else {
  		let alert = this.alertCtrl.create({
        title: 'ไม่สามารถดำเนินการได้',
        subTitle: 'โปรดเลือกครูที่ต้องการ',
        buttons: ['OK']
      });
      alert.present();
  	}
  }

  chooseThis(teacher : any){
  	if (teacher.status == true){
  		this.chooseTeacher = teacher ;
  	} else {
  		this.chooseTeacher = undefined ;
  	}
  }  
}
