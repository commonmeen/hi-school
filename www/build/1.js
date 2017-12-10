webpackJsonp([1],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_task__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskPageModule = (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__t_task__["a" /* TaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__t_task__["a" /* TaskPage */]),
            ],
        })
    ], TaskPageModule);
    return TaskPageModule;
}());

//# sourceMappingURL=t-task.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireModule, FirebaseApp } from 'angularfire2' ;



/**
 * Generated class for the TTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = (function () {
    function TaskPage(navCtrl, navParams, fireBase, storage, provideData, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.storage = storage;
        this.provideData = provideData;
        this.loadingCtrl = loadingCtrl;
        this.taskDetail = { t_name: '' };
        this.teachDetail = [];
        this.subjectDetail = [];
        this.getTeach = [];
        this.getRoom = [];
        this.getSubject = [];
        this.roomDetail = [];
        this.task = [];
        this.storage.ready().then(function () { return _this.storage.get('UserId').then(function (data) {
            _this.userId = data;
            console.log("user idddddddddd", _this.userId);
        }); });
        this.presentLoading();
        this.provideData.getTeach().subscribe(function (data) {
            _this.getTeach = data;
        });
        this.provideData.getRoom().subscribe(function (data) {
            _this.getRoom = data;
        });
        this.provideData.getSubject().subscribe(function (data) {
            _this.getSubject = data;
        });
        setTimeout(function () {
            _this.teacherDetail = _this.provideData.findTeacher(_this.userId);
            console.log("มาแล้วจ้าาาาา Teacher", _this.teacherDetail);
            _this.teachDetail = _this.provideData.findTeachByTeacher(_this.teacherDetail);
            console.log("มาแล้วจ้าาาาา Teach", _this.teachDetail);
            _this.subjectDetail = _this.provideData.findSubjectByTeach(_this.teachDetail);
            console.log("มาแล้วจ้าาาาา Sub", _this.subjectDetail);
        }, 3000);
        console.log("Sub Input", this.subjectInput);
    }
    TaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TTaskPage');
    };
    TaskPage.prototype.showRoom = function () {
        console.log("เข้าสักทีสิโว้ยยยยยยยยยยยยยยยยยยยยยยยยย");
        this.roomDetail = this.provideData.findRoomBySubject(this.subjectInput);
    };
    TaskPage.prototype.showTask = function () {
        this.task = this.provideData.findTaskByRoom(this.roomInput);
    };
    TaskPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    TaskPage.prototype.addTask = function () {
        console.log("ADD");
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-t-task',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\t-task\t-task.html"*/`<!--\n\n  Generated template for the TTaskPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>เลือกวิชา</ion-label>\n\n    <ion-select [(ngModel)]="subjectInput" (ionChange)="showRoom()">\n\n      <ion-option *ngFor="let sub of subjectDetail">{{sub.s_name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-label *ngIf="subjectInput">\n\n    <ion-item>\n\n      <ion-label>เลือกห้องเรียน</ion-label>\n\n      <ion-select [(ngModel)]="roomInput" (ionChange)="showTask()">\n\n        <ion-option *ngFor="let room of roomDetail">{{room.r_name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-label>\n\n\n\n\n\n  \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <ion-label class="taskList">การบ้านทั้งหมด</ion-label> \n\n      </ion-col>\n\n      <ion-col >\n\n        <button ion-button small class="add-button" color="secondary" (click)="addTask()" *ngIf="roomInput" >เพิ่ม</button>\n\n        <button ion-button small class="add-button" color="secondary" *ngIf="!roomInput" style="background-color:#B3B2B2">เพิ่ม</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list *ngFor="let task of task" class="task">\n\n      <ion-item-sliding #item no-lines>\n\n        <ion-item class="task">\n\n          <ion-row no-lines>\n\n            <ion-col >{{task.task_name}}</ion-col>\n\n            <ion-col class="right"> > </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col class="score">เก็บ {{task.score}} คะแนน</ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col class="score">กำหนดส่ง {{task.deadline}}</ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n\n          <button ion-button (click)="editTask(task)" >แก้ไข</button>\n\n          <button ion-button (click)="deleteTask(task.task_no)" color="danger">ลบ</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>`/*ion-inline-end:"D:\Project\hi-school\src\pages\t-task\t-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=t-task.js.map

/***/ })

});
//# sourceMappingURL=1.js.map