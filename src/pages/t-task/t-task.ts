import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
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
  teachDetail:any ;
  subjectDetail:any[]=[];
  getTeach:any[]=[];
  getRoom:any[]=[];
  getSubject:any[]=[];
  task:any[]=[];
  roomDetail:any[]=[]; 
  getStdTask : any [] = [] ;
  getCategory : any[] = [] ;

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
    public modalCtrl: ModalController,
    public alert: AlertController) {

    setTimeout(()=>{
      this.storage.get('UserId').then((data) => {
        this.userId = data;
      });
    },1100);

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
    
    setTimeout(() => {
      this.teacherDetail = this.provideData.findTeacher(this.userId);

      for (let j = this.getTeach.length - 1; j >= 0; j--) {                              //join teachs and teacher detail by t_no
        if (this.getTeach[j].t_no == this.teacherDetail.t_no) {
          this.teachDetail = this.getTeach[j];
          for (let k = this.getSubject.length - 1; k >= 0; k--) {                           //join subjects and teach detail by s_no
            if (this.getSubject[k].s_no == this.teachDetail.s_no) {
              if (this.subjectDetail.indexOf(this.getSubject[k])== -1){
                this.subjectDetail.push(this.getSubject[k]);
              }
              break;
            }
          }
        }
      }
    }, 1500);

    this.provideData.getTask().subscribe(data=>{
      this.allTask = data;
    })
  }

  showRoom(){
    this.roomInput = "";
    this.roomDetail = this.provideData.findRoomBySubject(this.subjectInput);
  }

  showTask(){
    if (this.roomInput != ""){
      this.task = this.provideData.findTaskByRoom(this.roomInput,this.subjectInput);
    } else {
      this.task = undefined ;
    }
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
    let confirm = this.alert.create({
      title: 'คุณต้องการลบการบ้านนี้?',
      message: 'ถ้าคุณลบการบ้าน คะแนนของนักเรียนจะหายไปด้วย',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            this.provideData.deleteTask(task_no);
            this.tasks = [] ;
            this.showTask();
          }
        }
      ]
    });
    confirm.present();
  }

  scoring(task){
    let a = {r_name : this.roomInput, s_name : this.subjectInput, task : task};
    this.navCtrl.push(ScoringPage,a);
  }
}
