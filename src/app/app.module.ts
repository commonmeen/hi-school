import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { AllTeacherPage } from "../pages/all-teacher/all-teacher" ;
import { TeacherProfileDetailPage } from "../pages/teacher-profile-detail/teacher-profile-detail"
import { TCategoryDetailPage } from "../pages/t-category-detail/t-category-detail";
import { TCategoryAddPage } from "../pages/t-category-add/t-category-add";

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
    TCategoryAddPage
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
    TCategoryAddPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
