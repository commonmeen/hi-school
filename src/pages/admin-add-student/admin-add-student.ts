import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-admin-add-student',
  templateUrl: 'admin-add-student.html',
})
export class AdminAddStudentPage {
	students: FirebaseListObservable<any[]>;
	addForm: FormGroup;
	lastStudent: any[]=[] ;
	lastStudentNo : number ;
	name:string ;
	surname: string ;
	gender: string ;
	tel: number

	constructor(public builder:FormBuilder, 
    public navCtrl: NavController, 
  	public navParams: NavParams, 
    public fireBase: AngularFireDatabase) {

  	this.students = this.fireBase.list('/Student');
  	this.addForm = this.builder.group({
      'name' :['',Validators.required],
      'surname' :['',Validators.required],
      'gender' :['',Validators.required],
      'tel':['',Validators.required]
    });

  	fireBase.list('/Student').subscribe(data=>{
      this.lastStudent=data;
      this.lastStudentNo = parseInt(this.lastStudent[this.lastStudent.length-1].std_no);
      this.lastStudentNo++;
    });
  }

  addStudent(){
  	let newStudent : any = {std_no:this.lastStudentNo, 
  		std_name:this.name, std_surname:this.surname, r_no:'',
  		tel:this.tel, gender:this.gender, password:'12345678'} ;
    this.students.push(newStudent);
    this.navCtrl.pop();
  }
}
