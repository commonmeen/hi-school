import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms' ;
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import { AllTeacherPage } from "../pages/all-teacher/all-teacher";
import { TeacherProfileDetailPage } from "../pages/teacher-profile-detail/teacher-profile-detail"
import { TCategoryDetailPage } from "../pages/t-category-detail/t-category-detail";
import { TCategoryAddPage } from "../pages/t-category-add/t-category-add";
import { AllAdminPage } from "../pages/all-admin/all-admin";
import { AdminAddUserPage } from '../pages/admin-add-user/admin-add-user';
import { AdminAddTeacherPage } from '../pages/admin-add-teacher/admin-add-teacher';
import { AdminAddStudentPage } from '../pages/admin-add-student/admin-add-student';
import { RoomDetailPage } from '../pages/a-room-detail/a-room-detail';
import { DataProvider } from '../providers/data/data';
import { AddToRoomPage } from '../pages/add-to-room/add-to-room';
import { AddSubjectPage } from '../pages/add-subject/add-subject';
import { AddMatchTeacherPage } from '../pages/add-match-teacher/add-match-teacher';
import { AddMatchSubjectPage } from '../pages/add-match-subject/add-match-subject';
import { AddMatchRoomPage } from '../pages/add-match-room/add-match-room';
import { THelpPage } from '../pages/t-help/t-help';
import { AHelpPage } from '../pages/a-help/a-help';
import { TaskAddPage } from '../pages/t-task-add/t-task-add' ;
import { ScoringPage } from '../pages/t-scoring/t-scoring' ;
import { AboutUsPage} from '../pages/about-us/about-us' ;

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
    AddToRoomPage,
    RoomDetailPage,
    AddSubjectPage,
    AddMatchTeacherPage,
    AddMatchSubjectPage,
    AddMatchRoomPage,
    THelpPage,
    AHelpPage,
    TaskAddPage,
    ScoringPage,
    AboutUsPage

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp, MyApp],
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
    RoomDetailPage,
    AddToRoomPage,
    AddSubjectPage,
    AddMatchTeacherPage,
    AddMatchSubjectPage,
    AddMatchRoomPage,
    THelpPage,
    AHelpPage,
    TaskAddPage,
    ScoringPage,
    AboutUsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    HttpClientModule,
    AngularFireModule,
    Camera

  ]
})
export class AppModule { }
