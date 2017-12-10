webpackJsonp([0],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfilePageModule", function() { return TeacherProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherProfilePageModule = (function () {
    function TeacherProfilePageModule() {
    }
    TeacherProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacher_profile__["a" /* TeacherProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacher_profile__["a" /* TeacherProfilePage */]),
            ],
        })
    ], TeacherProfilePageModule);
    return TeacherProfilePageModule;
}());

//# sourceMappingURL=teacher-profile.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(113);
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
 * Generated class for the TeacherProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherProfilePage = (function () {
    function TeacherProfilePage(navCtrl, navParams, fireBase, storage, loadingCtrl, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.teachers = [];
        this.teacherDetail = { t_name: '' };
        //   console.log(navParams.data);
        this.storage.ready().then(function () { return _this.storage.get('UserId').then(function (data) {
            _this.userId = data;
        }); });
        this.presentLoading();
        setTimeout(function () {
            fireBase.list('/Teacher').subscribe(function (data) {
                _this.teachers = data;
            });
            _this.findDataTeacher();
            console.log(_this.teacherDetail + 'detail con');
        }, 3000);
        this.teacherDetail.t_name = 'wait';
        console.log(this.teacherDetail);
        // this.navCtrl.push(CategoryPage,this.teacherDetail)   //push teacher to category for show the subject list.
    }
    TeacherProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherProfilePage');
    };
    TeacherProfilePage.prototype.moveToProfileDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */], this.teacherDetail);
    };
    TeacherProfilePage.prototype.findDataTeacher = function () {
        console.log(this.userId + 'userID3');
        for (var i = this.teachers.length - 1; i >= 0; i--) {
            console.log(i);
            console.log(this.teachers[i].t_no);
            if (this.teachers[i].t_no == this.userId) {
                this.teacherDetail = this.teachers[i];
                console.log(this.teacherDetail);
                break;
            }
        }
    };
    TeacherProfilePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    TeacherProfilePage.prototype.logout = function () {
        this.storage.clear();
        console.log(this.app.getRootNav());
        //this.app.getRootNav().popToRoot();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        //this.navCtrl.push(HomePage);
        //this.app.getRootNavs[0].popToRoot();
        //this.app.getRootNav().popToRoot();
    };
    TeacherProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-profile',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/`<!--\n\n  Generated template for the TeacherProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n  <ion-navbar >\n\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n\n    <button ion-button small outline style="color:#ffff" class="logout" (click)="logout()">Logout</button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card style="text-align:center">\n\n      <img src="pic/girl.png" class="t-profile"><br>\n\n      <p >Hello!</p>\n\n      <p >{{teacherDetail.t_name}}  {{teacherDetail.t_surname}}</p>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6><button ion-button (click)="moveToProfileDetail()">ประวัติส่วนตัว</button></ion-col>\n\n          <ion-col col-6><button ion-button>ให้คะแนน</button></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </ion-card><br>\n\n\n\n  \n\n  \n\n  \n\n</ion-content>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TeacherProfilePage);
    return TeacherProfilePage;
}());

//# sourceMappingURL=teacher-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map