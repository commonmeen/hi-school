import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataProvider } from '../../providers/data/data' ;
import { ToastController, AlertController } from 'ionic-angular';
/**
 * Generated class for the TTaskAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-task-add',
  templateUrl: 't-task-add.html',
})
export class TaskAddPage {

  room : any ;
  subject : any ;
  addForm : FormGroup;
  allSubject : any[] = [] ;
  allTask : any[] = [] ;
  allRoom : any[] = [] ;
  categoryThisSubject : any[] = [] ;
  task : any ;
  task_no : any ;
  today = new Date().toISOString();

  name: any ;
  category : string ;
  score : any ;
  description : any ;
  deadline : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public builder:FormBuilder, public data:DataProvider,
    private toastCtrl: ToastController) {
  	
  	let r_name = this.navParams.get("r_name");
  	let s_name = this.navParams.get("s_name");
  	this.task = this.navParams.get("task");

  	if(this.task == null){
  		this.task = {task_no:"",task_name:"",score:0,r_no:"",description:"",deadline:"",c_no:""};
  	}

    this.name = this.task.task_name;
    this.score = this.task.score ;
    this.description = this.task.description ;
    this.deadline = this.task.deadline ;

	this.addForm = this.builder.group({
      'name' :['',Validators.required],
      'score' :['',Validators.required],
      'description' :['',Validators.required],
      'category' :['',Validators.required],
      'deadline' : ['',Validators.required]
    });

	  this.data.getSubject().subscribe(data=>{
      this.allSubject = data;
    });
    for (var i = this.allSubject.length -1 ; i>=0 ; i--){
    	if(this.allSubject[i].s_name == s_name){
    		this.subject = this.allSubject[i];
    		console.log("sname มา");
    		break;
    	}
    }
    this.categoryThisSubject = this.data.getCatBySub(this.subject.s_no);
    setTimeout(()=>{
    for(var j = this.categoryThisSubject.length -1 ; j>=0 ; j--){
      if(this.task.c_no == this.categoryThisSubject[j].c_no){
        this.category = this.categoryThisSubject[j].c_no + " " +this.categoryThisSubject[j].c_name ;
      }
    }
  },1000)

    this.data.getRoom().subscribe(data=>{
      this.allRoom = data;
    });
    for (var k = this.allRoom.length -1 ; k>=0 ; k--){
    	if(this.allRoom[k].r_name == r_name){
    		this.room = this.allRoom[k];
    		console.log("rname มา");
    		break;
    	}
    }


	data.getTask().subscribe(data => {
      this.allTask = data;
      this.task_no = parseInt(this.allTask[this.allTask.length - 1].task_no);
      this.task_no += 1;
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TTaskAddPage');
  }

  addTask(){
  	if (this.task.$key == null) {
        let newTask: any = {task_no:this.task_no, task_name:this.name, score: this.score, r_no:this.room.r_no, description: this.description, deadline:this.deadline, c_no:this.category.substring(0,6)};
        this.data.getTask().push(newTask);
        console.log("task success");
        this.joinStdTask(this.task_no);
        this.navCtrl.pop();

        let toast = this.toastCtrl.create({
          message: 'เพิ่มงานสำเร็จ!',
          duration: 3000,
          position: 'top'
        });
        toast.present();

      } else {
        //console.log("keyyyyyyyyyyyyyyyyyyyyy", this.categoryDetail.$key);
        let newTask: any = {task_no:this.task.task_no, task_name:this.name, score: this.score, r_no:this.room.r_no, description: this.description, deadline:this.deadline, c_no:this.category.substring(0,6)};
        // console.log("นิววววววว", newCat);
        let TaskKey = this.task.$key;
        this.data.updateTask(TaskKey, newTask);
        this.navCtrl.pop();

        let toast = this.toastCtrl.create({
          message: 'แก้ไขงานสำเร็จ!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
  }

  joinStdTask(task_no:number){
    console.log("stdTask success1",this.room.r_no);
    let studentThisRoom = this.data.getStudentsByRoom(this.room.r_no);
    console.log("stdTask success1",studentThisRoom);
    setTimeout(()=>{
    for(var i = studentThisRoom.length -1 ; i>=0 ; i--){
      let addStdTask = {std_no : studentThisRoom[i].std_no, task_no: task_no-1, score:0};
      this.data.getStdTask().push(addStdTask);
      console.log("stdTask success3");
    }
    console.log("stdTask success2");
    },1000)
  }

}
