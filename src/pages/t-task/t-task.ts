import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireModule, FirebaseApp } from 'angularfire2' ;
import { AngularFireDatabase } from 'angularfire2/database' ;

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
  tasks:any[];
  taskDetail:any = {t_name:''};
  userId:number;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fireBase:AngularFireDatabase) {
  
    fireBase.list('/Task').subscribe((data)=>
    this.tasks=data            
  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TTaskPage');
  }

 

}
