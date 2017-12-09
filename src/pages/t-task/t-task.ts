import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import { AngularFireModule, FirebaseApp } from 'angularfire2' ;
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-task',
  templateUrl: 't-task.html',
})
export class TaskPage {
  tasks: any[];
  taskDetail: any = { t_name: '' };
  userId: number;
  teacherDetail:any;
  teachDetail:any[]=[];
  subjectDetail:any[]=[];
  getTeach:any[]=[];
  getRoom:any[]=[];
  getSubject:any[]=[];
  subjectInput:any;
  roomDetail:any[]=[];
  roomInput:any;
  task:any[]=[];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public storage: Storage,
    public provideData: DataProvider,
    public loadingCtrl: LoadingController) {


    this.storage.ready().then(() => this.storage.get('UserId').then((data) => {
      this.userId = data;
      console.log("user idddddddddd", this.userId);
    }));

    this.presentLoading();

    this.provideData.getTeach().subscribe(data=>{
      this.getTeach = data;
    })
    this.provideData.getRoom().subscribe(data=>{
      this.getRoom = data;
    })
    this.provideData.getSubject().subscribe(data=>{
      this.getSubject = data;
    })
    setTimeout(()=>{
      this.teacherDetail = this.provideData.findTeacher(this.userId);
      console.log("มาแล้วจ้าาาาา Teacher",this.teacherDetail);
      this.teachDetail = this.provideData.findTeachByTeacher(this.teacherDetail);
      console.log("มาแล้วจ้าาาาา Teach",this.teachDetail);
      this.subjectDetail = this.provideData.findSubjectByTeach(this.teachDetail);
      console.log("มาแล้วจ้าาาาา Sub",this.subjectDetail);
    },3000)
    

    console.log("Sub Input",this.subjectInput);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TTaskPage');
  }

  showRoom(){
    console.log("เข้าสักทีสิโว้ยยยยยยยยยยยยยยยยยยยยยยยยย");
    this.roomDetail = this.provideData.findRoomBySubject(this.subjectInput);
  }
  showTask(){
    this.task = this.provideData.findTaskByRoom(this.roomInput);
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  addTask(){
    console.log("ADD");
    
  }



}
