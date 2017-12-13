import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-teacher-profile-detail',
  templateUrl: 'teacher-profile-detail.html',
})
export class TeacherProfileDetailPage {
  teacherDetail : any;
  pic : string ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fireBase: AngularFireDatabase,
    public camera:Camera) {
    this.pic = "pic/girl.png" ;
    this.teacherDetail = this.navParams.data;
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.pic = 'data:image/jpeg;base64,' + imageData;
      // this.fireBase.list('/Picture').push({t_no : this.teacherDetail.t_no, pic : 'data:image/jpeg;base64,'+imageData});
    }, (err) => {});
  }
}
