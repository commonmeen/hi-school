import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the ProvideDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvideDataProvider {

  teachs:any[]=[];


  constructor(public http: HttpClient , 
    public fireBase: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams) {

    console.log('Hello ProvideDataProvider Provider');
  }

  getTeach():any[]{
    let fireBase : AngularFireDatabase;
    fireBase.list('Teach').subscribe(data=>{
      this.teachs=data;
    })
    return this.teachs;
    
  }

}
