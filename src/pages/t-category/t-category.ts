import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database' ;
import { Subject } from 'rxjs/Subject';


/**
 * Generated class for the TCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-category',
  templateUrl: 't-category.html',
})
export class CategoryPage {
  subjects : any []=[]
  subjectDetial : any;
  teachs : any[]=[]
  teachDetail : any;
  teacherDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireBase: AngularFireDatabase) {
    this.teachDetail = this.navParams.data;
    console.log("teacher detail",this.teachDetail);

    fireBase.list('/Subject').subscribe(data=>{
      this.subjects = data;
    })
    fireBase.list('/Teach').subscribe(data=>{
      this.teachs = data;
      for(let i = this.teachs.length-1; i>=0 ; i--){
        
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TCategoryPage');
  }

  moveToCategoryDetail(sub){
    this.navCtrl.push(TCategoryDetailPage,sub);
  }


}
