import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data' ;
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the AddSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-subject',
  templateUrl: 'add-subject.html',
})
export class AddSubjectPage {
	subjects : any[] = [];
	subject : any ;
	param : any ;
	s_no : any ;
	s_name : any ;
	credit : any ;
	addForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public data : DataProvider,public builder:FormBuilder) {
  	this.param = this.navParams.data ;
  	this.subject = this.param.sub ;
  	console.log(this.subject);
  	if (this.subject==null){      
        this.subject = {s_no:this.param.sno, s_name:'', credit:''};
  	}
  	this.addForm = this.builder.group({
      's_no' :['',Validators.required],
      's_name' :['',Validators.required],
      'credit' :['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubjectPage');
  }

  addSub(){
	if (this.subject.$key == null) {
	    let newSub: any = { s_no: this.s_no, s_name: this.s_name, credit: this.credit}
	    this.data.getSubject().push(newSub);
	    console.log("เพิ่มวิชาแล้วจ้าา");
	    this.navCtrl.pop();
	} else {
	    console.log("key", this.subject.$key);
	    let newSub: any = { s_no: this.s_no, s_name: this.s_name, credit: this.credit}
	    let k = this.subject.$key;
	    this.data.updateSubject(k, newSub);
	    this.navCtrl.pop();
	}
  }
}
