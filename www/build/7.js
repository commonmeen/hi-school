webpackJsonp([7],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMatchPageModule", function() { return AMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a_match__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AMatchPageModule = (function () {
    function AMatchPageModule() {
    }
    AMatchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__a_match__["a" /* MatchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__a_match__["a" /* MatchPage */]),
            ],
        })
    ], AMatchPageModule);
    return AMatchPageModule;
}());

//# sourceMappingURL=a-match.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_match_teacher_add_match_teacher__ = __webpack_require__(227);
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
 * Generated class for the AMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchPage = (function () {
    function MatchPage(navCtrl, navParams, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.allTeachs = [];
        this.allTeachers = [];
        this.allSubjects = [];
        this.allRooms = [];
        this.teachs = [];
        data.getTeach().subscribe(function (data) {
            _this.allTeachs = data;
        });
        data.getTeachers().subscribe(function (data) {
            _this.allTeachers = data;
        });
        data.getSubject().subscribe(function (data) {
            _this.allSubjects = data;
        });
        data.getRoom().subscribe(function (data) {
            _this.allRooms = data;
        });
        setTimeout(function () {
            _this.getDateForThisPage();
        }, 3000);
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AMatchPage');
    };
    MatchPage.prototype.addTeach = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_match_teacher_add_match_teacher__["a" /* AddMatchTeacherPage */]);
    };
    MatchPage.prototype.removeTeach = function () {
    };
    MatchPage.prototype.getDateForThisPage = function () {
        for (var i = this.allTeachs.length - 1; i >= 0; i--) {
            var r_name;
            var s_name;
            var teacher;
            // console.log("loop teach");
            for (var j = this.allTeachers.length - 1; j >= 0; j--) {
                // console.log("loop teacher");
                if (this.allTeachs[i].t_no == this.allTeachers[j].t_no) {
                    // console.log("if teacher");
                    for (var k = this.allSubjects.length - 1; k >= 0; k--) {
                        if (this.allTeachs[i].s_no == this.allSubjects[k].s_no) {
                            for (var l = this.allRooms.length - 1; l >= 0; l--) {
                                if (this.allTeachs[i].r_no == this.allRooms[l].r_no) {
                                    r_name = this.allRooms[l].r_name;
                                    // console.log("ได้ room");
                                    break;
                                }
                            }
                            s_name = this.allSubjects[k].s_name;
                            // console.log("ได้ subject");
                            break;
                        }
                    }
                    teacher = this.allTeachers[j];
                    // console.log("ได้ teacher");
                    break;
                }
            }
            var t = { teacher: teacher, s_name: s_name, r_name: r_name };
            this.teachs.push(t);
            console.log("push แล้ว", this.teachs);
        }
        console.log("teachs", this.teachs);
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a-match',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\a-match\a-match.html"*/`<!--\n  Generated template for the AMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n	<ion-row>\n		<ion-col>\n			<p>ข้อมูลการจัดการสอน</p>\n		</ion-col>\n		<ion-col class="right">\n			<button ion-button small (click)="addTeach()"> จัดการสอนเพิ่ม </button>\n		</ion-col>\n	</ion-row>\n	<ion-row *ngFor="let t of teachs">\n		<ion-col col-10>\n		<ion-label class="name"> {{t.teacher.t_no}} {{t.teacher.t_name}} {{t.teacher.t_surname}}</ion-label>\n		<ion-label class="detail"> {{t.s_name}}, {{t.r_name}} </ion-label>\n		</ion-col>\n		<ion-col (click)="removeTeach(t)"> \n			<ion-icon name="remove-circle" color="danger" center class=\'iconRemove\'></ion-icon>\n		</ion-col>\n	</ion-row>\n	<hr>\n<!-- 	<ion-row>\n		<ion-col>\n			<p>ครูที่ยังไม่มีวิชาสอน</p>\n		</ion-col>\n	</ion-row>\n	<hr>\n	<ion-row>\n		<ion-col>\n			<p>วิชาที่ยังไม่มีครูสอน</p>\n		</ion-col>\n	</ion-row> -->\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\a-match\a-match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=a-match.js.map

/***/ })

});
//# sourceMappingURL=7.js.map