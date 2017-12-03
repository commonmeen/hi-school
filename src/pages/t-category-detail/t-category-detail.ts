import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TCategoryAddPage } from '../t-category-add/t-category-add';
import { config } from '../../app/app.module';



/**
 * Generated class for the TCategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-category-detail',
  templateUrl: 't-category-detail.html',
})
export class TCategoryDetailPage {
  categorys: FirebaseListObservable<any[]>;
  getCategory: any[] = [];
  categoryDetail: any;
  listCategory: any[] = [];
  c_no: string;
  c_name: string;
  c_percent: string;
  subject: any;
  key: string;
  teachs:any[]=[];
  rooms:any[]=[];
  roomDetail:any[]=[];




  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public fireBase: AngularFireDatabase,
    ) {

    this.subject = this.navParams.data;
    console.log("subNo",this.subject.s_no);
    this.categorys = fireBase.list('/Category');
    fireBase.list('/Category').subscribe(data => {
      this.getCategory = data;
      console.log("test", this.getCategory);
      console.log("123132", this.getCategory);
      this.subject = this.navParams.data;
      console.log("subject", this.subject);

      for (var i = this.getCategory.length - 1; i >= 0; i--) {
        console.log("loop")
        console.log("cat_s_no",this.getCategory[i].s_no);
        console.log("subNo",this.subject.s_no);
        if (this.getCategory[i].s_no == this.subject.s_no) {
          console.log("yes");
          this.listCategory.push(this.getCategory[i]);
          console.log("ListCat",this.listCategory);
        } else{
          console.log("error");
        }
          
      }
    });

    fireBase.list('/Teach').subscribe(data=>{
      this.teachs = data;
      for(let i = this.teachs.length-1; i>=0; i--){
        if(this.teachs[i].s_no == this.subject.s_no){
          console.log("ตรงกันแล้วจ้า",this.teachs[i]);
          fireBase.list('/Room').subscribe(data=>{
            this.rooms = data;
            for(let j = this.rooms.length-1 ; j>=0 ; j--){
              if(this.rooms[j].r_no==this.teachs[i].r_no){
                console.log("correct");
                this.roomDetail.push(this.rooms[j]);
                console.log("room Detial",this.roomDetail);
              }
            }
          })
        }
      }
    })

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryDetailPage');
  }

  addCategory() {
    this.navCtrl.push(TCategoryAddPage,this.subject.s_no);
  }
  deleteCategory(c) {
    for (var i = this.getCategory.length - 1; i >= 0; i--) {
      if (this.getCategory[i].c_no == c) {
        this.categoryDetail = this.getCategory[i];
        console.log(this.categoryDetail.$key);
        this.key = this.categoryDetail.$key;

      }
      console.log(c, "123");
    }
    this.categorys.remove(this.key);
  }
  
  






}
