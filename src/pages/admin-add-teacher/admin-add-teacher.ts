import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the AdminAddTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-add-teacher',
  templateUrl: 'admin-add-teacher.html',
})
export class AdminAddTeacherPage {
	teachers: FirebaseListObservable<any[]>;
	addForm: FormGroup;
	lastTeacher: any[]=[] ;
	lastTeacherNo : number ;
	name:string ;
	surname:string ;
	national :number ;
	tel : number ;
	email : string ;

  constructor(public builder:FormBuilder, public navCtrl: NavController, 
  	public navParams: NavParams, public fireBase: AngularFireDatabase) {
  	this.teachers = this.fireBase.list('/Teacher');
  	this.addForm = this.builder.group({
      'name' :['',Validators.required],
      'surname' :['',Validators.required],
      'national' :['',Validators.required],
      'tel':['',Validators.required],
      'email' : ['',Validators.required]
    });
  	fireBase.list('/Teacher').subscribe(data=>{
      this.lastTeacher=data;
      this.lastTeacherNo = parseInt(this.lastTeacher[this.lastTeacher.length-1].t_no);
      this.lastTeacherNo++;
      console.log('cno มาแล้วจ้า',this.lastTeacherNo);
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddTeacherPage');
  }

  addTeacher(){
  	let newTeacher : any = {t_no:this.lastTeacherNo, t_name:this.name, 
  		t_surname:this.surname, r_no:'', national_id:this.national,
  		 email:this.email, tel:this.tel, password:'12345678'} ;
    this.teachers.push(newTeacher);
    this.navCtrl.pop();
  }
}
