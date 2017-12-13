import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';
import { TaskAddPage } from '../t-task-add/t-task-add' ;
import { ModalController } from 'ionic-angular';
import { ScoringPage } from '../t-scoring/t-scoring' ;

@IonicPage()
@Component({
  selector: 'page-t-task',
  templateUrl: 't-task.html',
})

export class TaskPage {
  tasks: any[];
  allTask : any[] = [];
  teachDetail:any[]=[];
  subjectDetail:any[]=[];
  getTeach:any[]=[];
  getRoom:any[]=[];
  getSubject:any[]=[];
  task:any[]=[];
  roomDetail:any[]=[]; 
  getStdTask : any [] = [] ;

  taskDetail: any = { t_name: '' };
  userId: number;
  teacherDetail:any;
  subjectInput:any;
  roomInput:any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public storage: Storage,
    public provideData: DataProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {

    setTimeout(()=>{
    this.storage.get('UserId').then((data) => {
      this.userId = data;
    });
  },1100)

    this.presentLoading();

    this.provideData.getTeach().subscribe(data=>{
      this.getTeach = data;
    });
    this.provideData.getRoom().subscribe(data=>{
      this.getRoom = data;
    });
    this.provideData.getSubject().subscribe(data=>{
      this.getSubject = data;
    });
    this.provideData.getStdTask().subscribe(data=>{
      this.getStdTask = data;
    });
    setTimeout(()=>{
      this.teacherDetail = this.provideData.findTeacher(this.userId);
      this.teachDetail = this.provideData.findTeachByTeacher(this.teacherDetail);
      this.subjectDetail = this.provideData.findSubjectByTeach(this.teachDetail);
    },1200)
    
    this.provideData.getTask().subscribe(data=>{
      this.allTask = data;
    })
  }

  showRoom(){
    this.roomDetail = this.provideData.findRoomBySubject(this.subjectInput);
  }

  showTask(){
    this.task = this.provideData.findTaskByRoom(this.roomInput);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1200
    });
    loader.present();
  }

  addTask(){
    let a = {r_name : this.roomInput, s_name : this.subjectInput};
    this.navCtrl.push(TaskAddPage,a);
  }

  editTask(task:any){
    let a = {r_name : this.roomInput, s_name : this.subjectInput, task : task};
    this.navCtrl.push(TaskAddPage,a);
  }

  deleteTask(task_no:any){
    for (var y = this.getStdTask.length -1 ; y>=0 ; y--){
      if (this.getStdTask[y].task_no == task_no){
        let stdTasksKey = this.getStdTask[y].$key ;
        this.provideData.getStdTask().remove(stdTasksKey);
      }
    }
    for (var z = this.allTask.length - 1 ; z >= 0 ; z--) {
      if (this.allTask[z].task_no == task_no) {
        let TaskKey = this.allTask[z].$key;
        this.provideData.getTask().remove(TaskKey); 
        break;
      }
    }
    this.tasks = [] ;
    this.showTask();
  }

  scoring(task){
    let a = {r_name : this.roomInput, s_name : this.subjectInput, task : task};
    this.navCtrl.push(ScoringPage,a);
  }
}
