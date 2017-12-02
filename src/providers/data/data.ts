import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database' ;
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
 	teachers : FirebaseListObservable<any[]>  ;
  students : FirebaseListObservable<any[]>  ;
  rooms : FirebaseListObservable<any[]>  ;
 	allTeacher : any[] = [];
 	
  constructor(public angularfire: AngularFireDatabase, public a: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
	getTeachers(): FirebaseListObservable<any[]> {
    this.teachers = this.angularfire.list("/Teacher") ;
    return this.teachers ;
  }

  getStudents(): FirebaseListObservable<any[]> {
    this.students = this.angularfire.list("/Student") ;
    return this.students ;
  }

  getRoom():FirebaseListObservable<any[]> {
    this.rooms = this.angularfire.list("/Room") ;
    return this.rooms ;
  }
}
