import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminAddUserPage } from '../admin-add-user/admin-add-user' ;
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule, AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database' ;
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';



/**
 * Generated class for the AdminProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {
	name : string = '';
teachers:any[]=[];
students:any[]=[];
  count : number = 0 ;
  tcount : number = 0 ;
  scount : number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public storage: Storage,public loadingCtrl: LoadingController,
    public fireBase: AngularFireDatabase) {
  this.storage.ready().then(() => this.storage.get('admin').then((data) => {
      this.name = data;
    }) );
    fireBase.list('/Teacher').subscribe(data=>{
          this.teachers=data;
          this.count += this.teachers.length ;
          this.tcount = this.teachers.length ;
    });
    fireBase.list('/Student').subscribe(data=>{
          this.students=data;
          this.count += this.students.length ;
          this.scount = this.students.length ;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProfilePage');
  }

  moveToAddUser(){
  	this.navCtrl.push(AdminAddUserPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
