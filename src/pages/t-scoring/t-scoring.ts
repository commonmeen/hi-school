import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
/**
 * Generated class for the TScoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  showStdTask : any[]=[] ; 
  saveStd : any[] = [] ;
  edit : boolean = false ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data :DataProvider) {
  
  	this.room_name = this.navParams.get("r_name");
  	this.subject_name = this.navParams.get("s_name");
  	this.task = this.navParams.get("task");
  	

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
    // console.log("all",this.allStdTask);
    setTimeout(()=>{
    	// console.log("all",this.allStdTask);
    	// console.log("2",this.task.task_no);
    for(var i = this.allStdTask.length-1 ; i>=0 ; i--){
    	// console.log("2",this.task.task_no);
    	// console.log("all",this.allStdTask);
    	if(this.allStdTask[i].task_no== this.task.task_no){
    		console.log("all",this.allStudent);
        this.saveStd.push(this.allStdTask[i]);
    		for(var j = this.allStudent.length-1 ; j>=0 ; j--){
    			if(this.allStudent[j].std_no == this.allStdTask[i].std_no){
    				let newstd = {std_no:this.allStdTask[i].std_no,std_name:this.allStudent[j].std_name,
    					std_surname:this.allStudent[j].std_surname,score:this.allStdTask[i].score};
    				this.showStdTask.push(newstd);
    				console.log("ppp");
    			}
    		}
    		
    	}
    }
    },1000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TScoringPage');
  }

  changeToEdit(){
    if(this.edit){
      this.edit = false ;
      for(var i = this.showStdTask.length-1 ; i>=0 ; i--){
        let x = {task_no:this.task.task_no, std_no:this.showStdTask[i].std_no, score:this.showStdTask[i].score};
        for(var j = this.allStdTask.length-1 ; j>=0 ; j--){
          if(this.allStdTask[j].std_no == this.showStdTask[i].std_no && this.allStdTask[j].task_no==this.task.task_no){
            let key = this.allStdTask[j].$key ;
            this.data.updateStdTask(key,x);
          }
        }
        
      }
    } else {
      this.edit = true ;
    }
  }

}
