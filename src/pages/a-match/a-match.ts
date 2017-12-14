import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AddMatchTeacherPage } from '../add-match-teacher/add-match-teacher' ;
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-a-match',
  templateUrl: 'a-match.html',
})

export class MatchPage {

	allTeachs : any[] = [];
	allTeachers : any[] = [];
	allSubjects : any[] = [];
	allRooms : any[]=[] ;
	teachs : any[] = [] ;

	constructor(public navCtrl: NavController, 
    public navParams: NavParams,
	  public data:DataProvider,
    public modalCtrl: ModalController,
    public alert: AlertController) {
	
		data.getTeach().subscribe(data=>{
        	this.allTeachs=data;
  	});
		data.getTeachers().subscribe(data=>{
        	this.allTeachers=data;
  	});
  	data.getSubject().subscribe(data=>{
        	this.allSubjects=data;
  	});
  	data.getRoom().subscribe(data=>{
        	this.allRooms=data;
  	});
    setTimeout(()=>{
    this.teachs = this.getDataForThisPage() ;
  },1100);
	}

	addTeach() : void{
    let modal = this.modalCtrl.create(AddMatchTeacherPage, );
    modal.present();
    modal.onDidDismiss(data => {
      this.teachs = [] ;
      this.getDataForThisPage();
    })
	} 

	removeTeach(t:any){
    let confirm = this.alert.create({
      title: 'ยืนยันการลบการจัดการสอนนี้',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            for(var i = this.allTeachs.length -1 ; i>=0 ; i--){
              if(t.teacher.t_no == this.allTeachs[i].t_no && t.s_no == this.allTeachs[i].s_no && t.r_no == this.allTeachs[i].r_no){
                let key = this.allTeachs[i].$key ;
                this.data.getTeach().remove(key);
                break;
              }
            }           
            this.teachs = [] ;
            this.getDataForThisPage();
          }
        }
      ]
    });
    confirm.present();

	}

	getDataForThisPage() : any[] {
		for (var i = this.allTeachs.length -1 ; i>=0 ; i--){
  		var r_name,r_no ;
  		var s_name,s_no ;
  		var teacher ;
  		for(var j = this.allTeachers.length -1 ; j>=0 ; j--){
  			if(this.allTeachs[i].t_no == this.allTeachers[j].t_no){
  				for(var k = this.allSubjects.length -1 ; k>=0 ; k--){
  					if(this.allTeachs[i].s_no == this.allSubjects[k].s_no){
  						for(var l = this.allRooms.length -1 ; l>=0 ; l--){
  							if(this.allTeachs[i].r_no == this.allRooms[l].r_no){
  								r_name = this.allRooms[l].r_name ;
                  r_no = this.allRooms[l].r_no ;
  								break ;
  							}
  						}
  						s_name = this.allSubjects[k].s_name ;
              s_no = this.allSubjects[k].s_no ;
  						break;
  					}
  				}
  				teacher = this.allTeachers[j] ;
  				break ;
  			}
  		}
  		let t = {teacher,s_no,s_name,r_no,r_name};
  		this.teachs.push(t);
  	}
    return this.teachs ;
	}
}
