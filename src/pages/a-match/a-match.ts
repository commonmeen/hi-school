import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AddMatchTeacherPage } from '../add-match-teacher/add-match-teacher' ;

/**
 * Generated class for the AMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  	constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data:DataProvider) {
  	
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

  		setTimeout(() => {
    		this.getDateForThisPage() ;
    	}, 3000);
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AMatchPage');
  	}

  	addTeach() : void{
  		this.navCtrl.push(AddMatchTeacherPage);
  	}

  	removeTeach(){

  	}

  	getDateForThisPage() : void{
  		for (var i = this.allTeachs.length -1 ; i>=0 ; i--){
    		var r_name ;
    		var s_name ;
    		var teacher ;
    		// console.log("loop teach");
    		for(var j = this.allTeachers.length -1 ; j>=0 ; j--){
    			// console.log("loop teacher");
    			if(this.allTeachs[i].t_no == this.allTeachers[j].t_no){
    				// console.log("if teacher");
    				for(var k = this.allSubjects.length -1 ; k>=0 ; k--){
    					if(this.allTeachs[i].s_no == this.allSubjects[k].s_no){
    						for(var l = this.allRooms.length -1 ; l>=0 ; l--){
    							if(this.allTeachs[i].r_no == this.allRooms[l].r_no){
    								r_name = this.allRooms[l].r_name ;
    								// console.log("ได้ room");
    								break ;
    							}
    						}
    						s_name = this.allSubjects[k].s_name ;
    						// console.log("ได้ subject");
    						break;
    					}
    				}
    				teacher = this.allTeachers[j] ;
    				// console.log("ได้ teacher");
    				break ;
    			}
    		}
    		let t = {teacher,s_name,r_name};
    		this.teachs.push(t);
    		console.log("push แล้ว",this.teachs);
    	}
    	console.log("teachs",this.teachs);
  	}
}
