webpackJsonp([22],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_teacher_all_teacher__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_admin_all_admin__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TeacherProfilePage } from '../teacher-profile/teacher-profile';





var HomePage = (function () {
    function HomePage(alertCtrl, navCtrl, navParams, angularfire, storage) {
        // this.teacherList = angularfire.list('/teacher');
        // this.studentList = angularfire.list('/student');
        // 	this.parentList = angularfire.list('/parent');
        // 	this.status = 0 ;
        //    this.username = "";
        // this.pass= "";
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.storage = storage;
        this.username = "";
        this.pass = "";
        this.status = 0;
        angularfire.list('/Teacher').subscribe(function (data) {
            _this.teacherList = data;
            //console.dir(this.teacherList+" lenght = "+this.teacherList.length);
        });
        angularfire.list('/student').subscribe(function (data) {
            _this.studentList = data;
        });
        angularfire.list('/parent').subscribe(function (data) {
            _this.parentList = data;
        });
        angularfire.list('/Admin').subscribe(function (data) {
            _this.adminList = data;
            // console.log("11111");
        });
    }
    HomePage.prototype.checkUser = function () {
        this.status = 0;
        console.log(this.adminList.length);
        for (var x = this.adminList.length - 1; x >= 0; x--) {
            console.log(this.adminList[x].a_no);
            if (this.adminList[x].name == this.username) {
                if (this.adminList[x].a_password == this.pass) {
                    this.status = 4;
                    console.log("admin");
                }
                break;
            }
        }
        if (this.status == 0) {
            console.log(this.teacherList.length);
            for (var i = this.teacherList.length - 1; i >= 0; i--) {
                console.log(this.teacherList[i].t_no);
                if (this.teacherList[i].t_no == this.username) {
                    if (this.teacherList[i].password == this.pass) {
                        this.status = 1;
                        console.log("teacher");
                    }
                    break;
                }
            }
        }
        //  for (var j = this.studentList.length - 1; j >= 0; j--) {
        //    if(this.studentList[j].Std_No == this.username){
        //    	if(this.studentList[j].password == this.pass){
        //    		this.status = 2;
        //    		console.log("student");
        //    	}
        //    	break ;
        //    }
        //  }
        //  for (var k = this.parentList.length - 1; k >= 0; k--) {
        //    if(this.parentList[k].p_no == this.username){
        //    	if(this.parentList[k].password == this.pass){
        //    		this.status = 3;
        //    		console.log("parent");
        //    	}
        //    	break ;
        //  	}	
        // }
        console.log(this.status + ' Status');
        if (this.status == 0) {
            this.presentAlert();
            console.log(this.username + 'login unsuccessful');
        }
        else if (this.status == 1) {
            this.storage.set('UserId', this.username);
            this.moveToTeacher(this.username);
            console.log(this.username + 'login successful');
        }
        else if (this.status == 2) {
        }
        else if (this.status == 3) {
        }
        else if (this.status == 4) {
            this.storage.set('admin', this.username);
            this.moveToAdmin();
            console.log('Admin' + this.username + 'login successful');
        }
        else {
        }
    };
    HomePage.prototype.moveToTeacher = function (aa) {
        console.log(aa + 'is username');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__all_teacher_all_teacher__["a" /* AllTeacherPage */], aa);
    };
    HomePage.prototype.moveToAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__all_admin_all_admin__["a" /* AllAdminPage */]);
    };
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Invalid Username or Password',
            buttons: ['Try Again']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar name=HomePage>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n	<form (ngSubmit)="checkUser()">\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col col-5>\n\n					<ion-label>Username :</ion-label> \n\n				</ion-col>\n\n				<ion-col col-7>\n\n					<ion-input type="text" [(ngModel)]="username" name=\'username\' placeholder="username"></ion-input>\n\n				</ion-col>\n\n			</ion-row>\n\n\n\n			<ion-row>\n\n				<ion-col col-5>\n\n					<ion-label>Password :</ion-label> \n\n				</ion-col>\n\n				<ion-col col-7>\n\n					<ion-input type="password" [(ngModel)]="pass" name=\'pass\' placeholder="password"></ion-input>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n		<button ion-button type="submit"  block>Login</button>\n\n	</form>\n\n    \n\n</ion-content>\n\n\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchSubjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_match_room_add_match_room__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddMatchSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMatchSubjectPage = (function () {
    function AddMatchSubjectPage(navCtrl, navParams, data, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.allSubject = [];
        this.showSubject = [];
        this.teach = this.navParams.data;
        data.getSubject().subscribe(function (data) {
            _this.allSubject = data;
        });
        for (var i = this.allSubject.length - 1; i >= 0; i--) {
            var s = { s_no: this.allSubject[i].s_no, s_name: this.allSubject[i].s_name, credit: this.allSubject[i].credit, status: false };
            this.showSubject.push(s);
            console.log("push s");
        }
        console.log(this.chooseSubject);
    }
    AddMatchSubjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMatchSubjectPage');
    };
    AddMatchSubjectPage.prototype.chooseThis = function (subject) {
        if (subject.status == true) {
            this.chooseSubject = subject;
            console.log("change in", this.chooseSubject);
        }
        else {
            this.chooseSubject = undefined;
            console.log("change out", this.chooseSubject);
        }
    };
    AddMatchSubjectPage.prototype.moveToSelectRoom = function () {
        if (this.chooseSubject) {
            var t = { teacher: this.teach, subject: this.chooseSubject };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_match_room_add_match_room__["a" /* AddMatchRoomPage */], t);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'ไม่สามารถดำเนินการได้',
                subTitle: 'โปรดเลือกวิชาที่ต้องการให้ "' + this.teach.t_name + '" สอน',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    AddMatchSubjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-match-subject',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\add-match-subject\add-match-subject.html"*/`<!--\n  Generated template for the AddMatchSubjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n    <ion-buttons end>\n    <button ion-button icon-left (click)="moveToSelectRoom()">Next</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row>\n  		<ion-col>เลือกวิชา</ion-col>\n  		<ion-col>ผู้สอน : {{teach.t_name}}</ion-col>\n  	</ion-row>\n  	<ion-item *ngFor="let subject of showSubject">\n  		<ion-label *ngIf="subject">{{subject.s_no}} {{subject.s_name}} ({{subject.credit}} หน่วยกิต)</ion-label>\n  		<ion-checkbox *ngIf="!chooseSubject && !subject.status" disabled="false" [(ngModel)]="subject.status" (ionChange)="chooseThis(subject)"></ion-checkbox>\n		<ion-checkbox *ngIf="chooseSubject && subject.status" [(ngModel)]="subject.status" (ionChange)="chooseThis(subject)"></ion-checkbox>\n  		<ion-checkbox *ngIf="chooseSubject && !subject.status" [(ngModel)]="subject.status" disabled=\'true\' (ionChange)="chooseThis(subject)"></ion-checkbox>\n  	</ion-item>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\add-match-subject\add-match-subject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddMatchSubjectPage);
    return AddMatchSubjectPage;
}());

//# sourceMappingURL=add-match-subject.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddMatchRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMatchRoomPage = (function () {
    function AddMatchRoomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddMatchRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMatchRoomPage');
    };
    AddMatchRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-match-room',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\add-match-room\add-match-room.html"*/`<!--\n  Generated template for the AddMatchRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add match room</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\add-match-room\add-match-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddMatchRoomPage);
    return AddMatchRoomPage;
}());

//# sourceMappingURL=add-match-room.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddToRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddToRoomPage = (function () {
    function AddToRoomPage(navCtrl, navParams, data, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.events = events;
        this.allStudent = [];
        this.allTeacher = [];
        this.studentNoRoom = [];
        this.studentInRoom = [];
        this.teacherInRoom = [];
        this.status = 0;
        this.teacherCount = 0;
        this.studentCount = 0;
        this.wantToAddTeacher = [];
        this.wantToAddStudent = [];
        this.wantToRemoveTeacher = [];
        this.wantToRemoveStudent = [];
        this.params = navParams.data;
        this.teacherCount = this.params.teacherCount;
        this.status = this.params.status;
        this.studentInRoom = this.params.studentInRoom;
        this.teacherInRoom = this.params.teacherInRoom;
        this.room = this.params.room;
        this.studentNoRoom = [];
        if (this.studentInRoom) {
            this.studentCount = this.studentInRoom.length;
        }
        console.log("tIn", this.teacherInRoom);
        console.log("sIn", this.studentInRoom);
        if (this.teacherCount == 1) {
            this.teacherInRoom.splice(1, 1);
        }
        else if (this.teacherCount == 0) {
            this.teacherInRoom.splice(0, 2);
        }
        if (this.status == 2) {
            data.getStudents().subscribe(function (data) {
                _this.allStudent = data;
                for (var i = _this.allStudent.length - 1; i >= 0; i--) {
                    if (_this.allStudent[i].r_no == "") {
                        //	console.log("re wongwong");
                        var stdNoRoom = { std_no: _this.allStudent[i].std_no, std_name: _this.allStudent[i].std_name, std_surname: _this.allStudent[i].std_surname, std_status: false };
                        _this.studentNoRoom.push(stdNoRoom);
                        console.log("NoRoom", _this.studentNoRoom);
                    }
                    else if (_this.allStudent[i].r_no == null) {
                        console.log("re null");
                        //this.studentThisRoom.push(this.allStudent[i]);
                    }
                }
            });
            if (this.studentInRoom) {
                console.log("เข้า if inroom");
                for (var i = this.studentInRoom.length - 1; i >= 0; i--) {
                    var stdInRoom = { std_no: this.studentInRoom[i].std_no, std_name: this.studentInRoom[i].std_name, std_surname: this.studentInRoom[i].std_surname, std_status: true };
                    // console.log(i);
                    this.studentInRoom.splice(i, 1);
                    this.studentInRoom.push(stdInRoom);
                    this.wantToAddStudent.push(stdInRoom.std_no);
                    console.log("InRoom", this.studentInRoom);
                }
            }
        }
        else if (this.status == 1) {
            data.getTeachers().subscribe(function (data) {
                _this.allTeacher = data;
                for (var i = _this.allTeacher.length - 1; i >= 0; i--) {
                    if (_this.allTeacher[i].r_no == "") {
                        var stdNoRoom = { t_no: _this.allTeacher[i].t_no, t_name: _this.allTeacher[i].t_name, t_surname: _this.allTeacher[i].t_surname, t_status: false };
                        _this.studentNoRoom.push(stdNoRoom);
                    }
                }
            });
            if (this.teacherInRoom) {
                console.log("เข้า if inroom", this.teacherInRoom);
                for (var m = this.allTeacher.length - 1; m >= 0; m--) {
                    console.log("a");
                    for (var j = this.teacherCount - 1; j >= 0; j--) {
                        console.log(this.allTeacher[m].t_no, this.teacherInRoom[j].t_no);
                        if (this.allTeacher[m].t_no == this.teacherInRoom[j].t_no) {
                            console.log("c");
                            var stdInRoom = { t_no: this.allTeacher[m].t_no, t_name: this.allTeacher[m].t_name, t_surname: this.allTeacher[m].t_surname, t_status: true };
                            // console.log(i);
                            this.teacherInRoom.splice(j, 1);
                            this.teacherInRoom.push(stdInRoom);
                            this.wantToAddTeacher.push(stdInRoom.t_no);
                            console.log("InRoom", this.teacherInRoom);
                        }
                    }
                }
            }
        }
        console.log("InRoom again", this.teacherInRoom);
    }
    AddToRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddToRoomPage');
    };
    AddToRoomPage.prototype.updateRoom = function (no, t) {
        console.log(no + " " + t);
        if (this.status == 1) {
            if (t) {
                this.teacherCount++;
                this.wantToAddTeacher.push(no);
                console.log("tikT", this.wantToAddTeacher);
            }
            else {
                this.teacherCount--;
                var i = this.wantToAddTeacher.indexOf(no);
                this.wantToAddTeacher.splice(i, 1);
                this.wantToRemoveTeacher.push(no);
                console.log("tikT", this.wantToAddTeacher);
            }
        }
        else if (this.status == 2) {
            if (t) {
                this.studentCount++;
                this.wantToAddStudent.push(no);
                console.log("tikS", this.wantToAddStudent);
            }
            else {
                this.studentCount--;
                var i = this.wantToAddStudent.indexOf(no);
                this.wantToAddStudent.splice(i, 1);
                this.wantToRemoveStudent.push(no);
                console.log("tikS", this.wantToAddStudent);
            }
        }
    };
    AddToRoomPage.prototype.addToRoom = function () {
        var _this = this;
        if (this.status == 1) {
            for (var i = this.allTeacher.length - 1; i >= 0; i--) {
                // console.log("เข้า teacher แล้วจ้า",this.allStudent[i]);
                for (var l = this.wantToRemoveTeacher.length - 1; l >= 0; l--) {
                    //console.log("เข้า Rstudents แล้วจ้า",this.wantToRemoveStudent[k]);
                    if (this.allTeacher[i].t_no == this.wantToRemoveTeacher[l]) {
                        //console.log("ตรงแล้วจ้า",this.allStudent[i]);
                        var key = this.allTeacher[i].$key;
                        this.allTeacher[i].r_no = "";
                        this.data.updateTeacher(key, this.allTeacher[i]);
                        console.log("แก้แล้วจ้า ลบห้อง", this.allTeacher[i]);
                        this.wantToRemoveTeacher.splice(l, 1);
                    }
                }
                for (var j = this.wantToAddTeacher.length - 1; j >= 0; j--) {
                    if (this.allTeacher[i].t_no == this.wantToAddTeacher[j]) {
                        var key = this.allTeacher[i].$key;
                        this.allTeacher[i].r_no = this.room.r_no;
                        this.data.updateTeacher(key, this.allTeacher[i]);
                        console.log("แก้แล้วจ้า เพิ่มห้อง", this.allTeacher[i]);
                        this.wantToAddTeacher.splice(j, 1);
                        console.log("เหลือ", this.wantToAddTeacher);
                    }
                }
            }
        }
        else if (this.status == 2) {
            for (var m = this.allStudent.length - 1; m >= 0; m--) {
                //console.log("เข้า students แล้วจ้า",this.allStudent[i]);
                for (var k = this.wantToRemoveStudent.length - 1; k >= 0; k--) {
                    //console.log("เข้า Rstudents แล้วจ้า",this.wantToRemoveStudent[k]);
                    if (this.allStudent[m].std_no == this.wantToRemoveStudent[k]) {
                        //console.log("ตรงแล้วจ้า",this.allStudent[i]);
                        var key = this.allStudent[m].$key;
                        this.allStudent[m].r_no = "";
                        this.data.updateStudent(key, this.allStudent[m]);
                        console.log("แก้แล้วจ้า ลบห้อง", this.allStudent[m]);
                        this.wantToRemoveTeacher.splice(k, 1);
                    }
                }
                for (var n = this.wantToAddStudent.length - 1; n >= 0; n--) {
                    //console.log("เข้า Astudents แล้วจ้า",this.wantToAddStudent[j]);
                    if (this.allStudent[m].std_no == this.wantToAddStudent[n]) {
                        //console.log("ตรงแล้วจ้า",this.allStudent[i]);
                        var key = this.allStudent[m].$key;
                        this.allStudent[m].r_no = this.room.r_no;
                        this.data.updateStudent(key, this.allStudent[m]);
                        //console.log("แก้แล้วจ้า",this.allStudent[i]);
                        // let aStd : any = {std_no:this.allStudent[m].std_no,std_name:this.allStudent[m].std_name,std_surname:this.allStudent[m].std_surname,t_status:true}
                        // let aIndex = this.studentNoRoom.indexOf(aStd);
                        this.wantToAddStudent.splice(n, 1);
                        // this.studentNoRoom.splice(aIndex,1);
                        // console.log("แก้แล้วจ้า เพิ่มห้อง",this.allStudent[m]);
                        // if (this.studentInRoom.length != 0) {
                        //   let index = this.studentInRoom.indexOf(this.allStudent[m]);
                        console.log("เหลือ", this.wantToAddStudent);
                        //   console.log("index", index);
                        //   // if (this.studentInRoom[0].std_no == this.allStudent[i].std_no) {
                        //     // index = 0;
                        //   // }
                        //   if (index > -1) {
                        //     this.studentInRoom.splice(index, 1);
                        //     console.log("splice" + this.allStudent[m].std_no + "แล้ว");
                        // }
                        // }
                    }
                }
            }
        }
        var allRoom = [];
        var roomKey;
        this.data.getRoom().subscribe(function (data) {
            allRoom = data;
            for (var z = allRoom.length - 1; z >= 0; z--) {
                if (allRoom[z].r_no == _this.room.r_no) {
                    roomKey = allRoom[z].$key;
                }
            }
        });
        this.room.stdCount = this.studentCount;
        this.data.updateRoom(roomKey, this.room);
        this.navCtrl.pop();
    };
    AddToRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-to-room',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\add-to-room\add-to-room.html"*/`<!--\n  Generated template for the AddToRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add to Room</ion-title>\n    <ion-buttons end>\n    <button ion-button icon-left (click)="addToRoom()">\n      <ion-icon name="save"></ion-icon>\n      save\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n  <ion-col>{{room.r_name}}</ion-col>\n  <ion-col *ngIf="studentInRoom" class=\'right\'> จำนวนนักเรียน {{studentCount}}</ion-col>\n  </ion-row>\n	<ion-item *ngFor="let item of studentNoRoom">\n     <ion-label *ngIf="item.std_no">{{item.std_no}} {{item.std_name}} {{item.std_surname}}</ion-label>\n     <ion-label *ngIf="item.t_no">{{item.t_no}} {{item.t_name}} {{item.t_surname}}</ion-label>\n     <ion-checkbox *ngIf="item.std_no" [(ngModel)]="item.std_status" (ionChange)="updateRoom(item.std_no,item.std_status)"></ion-checkbox>\n     <!-- <ion-item> -->\n     <ion-checkbox *ngIf="item.t_no&&teacherCount>=2&&item.t_status==true" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n     <ion-checkbox *ngIf="item.t_no&&teacherCount>=2&&item.t_status==false" disabled="true" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n    <!--  </ion-item> -->\n    <ion-checkbox *ngIf="item.t_no&&teacherCount<2" disabled="false" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n<!-- \n    <ion-checkbox *ngIf="item.t_no&&teacherCount<2" disabled="false" checked="true" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox> -->\n  </ion-item>\n  <ion-item *ngFor="let item of studentInRoom">\n    <ion-label *ngIf="item.std_no">{{item.std_no}} {{item.std_name}} {{item.std_surname}}</ion-label>\n    <ion-checkbox *ngIf="item.std_no" [(ngModel)]="item.std_status" (ionChange)="updateRoom(item.std_no,item.std_status)"></ion-checkbox>\n  </ion-item>\n\n  <ion-item *ngFor="let item of teacherInRoom">\n    <ion-label *ngIf="item">{{item.t_no}} {{item.t_name}} {{item.t_surname}}</ion-label>\n    <ion-checkbox *ngIf="item.t_no&&teacherCount>=2&&item.t_status==true" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n    <ion-checkbox *ngIf="item.t_no&&teacherCount<2" disabled="false" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n     <ion-checkbox *ngIf="item.t_no&&teacherCount>=2&&item.t_status==false" disabled="true" [(ngModel)]="item.t_status" (ionChange)="updateRoom(item.t_no,item.t_status)"></ion-checkbox>\n  </ion-item>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\add-to-room\add-to-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AddToRoomPage);
    return AddToRoomPage;
}());

//# sourceMappingURL=add-to-room.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminAddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAddStudentPage = (function () {
    function AdminAddStudentPage(builder, navCtrl, navParams, fireBase) {
        var _this = this;
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.lastStudent = [];
        this.students = this.fireBase.list('/Student');
        this.addForm = this.builder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'surname': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'gender': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'tel': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        fireBase.list('/Student').subscribe(function (data) {
            _this.lastStudent = data;
            _this.lastStudentNo = parseInt(_this.lastStudent[_this.lastStudent.length - 1].std_no);
            _this.lastStudentNo++;
            console.log('cno มาแล้วจ้า', _this.lastStudentNo);
        });
    }
    AdminAddStudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAddStudentPage');
    };
    AdminAddStudentPage.prototype.addStudent = function () {
        var newStudent = { std_no: this.lastStudentNo,
            std_name: this.name, std_surname: this.surname, r_no: '',
            tel: this.tel, gender: this.gender, password: '12345678' };
        this.students.push(newStudent);
        this.navCtrl.pop();
    };
    AdminAddStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-add-student',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\admin-add-student\admin-add-student.html"*/`<!--\n  Generated template for the AdminAddStudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Student</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form [formGroup]="addForm" (ngSubmit)="addStudent()">\n    <ion-item>\n      <ion-label>ชื่อ</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>นามสกุล</ion-label>\n      <ion-input type="text" formControlName="surname" [(ngModel)]="surname"></ion-input>\n    </ion-item>\n    <ion-list radio-group formControlName="gender" [(ngModel)]="gender">\n      <ion-label>เพศ</ion-label>\n      <ion-item>\n      <ion-label>ชาย</ion-label>\n      <ion-radio value="Male">Male</ion-radio>\n      </ion-item>\n      <ion-item>\n      <ion-label>หญิง</ion-label>\n      <ion-radio value="Female">Female</ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label>เบอร์โทร</ion-label>\n      <ion-input type="number" formControlName="tel" [(ngModel)]="tel"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col><button ion-button type="submit" >เพิ่ม</button></ion-col>\n      <ion-col><button ion-button  navPop >ยกเลิก</button></ion-col>\n    </ion-row>\n    \n    \n  </form>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\admin-add-student\admin-add-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AdminAddStudentPage);
    return AdminAddStudentPage;
}());

//# sourceMappingURL=admin-add-student.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AllAdminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllAdminPage = (function () {
    function AllAdminPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.adminProfileRoot = 'AdminProfilePage';
        this.aRoomRoot = 'RoomPage';
        this.aSubjectRoot = 'SubjectPage';
        this.aMatchRoot = 'MatchPage';
    }
    AllAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-admin',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\all-admin\all-admin.html"*/`<ion-tabs>\n    <ion-tab [root]="adminProfileRoot" tabTitle="Home" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="aRoomRoot" tabTitle="Room" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="aSubjectRoot" tabTitle="Subject" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="aMatchRoot" tabTitle="Match" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n `/*ion-inline-end:"D:\Project\hi-school\src\pages\all-admin\all-admin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AllAdminPage);
    return AllAdminPage;
}());

//# sourceMappingURL=all-admin.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminAddTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAddTeacherPage = (function () {
    function AdminAddTeacherPage(builder, navCtrl, navParams, fireBase) {
        var _this = this;
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.lastTeacher = [];
        this.teachers = this.fireBase.list('/Teacher');
        this.addForm = this.builder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'surname': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'national': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'tel': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        fireBase.list('/Teacher').subscribe(function (data) {
            _this.lastTeacher = data;
            _this.lastTeacherNo = parseInt(_this.lastTeacher[_this.lastTeacher.length - 1].t_no);
            _this.lastTeacherNo++;
            console.log('cno มาแล้วจ้า', _this.lastTeacherNo);
        });
    }
    AdminAddTeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAddTeacherPage');
    };
    AdminAddTeacherPage.prototype.addTeacher = function () {
        var newTeacher = { t_no: this.lastTeacherNo, t_name: this.name,
            t_surname: this.surname, r_no: '', national_id: this.national,
            email: this.email, tel: this.tel, password: '12345678' };
        this.teachers.push(newTeacher);
        this.navCtrl.pop();
    };
    AdminAddTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-add-teacher',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\admin-add-teacher\admin-add-teacher.html"*/`<!--\n  Generated template for the AdminAddTeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Teacher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form [formGroup]="addForm" (ngSubmit)="addTeacher()">\n    <ion-item>\n      <ion-label>ชื่อ</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>นามสกุล</ion-label>\n      <ion-input type="text" formControlName="surname" [(ngModel)]="surname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>เลขประจำตัวประชาชน</ion-label>\n      <ion-input type="number" formControlName="national" [(ngModel)]="national"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>เบอร์โทร</ion-label>\n      <ion-input type="number" formControlName="tel" [(ngModel)]="tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>อีเมลล์</ion-label>\n      <ion-input type="email" formControlName="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col><button ion-button type="submit" >เพิ่ม</button></ion-col>\n      <ion-col><button ion-button  navPop >ยกเลิก</button></ion-col>\n    </ion-row>\n    \n    \n  </form>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\admin-add-teacher\admin-add-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AdminAddTeacherPage);
    return AdminAddTeacherPage;
}());

//# sourceMappingURL=admin-add-teacher.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
/**
 * Generated class for the AllTeacherPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllTeacherPage = (function () {
    // aa : string ;
    function AllTeacherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tHomeRoot = 'TeacherProfilePage';
        this.tTaskRoot = 'TaskPage';
        this.tCategoryRoot = 'CategoryPage';
        // this.aa = navParams.data ;
        // console.log(this.aa + "aa ngi");
    }
    AllTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-teacher',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\all-teacher\all-teacher.html"*/`<ion-tabs>\n\n    <ion-tab [root]="tHomeRoot" tabTitle="Home" tabIcon="ios-home"></ion-tab>\n\n    <ion-tab [root]="tTaskRoot" tabTitle="Task" tabIcon="ios-document"></ion-tab>\n\n    <ion-tab [root]="tCategoryRoot" tabTitle="Category" tabIcon="ios-list"></ion-tab>\n\n    \n\n</ion-tabs>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\all-teacher\all-teacher.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AllTeacherPage);
    return AllTeacherPage;
}());

//# sourceMappingURL=all-teacher.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TCategoryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TCategoryDetailPage } from '../t-category-detail/t-category-detail';





/**
 * Generated class for the TCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TCategoryAddPage = (function () {
    function TCategoryAddPage(navCtrl, navParams, builder, fireBase, toastCtrl, provideData, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.fireBase = fireBase;
        this.toastCtrl = toastCtrl;
        this.provideData = provideData;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.categorys = [];
        this.getc_no = [];
        this.totalPercent = 0;
        this.listCategory = [];
        this.params = this.navParams.data;
        this.s_no = this.params.s_no;
        this.listCategory = this.params.list;
        console.log("Percent Pars", this.listCategory);
        console.log(this.s_no);
        this.connectFirebase = this.fireBase.list('/Category');
        this.addForm = this.builder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'percent': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        fireBase.list('/Category').subscribe(function (data) {
            _this.getc_no = data;
            console.log('Cno', _this.getc_no.length);
            _this.cno = parseInt(_this.getc_no[_this.getc_no.length - 1].c_no);
            _this.cno += 1;
        });
        this.categoryDetail = this.params.list;
        console.log("hellooooooooooooooooooooooooooooooooooooooooooooooo", this.categoryDetail);
        for (var k = this.listCategory.length - 1; k >= 0; k--) {
            this.totalPercent += parseInt(this.listCategory[k].c_percent);
            console.log("Total Percent111111111111111", this.totalPercent);
        }
    }
    TCategoryAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TCategoryAddPage');
    };
    TCategoryAddPage.prototype.addCat = function () {
        var percent = parseInt(this.percent);
        var checkPercent = this.totalPercent + percent;
        console.log("total", this.percent);
        console.log("TOTAL PER", this.totalPercent);
        console.log("check per", checkPercent);
        if (checkPercent > 100) {
            var alert_1 = this.alertCtrl.create({
                title: 'ไม่สามารถเพิ่มหมวดหมู่งานได้',
                subTitle: 'เปอร์เซ้นต์รวมของหมวดหมู่งานเกิน 100',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (this.categoryDetail.$key == null) {
                var newCat = { c_no: this.cno, c_name: this.name, c_percent: this.percent, s_no: this.s_no };
                this.connectFirebase.push(newCat);
                this.navCtrl.pop();
                var toast = this.toastCtrl.create({
                    message: 'เพิ่มหมวดหมู่สำเร็จ!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                console.log("keyyyyyyyyyyyyyyyyyyyyy", this.categoryDetail.$key);
                var newCat = { c_no: this.categoryDetail.c_no, c_name: this.name, c_percent: this.percent, s_no: this.s_no };
                console.log("นิววววววว", newCat);
                var k = this.categoryDetail.$key;
                this.provideData.updateCategory(k, newCat);
                this.navCtrl.pop();
                var toast = this.toastCtrl.create({
                    message: 'แก้ไขหมวดหมู่สำเร็จ!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }
    };
    TCategoryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-t-category-add',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\t-category-add\t-category-add.html"*/`<!--\n\n  Generated template for the TCategoryAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="addForm" (ngSubmit)="addCat()">\n\n    <ion-item>\n\n      <ion-label>ชื่อหมวดหมู่</ion-label>\n\n      <ion-input type="text" formControlName="name" [(ngModel)]="name" value={{categoryDetail.c_name}}></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>เปอร์เซ็นต์</ion-label>\n\n      <ion-input type="number" formControlName="percent" [(ngModel)]="percent" value={{categoryDetail.c_percent}}></ion-input>\n\n    </ion-item>\n\n    <ion-grid>\n\n      <ion-row class="enterButton">\n\n        <ion-col col-6><button ion-button type="submit" >ตกลง</button></ion-col>\n\n        <ion-col col-6><button ion-button  navPop >ยกเลิก</button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n    \n\n    \n\n  </form>\n\n</ion-content>`/*ion-inline-end:"D:\Project\hi-school\src\pages\t-category-add\t-category-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], TCategoryAddPage);
    return TCategoryAddPage;
}());

//# sourceMappingURL=t-category-add.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/a-match/a-match.module": [
		337,
		7
	],
	"../pages/a-room-detail/a-room-detail.module": [
		341,
		21
	],
	"../pages/a-room/a-room.module": [
		343,
		6
	],
	"../pages/a-subject/a-subject.module": [
		342,
		5
	],
	"../pages/add-match-room/add-match-room.module": [
		338,
		20
	],
	"../pages/add-match-subject/add-match-subject.module": [
		339,
		19
	],
	"../pages/add-match-teacher/add-match-teacher.module": [
		340,
		18
	],
	"../pages/add-subject/add-subject.module": [
		344,
		17
	],
	"../pages/add-to-room/add-to-room.module": [
		345,
		16
	],
	"../pages/admin-add-student/admin-add-student.module": [
		346,
		15
	],
	"../pages/admin-add-teacher/admin-add-teacher.module": [
		348,
		14
	],
	"../pages/admin-add-user/admin-add-user.module": [
		357,
		13
	],
	"../pages/admin-profile/admin-profile.module": [
		349,
		4
	],
	"../pages/all-admin/all-admin.module": [
		347,
		12
	],
	"../pages/all-teacher/all-teacher.module": [
		354,
		11
	],
	"../pages/t-category-add/t-category-add.module": [
		350,
		10
	],
	"../pages/t-category-detail/t-category-detail.module": [
		351,
		9
	],
	"../pages/t-category/t-category.module": [
		355,
		3
	],
	"../pages/t-task-add/t-task-add.module": [
		352,
		2
	],
	"../pages/t-task/t-task.module": [
		353,
		1
	],
	"../pages/teacher-profile-detail/teacher-profile-detail.module": [
		356,
		8
	],
	"../pages/teacher-profile/teacher-profile.module": [
		358,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_match_subject_add_match_subject__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddMatchTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMatchTeacherPage = (function () {
    function AddMatchTeacherPage(navCtrl, navParams, data, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.allTeachers = [];
        this.showTeachers = [];
        data.getTeachers().subscribe(function (data) {
            _this.allTeachers = data;
        });
        for (var i = this.allTeachers.length - 1; i >= 0; i--) {
            var t = { t_no: this.allTeachers[i].t_no, t_name: this.allTeachers[i].t_name, t_surname: this.allTeachers[i].t_surname, status: false };
            this.showTeachers.push(t);
            console.log("push t");
        }
        console.log(this.chooseTeacher);
    }
    AddMatchTeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMatchTeacherPage');
    };
    AddMatchTeacherPage.prototype.moveToSelectSubject = function () {
        if (this.chooseTeacher) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_match_subject_add_match_subject__["a" /* AddMatchSubjectPage */], this.chooseTeacher);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'ไม่สามารถดำเนินการได้',
                subTitle: 'โปรดเลือกครูที่ต้องการ',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    AddMatchTeacherPage.prototype.chooseThis = function (teacher) {
        if (teacher.status == true) {
            this.chooseTeacher = teacher;
            console.log("change in", this.chooseTeacher);
        }
        else {
            this.chooseTeacher = undefined;
            console.log("change out", this.chooseTeacher);
        }
    };
    AddMatchTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-match-teacher',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\add-match-teacher\add-match-teacher.html"*/`<!--\n  Generated template for the AddMatchTeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n    <ion-buttons end>\n    <button ion-button icon-left (click)="moveToSelectSubject()">Next</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row>\n  		<ion-col>เลือกครู</ion-col>\n  	</ion-row>\n  	<ion-item *ngFor="let teacher of showTeachers">\n  		<ion-label *ngIf="teacher">{{teacher.t_no}} {{teacher.t_name}} {{teacher.t_surname}}</ion-label>\n  		<ion-checkbox *ngIf="!chooseTeacher && !teacher.status" disabled="false" [(ngModel)]="teacher.status" (ionChange)="chooseThis(teacher)"></ion-checkbox>\n		<ion-checkbox *ngIf="chooseTeacher && teacher.status" [(ngModel)]="teacher.status" (ionChange)="chooseThis(teacher)"></ion-checkbox>\n  		<ion-checkbox *ngIf="chooseTeacher && !teacher.status" [(ngModel)]="teacher.status" disabled=\'true\' (ionChange)="chooseThis(teacher)"></ion-checkbox>\n  	</ion-item>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\add-match-teacher\add-match-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddMatchTeacherPage);
    return AddMatchTeacherPage;
}());

//# sourceMappingURL=add-match-teacher.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_to_room_add_to_room__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ARoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomDetailPage = (function () {
    function RoomDetailPage(navCtrl, navParams, fireBase, loadingCtrl, data, events, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.loadingCtrl = loadingCtrl;
        this.data = data;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.allTeacher = [];
        this.allStudent = [];
        this.studentThisRoom = [];
        this.teacherCount = 0;
        this.room = navParams.data;
        this.studentThisRoom = this.data.getStudentsByRoom(this.room.r_no);
        //console.log(this.room);
        // setTimeout(()=>{
        // this.events.subscribe('reloadPage1',() => {
        //  this.navCtrl.pop();
        // this.navCtrl.push(RoomDetailPage);
        // });
        data.getTeachers().subscribe(function (data) {
            _this.allTeacher = data;
            // console.log("lazy");
            _this.teacher1 = undefined;
            _this.teacher2 = undefined;
            for (var i = _this.allTeacher.length - 1; i >= 0; i--) {
                // console.log("Loop in roomdetail");
                if (_this.allTeacher[i].r_no == _this.room.r_no) {
                    if (_this.teacher1 != null) {
                        _this.teacher2 = _this.allTeacher[i];
                        _this.teacherCount = 2;
                        console.log("teacher2", _this.allTeacher[i]);
                    }
                    else {
                        _this.teacher1 = _this.allTeacher[i];
                        _this.teacherCount = 1;
                        console.log("teacher1", _this.teacher1);
                    }
                }
            }
        }); //}, 3000);
        //console.log(this.studentThisRoom);
        //  this.presentLoading();
    }
    RoomDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ARoomDetailPage');
    };
    RoomDetailPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    RoomDetailPage.prototype.addTeacherToRoom = function () {
        var t = [this.teacher1, this.teacher2];
        // console.log(this.teacher1,this.teacher2);
        var a = { status: 1, teacherCount: this.teacherCount, teacherInRoom: t, room: this.room };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_to_room_add_to_room__["a" /* AddToRoomPage */], a);
        console.log(a);
    };
    RoomDetailPage.prototype.addStudentToRoom = function () {
        var _this = this;
        var a = { status: 2, studentInRoom: this.studentThisRoom, room: this.room };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_to_room_add_to_room__["a" /* AddToRoomPage */], a);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.studentThisRoom = _this.data.getStudentsByRoom(_this.room.r_no);
        });
        //this.navCtrl.push(AddToRoomPage,a);
    };
    RoomDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a-room-detail',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\a-room-detail\a-room-detail.html"*/`<!--\n  Generated template for the ARoomDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-4>\n				<ion-label class="topic">{{room.r_name}}</ion-label>\n			</ion-col>\n			<ion-col class="right">\n				<button ion-button small *ngIf="teacher2" style="background-color:#B3B2B2" (click)="addTeacherToRoom()"> เปลี่ยนครู </button>\n				<button ion-button small *ngIf="!teacher2" (click)="addTeacherToRoom()"> เพิ่มครู </button>\n				<button ion-button small (click)="addStudentToRoom()"> เพิ่มนักเรียน </button>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-label class="headData">ครูประจำชั้น</ion-label>	\n			</ion-col>\n		</ion-row>\n		<ion-row *ngIf="teacher1">\n			<ion-label> {{teacher1.t_name}} {{teacher1.t_surname}}</ion-label>\n		</ion-row>\n		<ion-row *ngIf="teacher2">\n			<ion-label> {{teacher2.t_name}} {{teacher2.t_surname}}</ion-label>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-label class="headData">รายชื่อนักเรียนในห้อง</ion-label>	\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor="let student of studentThisRoom">\n			<ion-col>\n				<ion-label>\n					{{student.std_name}} {{student.std_surname}}\n				</ion-label>\n			</ion-col>\n		</ion-row>\n	<ion-list>\n\n	</ion-list>\n	</ion-grid>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\a-room-detail\a-room-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], RoomDetailPage);
    return RoomDetailPage;
}()); //

//# sourceMappingURL=a-room-detail.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddSubjectPage = (function () {
    function AddSubjectPage(navCtrl, navParams, data, builder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.builder = builder;
        this.subjects = [];
        this.param = this.navParams.data;
        this.subject = this.param.sub;
        console.log(this.subject);
        if (this.subject == null) {
            this.subject = { s_no: this.param.sno, s_name: '', credit: '' };
        }
        this.addForm = this.builder.group({
            's_no': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            's_name': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'credit': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    AddSubjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSubjectPage');
    };
    AddSubjectPage.prototype.addSub = function () {
        if (this.subject.$key == null) {
            var newSub = { s_no: this.s_no, s_name: this.s_name, credit: this.credit };
            this.data.getSubject().push(newSub);
            console.log("เพิ่มวิชาแล้วจ้าา");
            this.navCtrl.pop();
        }
        else {
            console.log("key", this.subject.$key);
            var newSub = { s_no: this.s_no, s_name: this.s_name, credit: this.credit };
            var k = this.subject.$key;
            this.data.updateSubject(k, newSub);
            this.navCtrl.pop();
        }
    };
    AddSubjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-subject',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\add-subject\add-subject.html"*/`<!--\n  Generated template for the AddSubjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Subject</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="addForm" (ngSubmit)="addSub()">\n    <ion-item>\n      <ion-label>รหัสวิชา</ion-label>\n      <ion-input type="text" formControlName="s_no" [(ngModel)]="s_no" disabled value={{subject.s_no}}></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>ชื่อวิชา</ion-label>\n      <ion-input type="text" formControlName="s_name" [(ngModel)]="s_name" value={{subject.s_name}}></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>หน่วยกิต</ion-label>\n      <ion-input type="number" formControlName="credit" [(ngModel)]="credit" value={{subject.credit}}></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row class="enterButton">\n        <ion-col col-6><button ion-button type="submit" >ตกลง</button></ion-col>\n        <ion-col col-6><button ion-button  navPop >ยกเลิก</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    \n    \n  </form>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\add-subject\add-subject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddSubjectPage);
    return AddSubjectPage;
}());

//# sourceMappingURL=add-subject.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(angularfire, a) {
        this.angularfire = angularfire;
        this.a = a;
        this.allTeacher = [];
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getTeachers = function () {
        this.teachers = this.angularfire.list("/Teacher");
        return this.teachers;
    };
    DataProvider.prototype.getStudents = function () {
        this.students = this.angularfire.list("/Student");
        return this.students;
    };
    DataProvider.prototype.getRoom = function () {
        this.rooms = this.angularfire.list("/Room");
        return this.rooms;
    };
    DataProvider.prototype.getTeach = function () {
        this.teachs = this.angularfire.list("/Teach");
        return this.teachs;
    };
    DataProvider.prototype.getSubject = function () {
        this.subjects = this.angularfire.list("/Subject");
        return this.subjects;
    };
    DataProvider.prototype.getCategory = function () {
        this.categorys = this.angularfire.list("/Category");
        return this.categorys;
    };
    DataProvider.prototype.getTask = function () {
        this.tasks = this.angularfire.list("/Task");
        return this.tasks;
    };
    DataProvider.prototype.updateTeacher = function (key, value) {
        this.getTeachers();
        this.teachers.update(key, value);
    };
    DataProvider.prototype.updateStudent = function (key, value) {
        this.getStudents();
        this.students.update(key, value);
    };
    DataProvider.prototype.updateCategory = function (key, value) {
        this.getCategory();
        this.categorys.update(key, value);
    };
    DataProvider.prototype.updateRoom = function (key, value) {
        this.getRoom();
        this.rooms.update(key, value);
    };
    DataProvider.prototype.updateSubject = function (key, value) {
        this.getSubject();
        this.subjects.update(key, value);
    };
    DataProvider.prototype.updateTeach = function (key, value) {
        this.getTeach();
        this.teachs.update(key, value);
    };
    DataProvider.prototype.deleteCategory = function (key) {
        this.getCategory();
        this.categorys.remove(key);
    };
    DataProvider.prototype.getCatBySub = function (subNo) {
        var allCategory = [];
        var listCategory = [];
        var a;
        this.getCategory().subscribe(function (data) {
            allCategory = data;
            for (var i = allCategory.length - 1; i >= 0; i--) {
                if (allCategory[i].s_no == subNo) {
                    // console.log("ผ่าน subNo แล้ว");
                    if (listCategory.length != 0) {
                        console.log("เข้า !=[]");
                        console.log("listCat", listCategory);
                        var index = listCategory.indexOf(allCategory[i]);
                        console.log("ทำไมไม่พิมพ์เอง", allCategory[i].c_no);
                        console.log("ทำไมไม่พิมพ์เอง", listCategory[0].c_no);
                        if (listCategory[0].c_no == allCategory[i].c_no) {
                            index = 0;
                        }
                        console.log("index", index);
                        if (index > -1) {
                            listCategory.splice(index, 1);
                            console.log("splice" + allCategory[i].c_no + "แล้ว");
                        }
                        else {
                        }
                    }
                    listCategory.push(allCategory[i]);
                }
            }
        });
        return listCategory;
    };
    DataProvider.prototype.getStudentsByRoom = function (roomNo) {
        console.log("เข้า Provider");
        var allStudent = [];
        var studentThisRoom = [];
        this.getStudents().subscribe(function (data) {
            allStudent = data;
            // console.log("lazy");
        });
        for (var i = allStudent.length - 1; i >= 0; i--) {
            //   console.log("Loop in roomdetail");
            if (allStudent[i].r_no == roomNo) {
                // if (studentThisRoom.length != 0) {
                //   let index = studentThisRoom.indexOf(allStudent[i]);
                //   console.log("index detail", index);
                //   // if (this.studentInRoom[0].std_no == this.allStudent[i].std_no) {
                //   //   index = 0;
                //   // }
                //   if (index > -1) {
                //     studentThisRoom.splice(index, 1);
                //     console.log("splice" + allStudent[i].t_no + "แล้ว");
                //     }
                //   }
                studentThisRoom.push(allStudent[i]);
            }
            else {
                if (studentThisRoom.length != 0) {
                    var index = studentThisRoom.indexOf(allStudent[i]);
                    if (index > -1) {
                        studentThisRoom.splice(index, 1);
                        console.log("splice" + allStudent[i].t_no + "แล้ว");
                    }
                }
            }
        }
        console.log("return from providers");
        return studentThisRoom;
    };
    DataProvider.prototype.findTeacher = function (id) {
        var getTeacher = [];
        var teacherDetail;
        this.getTeachers().subscribe(function (data) {
            getTeacher = data;
        });
        // console.log("ooooooooooooooooooooooooooooo",id);
        //console.log("2222222222222222222222222",getTeacher);
        for (var i = getTeacher.length - 1; i >= 0; i--) {
            //console.log("11111111111111111111111111111111");                         //find teacher from user id.
            if (getTeacher[i].t_no == id) {
                teacherDetail = getTeacher[i];
                //console.log("66666666666666666666666666666666666666", teacherDetail);
                break;
            }
        }
        return teacherDetail;
    };
    DataProvider.prototype.findTeachByTeacher = function (teacherDetail) {
        var getTeach = [];
        var teachDetail = [];
        this.getTeach().subscribe(function (data) {
            getTeach = data;
        });
        console.log("เข้าจ้า", teachDetail);
        console.log("เข้าจ้า Teacher", teacherDetail);
        for (var i = getTeach.length - 1; i >= 0; i--) {
            if (getTeach[i].t_no == teacherDetail.t_no) {
                teachDetail.push(getTeach[i]);
                console.log("มาจ้า", teachDetail);
            }
        }
        return teachDetail;
    };
    DataProvider.prototype.findSubjectByTeach = function (teachDetail) {
        var getSubject = [];
        var subjectDetail = [];
        this.getSubject().subscribe(function (data) {
            getSubject = data;
        });
        console.log("รัวๆมา", getSubject);
        for (var i = getSubject.length - 1; i >= 0; i--) {
            for (var j = teachDetail.length - 1; j >= 0; j--) {
                if (getSubject[i].s_no == teachDetail[j].s_no) {
                    subjectDetail.push(getSubject[i]);
                    console.log("มาจ้าkkkkkkkkk", subjectDetail);
                }
            }
        }
        return subjectDetail;
    };
    DataProvider.prototype.findRoomBySubject = function (subjectName) {
        var getSubject = [];
        var subjectDetail = [];
        var getTeach = [];
        var teachDetail = [];
        var getRoom = [];
        var roomDetail = [];
        this.getSubject().subscribe(function (data) {
            getSubject = data;
        });
        this.getTeach().subscribe(function (data) {
            getTeach = data;
            console.log("GET TEACH", getTeach);
        });
        this.getRoom().subscribe(function (data) {
            getRoom = data;
        });
        for (var i = getSubject.length - 1; i >= 0; i--) {
            if (getSubject[i].s_name == subjectName) {
                subjectDetail.push(getSubject[i]);
                console.log("เท่ากันแล้ว", subjectDetail);
                for (var j = getTeach.length - 1; j >= 0; j--) {
                    if (getTeach[j].s_no == getSubject[i].s_no) {
                        teachDetail.push(getTeach[j]);
                        console.log("เท่ากันอีกแล้ว", teachDetail);
                        for (var k = getRoom.length - 1; k >= 0; k--) {
                            if (getRoom[k].r_no == getTeach[j].r_no) {
                                roomDetail.push(getRoom[k]);
                                console.log("เท่ากันอีกแล้วอ่า อะไรเนี่ย", roomDetail);
                            }
                        }
                    }
                }
            }
        }
        return roomDetail;
    };
    DataProvider.prototype.findTaskByRoom = function (roomName) {
        var getTask = [];
        var getRoom;
        var roomDetail;
        var taskDetail = [];
        this.getRoom().subscribe(function (data) {
            getRoom = data;
        });
        for (var i = getRoom.length - 1; i >= 0; i--) {
            console.log("เข้าสิ", roomName);
            if (getRoom[i].r_name == roomName) {
                roomDetail = getRoom[i];
                console.log("ROOM NO", roomDetail);
            }
        }
        this.getTask().subscribe(function (data) {
            getTask = data;
            for (var j = getTask.length - 1; j >= 0; j--) {
                console.log("เข้าสิจ๊ะ");
                if (getTask[j].r_no == roomDetail.r_no) {
                    taskDetail.push(getTask[j]);
                    console.log("เสร็จแล้วจ้าาาาาา", taskDetail);
                }
            }
        });
        return taskDetail;
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_teacher_admin_add_teacher__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_add_student_admin_add_student__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminAddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAddUserPage = (function () {
    function AdminAddUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminAddUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAddUserPage');
    };
    AdminAddUserPage.prototype.Teacher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_add_teacher_admin_add_teacher__["a" /* AdminAddTeacherPage */]);
    };
    AdminAddUserPage.prototype.Student = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_add_student_admin_add_student__["a" /* AdminAddStudentPage */]);
    };
    AdminAddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-add-user',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\admin-add-user\admin-add-user.html"*/`<!--\n  Generated template for the AdminAddUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เพิ่มผู้ใช้</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col> เลือกประเภทของผู้ใช้งาน</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col6>\n				<ion-card (click)=\'Teacher()\'>\n					<img class=\'user\' src=\'pic/teacher.png\'/>\n					<p class=\'textUser\'> คุณครู </p>\n				</ion-card>\n			</ion-col>\n			<ion-col col6>\n				<ion-card (click)=\'Student()\'>\n					<img class=\'user\' src=\'pic/study.png\'/>\n					<p class=\'textUser\'> นักเรียน </p>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\admin-add-user\admin-add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AdminAddUserPage);
    return AdminAddUserPage;
}());

//# sourceMappingURL=admin-add-user.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TCategoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_category_add_t_category_add__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireModule } from 'angularfire2';





/**
 * Generated class for the TCategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TCategoryDetailPage = (function () {
    function TCategoryDetailPage(navCtrl, navParams, alertCtrl, fireBase, provideData, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fireBase = fireBase;
        this.provideData = provideData;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.getCategory = [];
        this.listCategory = [];
        this.teachs = [];
        this.rooms = [];
        this.roomDetail = [];
        this.totalPercent = 0;
        this.balancePercent = 100 - this.totalPercent;
        this.subject = this.navParams.data;
        this.listCategory = this.provideData.getCatBySub(this.subject.s_no);
        provideData.getCategory().subscribe(function (data) {
            _this.getCategory = data;
        });
        fireBase.list('/Teach').subscribe(function (data) {
            _this.teachs = data;
            var _loop_1 = function (i) {
                if (_this.teachs[i].s_no == _this.subject.s_no) {
                    console.log("ตรงกันแล้วจ้า", _this.teachs[i]);
                    fireBase.list('/Room').subscribe(function (data) {
                        _this.rooms = data;
                        for (var j = _this.rooms.length - 1; j >= 0; j--) {
                            if (_this.rooms[j].r_no == _this.teachs[i].r_no) {
                                console.log("correct");
                                _this.roomDetail.push(_this.rooms[j]);
                                console.log("room Detial", _this.roomDetail);
                            }
                        }
                    });
                }
            };
            for (var i = _this.teachs.length - 1; i >= 0; i--) {
                _loop_1(i);
            }
        });
        console.log("Toalllllllll", this.listCategory);
        //this.totalPercent = provideData.getPercent(this.subject.s_no);
        console.log("เข้าแล้วววววววววววววววววว", this.totalPercent);
        setTimeout(function () {
            for (var k = _this.listCategory.length - 1; k >= 0; k--) {
                _this.totalPercent += parseInt(_this.listCategory[k].c_percent);
                console.log("Total Percent", _this.totalPercent);
            }
            _this.balancePercent = 100 - _this.totalPercent;
        }, 1000);
    }
    TCategoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TCategoryDetailPage');
    };
    TCategoryDetailPage.prototype.addCategory = function () {
        var _this = this;
        var a = { s_no: this.subject.s_no, list: this.listCategory };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__t_category_add_t_category_add__["a" /* TCategoryAddPage */], a);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.totalPercent = 0;
            _this.balancePercent = 0;
            setTimeout(function () {
                for (var k = _this.listCategory.length - 1; k >= 0; k--) {
                    _this.totalPercent += parseInt(_this.listCategory[k].c_percent);
                    console.log("Total Percent", _this.totalPercent);
                }
                _this.balancePercent = 100 - _this.totalPercent;
            }, 1000);
        });
    };
    TCategoryDetailPage.prototype.editCategory = function (listCategory) {
        var _this = this;
        var listForPush = { list: listCategory, s_no: this.subject.s_no };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__t_category_add_t_category_add__["a" /* TCategoryAddPage */], listForPush);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.totalPercent = 0;
            _this.balancePercent = 0;
            setTimeout(function () {
                for (var k = _this.listCategory.length - 1; k >= 0; k--) {
                    _this.totalPercent += parseInt(_this.listCategory[k].c_percent);
                    console.log("Total Percent", _this.totalPercent);
                }
                _this.balancePercent = 100 - _this.totalPercent;
            }, 1000);
        });
    };
    TCategoryDetailPage.prototype.deleteCategory = function (c) {
        for (var i = this.getCategory.length - 1; i >= 0; i--) {
            if (this.getCategory[i].c_no == c) {
                this.categoryDetail = this.getCategory[i];
                console.log("มีนหลับไปแล้ว", this.getCategory[i]);
                console.log("มมมม", this.listCategory);
                console.log("ttttt", this.categoryDetail);
                this.key = this.categoryDetail.$key;
                for (var j = this.listCategory.length - 1; j >= 0; j--) {
                    if (this.listCategory[j].c_no == this.categoryDetail.c_no) {
                        this.totalPercent -= parseInt(this.listCategory[j].c_percent);
                        console.log("Total Percent", this.totalPercent);
                        this.balancePercent = 100 - this.totalPercent;
                        this.listCategory.splice(j, 1);
                        break;
                    }
                }
                // let index = this.listCategory.indexOf(this.getCategory[i]);
                // console.log("in จ้าา",index);
                // this.listCategory.splice(index,1);
            }
        }
        this.provideData.deleteCategory(this.key);
    };
    TCategoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-t-category-detail',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\t-category-detail\t-category-detail.html"*/`<!--\n\n  Generated template for the TCategoryDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>วิชา</p>\n\n  <ion-list>\n\n    <ion-item>\n\n      {{subject.s_name}}\n\n        <p *ngFor="let room of roomDetail">{{room.r_name}}</p>\n\n        \n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col col-9 >\n\n        <ion-label>หมวดหมู่งาน</ion-label> \n\n      </ion-col>\n\n      <ion-col >\n\n        <button ion-button small class="add-button" color="secondary" (click)="addCategory()">เพิ่ม</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-list *ngFor=\'let list of listCategory\' class="listCategory" >\n\n      <ion-item-sliding #item no-lines>\n\n        <ion-item no-lines>\n\n          <ion-row>\n\n            <ion-col col-8>{{list.c_name}}</ion-col>\n\n            <ion-col col-2>{{list.c_percent}}%</ion-col>\n\n            <ion-col col-2 class="detail">></ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n\n          <button ion-button (click)="editCategory(list)" >แก้ไข</button>\n\n          <button ion-button (click)="deleteCategory(list.c_no)" color="danger">ลบ</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n      <ion-row class="percent">\n\n        <ion-col>\n\n          {{totalPercent}}%\n\n        </ion-col>\n\n        <ion-col>\n\n          {{balancePercent}}%\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="percentText">\n\n        <ion-col>\n\n          เปอร์เซ็นต์รวม\n\n        </ion-col>\n\n        <ion-col>\n\n          เปอร์เซ็นต์คงเหลือ\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </ion-grid>\n\n    \n\n   \n\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\Project\hi-school\src\pages\t-category-detail\t-category-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], TCategoryDetailPage);
    return TCategoryDetailPage;
}());

//# sourceMappingURL=t-category-detail.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherProfileDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireModule } from 'angularfire2' ;

/**
 * Generated class for the TeacherProfileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherProfileDetailPage = (function () {
    function TeacherProfileDetailPage(navCtrl, navParams, fireBase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        fireBase.list('/Teacher').subscribe(function (data) {
            _this.teachers = data;
        });
        this.teacherDetail = this.navParams.data;
    }
    TeacherProfileDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-profile-detail',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/`<!--\n\n  Generated template for the TeacherProfileDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="pic/girl.png" class="t-profile">\n\n  <br><br>\n\n  <ion-list >\n\n    <ion-item >\n\n      ชื่อ-นามสกุล \n\n      <p>{{teacherDetail.t_name}}  {{teacherDetail.t_surname}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      ประจำชั้น\n\n      <p>{{teacherDetail.r_no}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      เลขประจำตัวประชาชน\n\n      <p>{{teacherDetail.national_id}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      เลขประจำตัวครู\n\n      <p>{{teacherDetail.t_no}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      อีเมลล์\n\n      <p>{{teacherDetail.email}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      เบอร์โทรศัพท์\n\n      <p>{{teacherDetail.tel}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>`/*ion-inline-end:"D:\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TeacherProfileDetailPage);
    return TeacherProfileDetailPage;
}());

//# sourceMappingURL=teacher-profile-detail.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_all_teacher_all_teacher__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_t_category_detail_t_category_detail__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_t_category_add_t_category_add__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_all_admin_all_admin__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_add_user_admin_add_user__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_add_teacher_admin_add_teacher__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_add_student_admin_add_student__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_a_room_detail_a_room_detail__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_to_room_add_to_room__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_subject_add_subject__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_match_teacher_add_match_teacher__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_match_subject_add_match_subject__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_match_room_add_match_room__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var config = {
    apiKey: "AIzaSyA0pHeRyxU_Fx-Ep6_5SgDuZp-Gz84CnMA",
    authDomain: "hi-school-8c626.firebaseapp.com",
    databaseURL: "https://hi-school-8c626.firebaseio.com",
    projectId: "hi-school-8c626",
    storageBucket: "",
    messagingSenderId: "468596081059"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_all_teacher_all_teacher__["a" /* AllTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_t_category_detail_t_category_detail__["a" /* TCategoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_t_category_add_t_category_add__["a" /* TCategoryAddPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_all_admin_all_admin__["a" /* AllAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_add_user_admin_add_user__["a" /* AdminAddUserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_add_teacher_admin_add_teacher__["a" /* AdminAddTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_add_student_admin_add_student__["a" /* AdminAddStudentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_to_room_add_to_room__["a" /* AddToRoomPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_a_room_detail_a_room_detail__["a" /* RoomDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_subject_add_subject__["a" /* AddSubjectPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_match_teacher_add_match_teacher__["a" /* AddMatchTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_match_subject_add_match_subject__["a" /* AddMatchSubjectPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_match_room_add_match_room__["a" /* AddMatchRoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/a-match/a-match.module#AMatchPageModule', name: 'MatchPage', segment: 'a-match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-match-room/add-match-room.module#AddMatchRoomPageModule', name: 'AddMatchRoomPage', segment: 'add-match-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-match-subject/add-match-subject.module#AddMatchSubjectPageModule', name: 'AddMatchSubjectPage', segment: 'add-match-subject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-match-teacher/add-match-teacher.module#AddMatchTeacherPageModule', name: 'AddMatchTeacherPage', segment: 'add-match-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/a-room-detail/a-room-detail.module#ARoomDetailPageModule', name: 'RoomDetailPage', segment: 'a-room-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/a-subject/a-subject.module#ASubjectPageModule', name: 'SubjectPage', segment: 'a-subject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/a-room/a-room.module#ARoomPageModule', name: 'RoomPage', segment: 'a-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-subject/add-subject.module#AddSubjectPageModule', name: 'AddSubjectPage', segment: 'add-subject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-to-room/add-to-room.module#AddToRoomPageModule', name: 'AddToRoomPage', segment: 'add-to-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-add-student/admin-add-student.module#AdminAddStudentPageModule', name: 'AdminAddStudentPage', segment: 'admin-add-student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-admin/all-admin.module#AllAdminPageModule', name: 'AllAdminPage', segment: 'all-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-add-teacher/admin-add-teacher.module#AdminAddTeacherPageModule', name: 'AdminAddTeacherPage', segment: 'admin-add-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-profile/admin-profile.module#AdminProfilePageModule', name: 'AdminProfilePage', segment: 'admin-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/t-category-add/t-category-add.module#TCategoryAddPageModule', name: 'TCategoryAddPage', segment: 't-category-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/t-category-detail/t-category-detail.module#TCategoryDetailPageModule', name: 'TCategoryDetailPage', segment: 't-category-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/t-task-add/t-task-add.module#TTaskAddPageModule', name: 'TTaskAddPage', segment: 't-task-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/t-task/t-task.module#TaskPageModule', name: 'TaskPage', segment: 't-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-teacher/all-teacher.module#AllTeacherPageModule', name: 'AllTeacherPage', segment: 'all-teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/t-category/t-category.module#CategoryPageModule', name: 'CategoryPage', segment: 't-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-profile-detail/teacher-profile-detail.module#TeacherProfileDetailPageModule', name: 'TeacherProfileDetailPage', segment: 'teacher-profile-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-add-user/admin-add-user.module#AdminAddUserPageModule', name: 'AdminAddUserPage', segment: 'admin-add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-profile/teacher-profile.module#TeacherProfilePageModule', name: 'TeacherProfilePage', segment: 'teacher-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_all_teacher_all_teacher__["a" /* AllTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_t_category_detail_t_category_detail__["a" /* TCategoryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_t_category_add_t_category_add__["a" /* TCategoryAddPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_all_admin_all_admin__["a" /* AllAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_add_user_admin_add_user__["a" /* AdminAddUserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_add_teacher_admin_add_teacher__["a" /* AdminAddTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_add_student_admin_add_student__["a" /* AdminAddStudentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_a_room_detail_a_room_detail__["a" /* RoomDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_to_room_add_to_room__["a" /* AddToRoomPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_subject_add_subject__["a" /* AddSubjectPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_match_teacher_add_match_teacher__["a" /* AddMatchTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_match_subject_add_match_subject__["a" /* AddMatchSubjectPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_match_room_add_match_room__["a" /* AddMatchRoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\hi-school\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.js.map