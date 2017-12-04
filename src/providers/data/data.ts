import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  teachers: FirebaseListObservable<any[]>;
  students: FirebaseListObservable<any[]>;
  rooms: FirebaseListObservable<any[]>;
  teachs: FirebaseListObservable<any[]>;
  subject: FirebaseListObservable<any[]>;
  categorys: FirebaseListObservable<any[]>;
  teacherDetail: any;
  allTeacher: any[] = [];

  userId: number;


  constructor(public angularfire: AngularFireDatabase, public a: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getTeachers(): FirebaseListObservable<any[]> {
    this.teachers = this.angularfire.list("/Teacher");
    return this.teachers;
  }

  getStudents(): FirebaseListObservable<any[]> {
    this.students = this.angularfire.list("/Student");
    return this.students;
  }

  getRoom(): FirebaseListObservable<any[]> {
    this.rooms = this.angularfire.list("/Room");
    return this.rooms;
  }

  getTeach(): FirebaseListObservable<any[]> {
    this.teachs = this.angularfire.list("/Teach");
    return this.teachs;
  }

  getSubject(): FirebaseListObservable<any[]> {
    this.subject = this.angularfire.list("/Subject");
    return this.subject;
  }

  getCategory(): FirebaseListObservable<any[]> {
    this.categorys = this.angularfire.list("/Category");
    return this.categorys;
  }

  updateTeacher(key: any, value: any) {
    this.getTeachers();
    this.teachers.update(key, value);
  }

  updateStudent(key: any, value: any) {
    this.getStudents();
    this.students.update(key, value);
  }

  updateCategory(key: any, value: any) {
    this.getCategory();
    this.categorys.update(key, value);
  }

  getCatBySub(subNo: string): any {
    let allCategory: any[] = [];
    let listCategory: any[] = [];
    let a: any;
    this.getCategory().subscribe(data => {
      allCategory = data;
      for (var i = allCategory.length - 1; i >= 0; i--) {
        if (allCategory[i].s_no == subNo) {
          // console.log("ผ่าน subNo แล้ว");
          if (listCategory.length != 0) {
            console.log("เข้า !=[]");
            console.log("listCat",listCategory);
            let index = listCategory.indexOf(allCategory[i]);
            console.log("ทำไมไม่พิมพ์เอง",allCategory[i].c_no);
            console.log("ทำไมไม่พิมพ์เอง",listCategory[0].c_no);
            
            if (listCategory[0].c_no == allCategory[i].c_no) {
              index = 0;
            }
            console.log("index", index);
            if (index > -1) {
              listCategory.splice(index, 1);
              console.log("splice" + allCategory[i].c_no + "แล้ว");
            } else {
            }
          }
          listCategory.push(allCategory[i]);
        }
      }
    });
    return listCategory;
  }

  deleteCategory(key){
    this.getCategory();
    this.categorys.remove(key);
  }






  }
