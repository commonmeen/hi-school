import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AdminAddUserPage } from '../admin-add-user/admin-add-user' ;
import { AngularFireDatabase } from 'angularfire2/database' ;
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { AHelpPage } from '../a-help/a-help';
import { AboutUsPage } from '../about-us/about-us';

@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {
	name : string = '';
teachers:any[]=[];
students:any[]=[];
  count : number = 0;
  tcount : number = 0;
  scount : number = 0 ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  	public storage: Storage,
    public fireBase: AngularFireDatabase, 
    public app:App) {

    this.storage.ready().then(() => this.storage.get('admin').then((data) => {
      this.name = data;
    }) );
    
    fireBase.list('/Teacher').subscribe(data=>{
          this.teachers=data;
          this.tcount = this.teachers.length ;
          this.calCount();
    });
    
    fireBase.list('/Student').subscribe(data=>{
          this.students=data;
          this.scount = this.students.length ;
          this.calCount();
    });
  }

  moveToAddUser(){
  	this.navCtrl.push(AdminAddUserPage);
  }

  calCount(){
    this.count = this.teachers.length + this.students.length ;
  }

  logout(){
    this.storage.clear();
    // this.navCtrl.pop();
    // this.app.unregisterRootNav(this.app.getRootNavById('n5'));
    // console.log(this.app.getRootNavs())
    this.app.getRootNav().setRoot(HomePage);
    this.app.getRootNav().popToRoot() ;
    // console.log(this.app.getRootNav().popToRoot(HomePage));
  }

  moveToHelp(){
    this.navCtrl.push(AHelpPage);
  }

  moveToAboutUs(){
    this.navCtrl.push(AboutUsPage);
  }
}

