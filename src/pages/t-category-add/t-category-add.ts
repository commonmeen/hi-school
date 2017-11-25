import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


/**
 * Generated class for the TCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-category-add',
  templateUrl: 't-category-add.html',
})
export class TCategoryAddPage {
  addForm: FormGroup;
  addCategory:FirebaseListObservable<any[]>;
  c_no:number;
  name:string;
  percent:number;
  s_no:number;
  getc_no:any[]=[];
  cno:number;



  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public builder:FormBuilder,
    public fireBase: AngularFireDatabase  ) {

    this.addCategory = this.fireBase.list('/Category');      
    this.addForm = this.builder.group({
      'name' :['',Validators.required],
      'percent' : ['',Validators.required]
    })
    fireBase.list('/Category').subscribe(data=>{
      this.getc_no=data;
      console.log('Cno',this.getc_no.length);
      this.cno = parseInt(this.getc_no[this.getc_no.length-1].c_no);
      this.cno+=1;
      console.log('cno มาแล้วจ้า',this.cno);
    }
    );

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryAddPage');
  }

  addCat(){
    let newCat : any = {c_no:this.cno, c_name:this.name, c_percent:this.percent, s_no:''}
    this.addCategory.push(newCat);
  }
}
