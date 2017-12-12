import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the AddMatchRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-match-room',
  templateUrl: 'add-match-room.html',
})
export class AddMatchRoomPage {

	allRooms : any[] = [] ;
	allTeach : any[] = [] ;
	param : any ;
	subject : any ;
	teacher : any ;
	showRoom : any[] = [] ;
	chooseRoom : any[] = [] ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data:DataProvider,public alertCtrl: AlertController,public modalCtrl: ModalController) {

  	this.param = navParams.data ;
  	this.teacher = this.param.teacher ;
  	this.subject = this.param.subject ;

  	data.getRoom().subscribe(data=>{
        this.allRooms=data;
    });
  	data.getTeach().subscribe(data=>{
        this.allTeach=data;
    });

    for (var i = this.allRooms.length -1 ; i>=0 ; i--){
       	let r = {r_no: this.allRooms[i].r_no,r_name:this.allRooms[i].r_name,stdCount:this.allRooms[i].stdCount,status:false};
    	this.showRoom.push(r);
    }
    for (var j = this.allTeach.length -1 ; j>=0 ; j--){
    	if(this.subject.s_no == this.allTeach[j].s_no){
    		for (var k = this.showRoom.length -1 ; k>=0 ; k--){
       			if(this.allTeach[j].r_no == this.showRoom[k].r_no){
       				this.showRoom.splice(k,1);
       			}
   			}
    	}
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMatchRoomPage');
  }

  chooseThis(r :any){
	if (r.status) {
  		this.chooseRoom.push(r);
  		console.log("chooseRoomIn",this.chooseRoom);
	} else {
		let index = this.chooseRoom.indexOf(r);
		this.chooseRoom.splice(index,1);
		console.log("chooseRoomOut",this.chooseRoom); 
	}
  }

  addMatch(){
  	if (this.chooseRoom.length != 0){
  		for(var i = this.chooseRoom.length -1 ; i>=0 ; i--){
  			let newTeach = {t_no:this.teacher.t_no, s_no:this.subject.s_no, r_no:this.chooseRoom[i].r_no};
  			this.data.getTeach().push(newTeach);
  		}
      this.navCtrl.popToRoot();
  	} else {
  		let alert = this.alertCtrl.create({
        title: 'ไม่สามารถดำเนินการได้',
        subTitle: 'โปรดเลือกอย่างน้อย 1ห้องเรียน',
        buttons: ['OK']
      });
      alert.present(); 
  	}
  }

}
