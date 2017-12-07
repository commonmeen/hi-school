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
  tasks: FirebaseListObservable<any[]>;
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

  getTask(): FirebaseListObservable<any[]> {
    this.tasks = this.angularfire.list("/Task");
    return this.tasks;
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
            console.log("listCat", listCategory);
            let index = listCategory.indexOf(allCategory[i]);
            console.log("ทำไมไม่พิมพ์เอง", allCategory[i].c_no);
            console.log("ทำไมไม่พิมพ์เอง", listCategory[0].c_no);

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

  deleteCategory(key) {
    this.getCategory();
    this.categorys.remove(key);
  }


  // getPercent(subNo: string) : number{
  //   let listCategory = this.getCatBySub(subNo);
  //   let totalPercent : number =0;
  //   for (let k = listCategory.length - 1; k >= 0; k--) {
  //     totalPercent += parseInt(listCategory[k].c_percent);
  //     console.log("Total Percent", totalPercent);
  //   }
  //   return totalPercent;


  // }

  findTeacher(id): any {
    let getTeacher: any[] = []
    let teacherDetail: any;
    this.getTeachers().subscribe(data => {
      getTeacher = data;
    });
    // console.log("ooooooooooooooooooooooooooooo",id);
    //console.log("2222222222222222222222222",getTeacher);
    for (let i = getTeacher.length - 1; i >= 0; i--) {
      //console.log("11111111111111111111111111111111");                         //find teacher from user id.
      if (getTeacher[i].t_no == id) {
        teacherDetail = getTeacher[i];
        //console.log("66666666666666666666666666666666666666", teacherDetail);
        break;
      }
    }
    return teacherDetail;
  }

  findTeachByTeacher(teacherDetail): any[] {
    let getTeach: any[] = [];
    let teachDetail: any[] = [];
    this.getTeach().subscribe(data => {
      getTeach = data;
    })
    console.log("เข้าจ้า", teachDetail);
    console.log("เข้าจ้า Teacher", teacherDetail);

    for (let i = getTeach.length - 1; i >= 0; i--) {
      if (getTeach[i].t_no == teacherDetail.t_no) {
        teachDetail.push(getTeach[i]);
        console.log("มาจ้า", teachDetail);
      }
    }
    return teachDetail;
  }

  findSubjectByTeach(teachDetail: any[]): any[] {
    let getSubject: any[] = [];
    let subjectDetail: any[] = [];
    this.getSubject().subscribe(data => {
      getSubject = data;
    })
    console.log("รัวๆมา", getSubject);
    for (let i = getSubject.length - 1; i >= 0; i--) {
      for (let j = teachDetail.length - 1; j >= 0; j--) {
        if (getSubject[i].s_no == teachDetail[j].s_no) {
          subjectDetail.push(getSubject[i]);
          console.log("มาจ้าkkkkkkkkk", subjectDetail);
        }
      }

    }
    return subjectDetail;
  }

  findRoomBySubject(subjectName): any[] {
    let getSubject: any[] = [];
    let subjectDetail: any[] = [];
    let getTeach: any[] = [];
    let teachDetail: any[] = [];
    let getRoom : any[]=[];
    let roomDetail: any[]=[];
    this.getSubject().subscribe(data => {
      getSubject = data;
    })
    this.getTeach().subscribe(data => {
      getTeach = data;
      console.log("GET TEACH", getTeach);
    })
    this.getRoom().subscribe(data=>{
      getRoom = data;
    })

    for (let i = getSubject.length - 1; i >= 0; i--) {
      if (getSubject[i].s_name == subjectName) {
        subjectDetail.push(getSubject[i]);
        console.log("เท่ากันแล้ว", subjectDetail);
        for (let j = getTeach.length - 1; j >= 0; j--) {
          if (getTeach[j].s_no == getSubject[i].s_no){
            teachDetail.push(getTeach[j]);
          console.log("เท่ากันอีกแล้ว", teachDetail);
          for(let k = getRoom.length-1 ; k>=0 ; k--){
            if(getRoom[k].r_no == getTeach[j].r_no){
              roomDetail.push(getRoom[k]);
              console.log("เท่ากันอีกแล้วอ่า อะไรเนี่ย",roomDetail);
            }
          }
          }
        }
      }
    }

    return roomDetail;
  }


  findTaskByRoom(roomNo):any[]{
    let getTask:any[]=[];
    let getRoom : any;
    let roomDetail : any;
    let taskDetail: any[]=[]
    this.getTask().subscribe(data=>{
      getTask = data;
    })
    this.getRoom().subscribe(data=>{
      getRoom = data;
    })

    for(let i = getRoom.length-1 ; i>=0 ; i--){
      if(getRoom[i].r_name == roomNo ){
        roomDetail = roomDetail[i];
        console.log("ROOM NO",roomDetail);
      }
    }

    for(let j = getTask.length-1 ; j>=0 ; j--){
      if(getTask[j].r_no == roomDetail.r_no){
        taskDetail.push(getTask[j]);
        console.log("เสร็จแล้วจ้าาาาาา",taskDetail);
      }
    }
    
    return taskDetail;
  }




}
