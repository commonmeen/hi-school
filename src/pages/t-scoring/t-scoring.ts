import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-t-scoring',
  templateUrl: 't-scoring.html',
})
export class ScoringPage {

  room_name : string ;
  room : any ;
  subject_name : string ;
  task : any ;
  allStdTask : any[]=[] ;
  allStudent : any[]=[] ;
  allTask : any[] = [] ;
  showStdTask : any[]=[] ; 
  saveStd : any[] = [] ;
  maxScore : number ;
  edit : boolean = false ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  	public data :DataProvider,
    public alertCtrl: AlertController) {
  
  	this.room_name = this.navParams.get("r_name");
  	this.subject_name = this.navParams.get("s_name");
  	this.task = this.navParams.get("task");
  	this.maxScore = this.task.score ;

  	this.data.getRoom().subscribe(data=>{
      let allRoom = data ;
      for(var i = allRoom.length-1 ; i>=0 ; i--){
      	if (allRoom[i].r_name == this.room_name){
      		this.room = allRoom[i] ;
      	}
      }
    });

    this.data.getStdTask().subscribe(data=>{
    	this.allStdTask = data ;
    });
    this.data.getStudents().subscribe(data=>{
    	this.allStudent = data ;
    });
    
    setTimeout(()=>{
    for(var i = this.allStdTask.length-1 ; i>=0 ; i--){
    	if(this.allStdTask[i].task_no== this.task.task_no){
        this.saveStd.push(this.allStdTask[i]);
    		for(var j = this.allStudent.length-1 ; j>=0 ; j--){
    			if(this.allStudent[j].std_no == this.allStdTask[i].std_no){
    				let newstd = {std_no:this.allStdTask[i].std_no,std_name:this.allStudent[j].std_name,
    					std_surname:this.allStudent[j].std_surname,score:this.allStdTask[i].score};
    				this.showStdTask.push(newstd);
    			}
    		}
    	}
    }
    },1000);
  }

  changeToEdit(){
    let status = 0 ;
    if(this.edit){
      for(var i = this.showStdTask.length-1 ; i>=0 ; i--){
        if(this.showStdTask[i].score >= 0 && parseInt(this.showStdTask[i].score) <= this.maxScore){
          let x = {task_no:this.task.task_no, std_no:this.showStdTask[i].std_no, score:this.showStdTask[i].score};
          for(var j = this.allStdTask.length-1 ; j>=0 ; j--){
            if(this.allStdTask[j].std_no == this.showStdTask[i].std_no && this.allStdTask[j].task_no==this.task.task_no){
              let key = this.allStdTask[j].$key ;
              this.data.updateStdTask(key,x);
            }
          }         
        } else {
          status = 1 ;
          let alert = this.alertCtrl.create({
            title: 'ให้คะแนนผิดพลาด',
            subTitle: 'ไม่สามารถให้คะแนนมากกว่าคะแนนเต็ม หรือ ให้คะแนนติดลบได้',
            buttons: ['Try again']
          });
          alert.present();
        }
      }
      if(status == 0){
        this.edit = false ;
      }
    } else {
      this.edit = true ;
    }
  }

}
