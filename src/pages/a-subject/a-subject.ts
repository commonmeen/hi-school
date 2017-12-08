import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { DataProvider } from '../../providers/data/data' ;
import { AddSubjectPage } from '../add-subject/add-subject' ;
/**
 * Generated class for the ASubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-subject',
  templateUrl: 'a-subject.html',
})
export class SubjectPage {

	subjects : any[] = [] ;	
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fireBase: AngularFireDatabase,
  	public data:DataProvider) {
  	data.getSubject().subscribe(data=>{
          this.subjects=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ASubjectPage');
  }

  addSubject(sub : any){
  	if(sub == null){
  		console.log("add");
  		let sno = parseInt(this.subjects[this.subjects.length - 1].s_no);
        sno += 1;
        let s = {sub:null,sno:sno};
  		this.navCtrl.push(AddSubjectPage,s);
  	} else {
  		console.log("edit");
  		let s = {sub:sub};
  		this.navCtrl.push(AddSubjectPage,s);
  	}
  }

}
