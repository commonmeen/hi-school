import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DataProvider {
  teachers: FirebaseListObservable<any[]>;
  students: FirebaseListObservable<any[]>;
  rooms: FirebaseListObservable<any[]>;
  teachs: FirebaseListObservable<any[]>;
  subjects: FirebaseListObservable<any[]>;
  categorys: FirebaseListObservable<any[]>;
  tasks: FirebaseListObservable<any[]>;
  stdTasks : FirebaseListObservable<any[]>;
  teacherDetail: any;
  allTeacher: any[] = [];
  teachForMatch : any[]=[];
  userId: number;

  constructor(public angularfire: AngularFireDatabase, public a: HttpClient) {
  
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
    this.subjects = this.angularfire.list("/Subject");
    return this.subjects;
  }

  getCategory(): FirebaseListObservable<any[]> {
    this.categorys = this.angularfire.list("/Category");
    return this.categorys;
  }

  getTask(): FirebaseListObservable<any[]> {
    this.tasks = this.angularfire.list("/Task");
    return this.tasks;
  }

  getStdTask(): FirebaseListObservable<any[]> {
    this.stdTasks = this.angularfire.list("/StdTask");
    return this.stdTasks;
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

  updateRoom(key: any, value: any) {
    this.getRoom();
    this.rooms.update(key, value);
  }

  updateSubject(key: any, value: any){
    this.getSubject();
    this.subjects.update(key, value);
  }

  updateTask(key: any, value: any){
    this.getTask();
    this.tasks.update(key, value);
  }

  updateStdTask(key: any, value: any){
    this.getStdTask();
    this.stdTasks.update(key, value);
  }

  deleteCategory(key,c_no) {
    let allTask : any[] = [] ;
    let deleteTask : any[] = [] ;
    this.getCategory();
    this.getTask().subscribe(data => {
      allTask = data;
      for(var i = allTask.length-1 ; i>=0; i--){
        if(allTask[i].c_no == c_no){
          deleteTask.push(allTask[i]);
        }
      }
    });

    for(var j = deleteTask.length-1 ; j>=0 ; j--){
      this.deleteTask(deleteTask[j].task_no);
    }
    this.categorys.remove(key);
  }

  deleteTask(task_no){
    let allStdTask: any[] =[];
    let allTask : any[] =[] ;

    this.getStdTask().subscribe(data => {
      allStdTask = data;
    });
    this.getTask().subscribe(data => {
      allTask = data;
    }); 

    for (var y = allStdTask.length -1 ; y>=0 ; y--){
      if (allStdTask[y].task_no == task_no){
        let stdTasksKey = allStdTask[y].$key ;
        this.getStdTask().remove(stdTasksKey);
      }
    }
    for (var z = allTask.length - 1 ; z >= 0 ; z--) {
      if (allTask[z].task_no == task_no) {
        let TaskKey = allTask[z].$key;
        this.getTask().remove(TaskKey); 
        break;
      }
    }
  }

  getCatBySub(subNo: string): any[] {
    let allCategory: any[] = [];
    let listCategory: any[] = [];
    let a: any;
    this.getCategory().subscribe(data => {
      allCategory = data;
      for (var i = allCategory.length - 1; i >= 0; i--) {
        if (allCategory[i].s_no == subNo) {
          if (listCategory.length != 0) {
            let index = listCategory.indexOf(allCategory[i]);
            if (listCategory[0].c_no == allCategory[i].c_no) {
              index = 0;
            }
            if (index > -1) {
              listCategory.splice(index, 1);
            } 
          }
          listCategory.push(allCategory[i]);
        }
      }
    });
    return listCategory;
  }

  getStudentsByRoom(roomNo: string): any[] {
    let allStudent: any[] = [];
    let studentThisRoom: any[] = [];
    this.getStudents().subscribe(data => {
      allStudent = data;
    });

    setTimeout(()=>{
    for (var i = allStudent.length - 1; i >= 0; i--) {
      if (allStudent[i].r_no == roomNo) {
        studentThisRoom.push(allStudent[i]);
      }
      else {
        if (studentThisRoom.length != 0) {
          let index = studentThisRoom.indexOf(allStudent[i]);
          if (index > -1) {
            studentThisRoom.splice(index, 1);
          }
        }
      }
    }
    },1000);
    return studentThisRoom;
  }

  findTeacher(id): any {
    let getTeacher: any[] = []
    let teacherDetail: any;
    this.getTeachers().subscribe(data => {
      getTeacher = data;
    });
    for (let i = getTeacher.length - 1; i >= 0; i--) {      
      if (getTeacher[i].t_no == id) {
        teacherDetail = getTeacher[i];
      }
    }
    return teacherDetail;
  }

  findTeachByTeacher(teacherDetail): any[] {
    let getTeach: any[] = [];
    let teachDetail: any[] = [];
    this.getTeach().subscribe(data => {
      getTeach = data;
    });
    for (let i = getTeach.length - 1; i >= 0; i--) {
      if (getTeach[i].t_no == teacherDetail.t_no) {
        teachDetail.push(getTeach[i]);
      }
    }
    return teachDetail;
  }

  findRoomBySubject(subjectName): any[] {
    let getSubject: any[] = [];
    let subjectDetail: any[] = [];
    let getTeach: any[] = [];
    let teachDetail: any[] = [];
    let getRoom: any[] = [];
    let roomDetail: any[] = [];
    this.getSubject().subscribe(data => {
      getSubject = data;
    });
    this.getTeach().subscribe(data => {
      getTeach = data;
    });
    this.getRoom().subscribe(data => {
      getRoom = data;
    });

    for (let i = getSubject.length - 1; i >= 0; i--) {
      if (getSubject[i].s_name == subjectName) {
        subjectDetail.push(getSubject[i]);
        for (let j = getTeach.length - 1; j >= 0; j--) {
          if (getTeach[j].s_no == getSubject[i].s_no) {
            teachDetail.push(getTeach[j]);
            for (let k = getRoom.length - 1; k >= 0; k--) {
              if (getRoom[k].r_no == getTeach[j].r_no) {
                roomDetail.push(getRoom[k]);
              }
            }
          }
        }
      }
    }
    return roomDetail;
  }


  findTaskByRoom(roomName,subjectName): any[] {
    let getTask: any[] = [];
    let getSubject: any[] = [];
    let getRoom: any[] = [];
    let getCategory: any[] = [];
    let listCatThisSub : any[] = [] ;
    let roomDetail: any;
    let subjectDetail : any;
    let taskDetail: any[] = [];
    
    this.getRoom().subscribe(data => {
      getRoom = data;
    });
    for (let i = getRoom.length - 1; i >= 0; i--) {
      if (getRoom[i].r_name == roomName) {
        roomDetail = getRoom[i];
      }
    }
    
    this.getSubject().subscribe(data => {
      getSubject = data;
    });
    for (let j = getSubject.length - 1; j >= 0; j--) {
      if (getSubject[j].s_name == subjectName) {
        subjectDetail = getSubject[j];
      }
    }

    this.getCategory().subscribe(data => {
      getCategory = data;
    });
    setTimeout(() => {
    for (let k = getCategory.length-1 ; k>=0 ; k--){
      if(getCategory[k].s_no == subjectDetail.s_no){
        listCatThisSub.push(getCategory[k]);
      }
    }
    this.getTask().subscribe(data => {
      getTask = data;
      for (let l = getTask.length - 1; l >= 0; l--) {
        if (getTask[l].r_no == roomDetail.r_no) {
          for(let m =listCatThisSub.length-1 ; m>=0 ; m--){
            if(getTask[l].c_no == listCatThisSub[m].c_no){
              if (taskDetail.length != 0) {
                let index = taskDetail.indexOf(getTask[l]);
                if (taskDetail[0].task_no == getTask[l].task_no) {
                  index = 0;
                }
                if (index > -1) {
                  taskDetail.splice(index, 1);
                }
              }
              taskDetail.push(getTask[l]);
            }
          }
        }
      }
    });
    }, 500);
    return taskDetail;
  }  
}