import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AllTeacherPage } from "../pages/all-teacher/all-teacher" ;
import { TeacherProfileDetailPage } from "../pages/teacher-profile-detail/teacher-profile-detail"
import { TCategoryDetailPage } from "../pages/t-category-detail/t-category-detail";
import { TCategoryAddPage } from "../pages/t-category-add/t-category-add";
import { AllAdminPage } from "../pages/all-admin/all-admin" ;
import { AdminAddUserPage } from '../pages/admin-add-user/admin-add-user' ;
import { AdminAddTeacherPage } from '../pages/admin-add-teacher/admin-add-teacher';
import { AdminAddStudentPage } from '../pages/admin-add-student/admin-add-student';
import { RoomDetailPage } from '../pages/a-room-detail/a-room-detail' ;


export const config = {
  apiKey: "AIzaSyA0pHeRyxU_Fx-Ep6_5SgDuZp-Gz84CnMA",
  authDomain: "hi-school-8c626.firebaseapp.com",
  databaseURL: "https://hi-school-8c626.firebaseio.com",
  projectId: "hi-school-8c626",
  storageBucket: "",
  messagingSenderId: "468596081059"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllTeacherPage,
    TeacherProfileDetailPage,
    TCategoryDetailPage,
    TCategoryAddPage,
    AllAdminPage,
    AdminAddUserPage,
    AdminAddTeacherPage,
    AdminAddStudentPage,
  RoomDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllTeacherPage,
    TeacherProfileDetailPage,
    TCategoryDetailPage,
    TCategoryAddPage,
    AllAdminPage,
    AdminAddUserPage,
    AdminAddTeacherPage,
    AdminAddStudentPage,
    RoomDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
