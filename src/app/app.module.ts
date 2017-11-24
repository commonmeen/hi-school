import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { TeacherProfilePage} from '../pages/teacher-profile/teacher-profile'
import { TabsPage } from '../pages/tabs/tabs'

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
    TeacherProfilePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeacherProfilePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
