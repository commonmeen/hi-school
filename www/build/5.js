webpackJsonp([5],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASubjectPageModule", function() { return ASubjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a_subject__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ASubjectPageModule = (function () {
    function ASubjectPageModule() {
    }
    ASubjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__a_subject__["a" /* SubjectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__a_subject__["a" /* SubjectPage */]),
            ],
        })
    ], ASubjectPageModule);
    return ASubjectPageModule;
}());

//# sourceMappingURL=a-subject.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_subject_add_subject__ = __webpack_require__(229);
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
 * Generated class for the ASubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubjectPage = (function () {
    function SubjectPage(navCtrl, navParams, fireBase, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.data = data;
        this.subjects = [];
        data.getSubject().subscribe(function (data) {
            _this.subjects = data;
        });
    }
    SubjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ASubjectPage');
    };
    SubjectPage.prototype.addSubject = function (sub) {
        if (sub == null) {
            console.log("add");
            var sno = parseInt(this.subjects[this.subjects.length - 1].s_no);
            sno += 1;
            var s = { sub: null, sno: sno };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_subject_add_subject__["a" /* AddSubjectPage */], s);
        }
        else {
            console.log("edit");
            var s = { sub: sub };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_subject_add_subject__["a" /* AddSubjectPage */], s);
        }
    };
    SubjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a-subject',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\a-subject\a-subject.html"*/`<!--\n  Generated template for the ASubjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row>\n		<ion-col>\n			<p>วิชา</p> \n		</ion-col>\n		<ion-col class="right">\n			<button ion-button small (click)="addSubject()"> เพิ่มวิชาเรียน </button>\n		</ion-col>\n	</ion-row>\n	<ion-row class="headListSub">\n		<ion-col col-3>\n			รหัสวิชา\n		</ion-col>\n		<ion-col>\n			ชื่อวิชา\n		</ion-col>\n		<ion-col class="right">\n			หน่วยกิต\n		</ion-col>\n	</ion-row>\n	<ion-row class="listSub" *ngFor="let subject of subjects">\n		<ion-col col-3>\n			{{subject.s_no}}\n		</ion-col>\n		<ion-col col-7 (click)="addSubject(subject)"> \n			{{subject.s_name}}  \n		</ion-col>\n		<ion-col class="right" (click)="addSubject(subject)">\n			{{subject.credit}}\n		</ion-col>\n	</ion-row>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\a-subject\a-subject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], SubjectPage);
    return SubjectPage;
}());

//# sourceMappingURL=a-subject.js.map

/***/ })

});
//# sourceMappingURL=5.js.map