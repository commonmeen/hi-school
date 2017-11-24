webpackJsonp([2],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile_teacher_profile__ = __webpack_require__(113);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile_teacher_profile__ = __webpack_require__(111);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(204);
=======
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD


var HomePage = (function () {
    function HomePage(alertCtrl, navCtrl, navParams, angularfire) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.status = 0;
        // this.teacherList = angularfire.list('/teacher');
        // this.studentList = angularfire.list('/student');
        // this.parentList = angularfire.list('/parent');
        angularfire.list('/Teacher').subscribe(function (data) {
            _this.teacherList = data;
            console.dir(_this.teacherList + " lenght = " + _this.teacherList.length);
        });
        angularfire.list('/student').subscribe(function (data) {
            _this.studentList = data;
        });
        angularfire.list('/parent').subscribe(function (data) {
            _this.parentList = data;
        });
    }
    HomePage.prototype.checkUser = function () {
        if (this.username == 'admin') {
            if (this.pass == 'admin') {
                console.log(this.pass + '11');
                this.status = 4;
                console.log("admin");
            }
            else {
                this.status = 0;
                console.log("admin fail");
            }
        }
        else {
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
            for (var j = this.studentList.length - 1; j >= 0; j--) {
                if (this.studentList[j].Std_No == this.username) {
                    if (this.studentList[j].password == this.pass) {
                        this.status = 2;
                        console.log("student");
                    }
                    break;
                }
            }
            for (var k = this.parentList.length - 1; k >= 0; k--) {
                if (this.parentList[k].p_no == this.username) {
                    if (this.parentList[k].password == this.pass) {
                        this.status = 3;
                        console.log("parent");
                    }
                    break;
                }
            }
        }
        if (this.status == 0) {
            this.presentAlert();
            console.log(this.username + 'login unsuccessful');
        }
        else if (this.status == 1) {
            this.moveToTeacher();
            console.log(this.username + 'login successful');
        }
        else if (this.status == 2) {
        }
        else if (this.status == 3) {
        }
        else if (this.status == 4) {
        }
        else {
        }
    };
    HomePage.prototype.moveToTeacher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_profile_teacher_profile__["a" /* TeacherProfilePage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/logo.png" class="logo" >\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<form (ngSubmit)="checkUser()">\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col>\n\n					Username :\n\n				</ion-col>\n\n				<ion-col>\n\n					<ion-input type="text" [(ngModel)]="username" name=\'username\' placeholder="username"></ion-input>\n\n				</ion-col>\n\n			</ion-row>\n\n\n\n			<ion-row>\n\n				<ion-col>\n\n					Password :\n\n				</ion-col>\n\n				<ion-col>\n\n					<ion-input type="password" [(ngModel)]="pass" name=\'pass\' placeholder="password"></ion-input>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n		<button ion-button type="submit">Login</button>\n\n	</form>\n\n    \n\n \n\n</ion-content>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
=======
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.moveToTeacher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_profile_teacher_profile__["a" /* TeacherProfilePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Meen\Project\hi-school\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-item>\n\n    <ion-input type="text" name="username" placeholder="Username"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input type="text" name="password" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button (click)="moveToTeacher()" class="login-button">Login</button>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Meen\Project\hi-school\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherProfileDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(86);
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
            _this.teacherDetail = data;
        });
    }
    TeacherProfileDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-profile-detail',template:/*ion-inline-start:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/`<!--\n  Generated template for the TeacherProfileDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <img src="pic/logo.png" class="logo">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="pic/girl.png" class="t-profile">\n  <br><br>\n  <ion-list >\n    <ion-item >\n      ชื่อ-นามสกุล \n      <p>สมศรี เรียนดี</p>\n    </ion-item>\n    <ion-item>\n      ประจำชั้น\n      <p>ม.1/1</p>\n    </ion-item>\n    <ion-item>\n      เลขประจำตัวประชาชน\n      <p>1104887397234</p>\n    </ion-item>\n    <ion-item>\n      เลขประจำตัวครู\n      <p>448756</p>\n    </ion-item>\n    <ion-item>\n      เพศ\n      <p>หญิง</p>\n    </ion-item>\n    <ion-item>\n      วันเกิด\n      <p>19/9/1984</p>\n    </ion-item>\n    <ion-item>\n      ที่อยู่\n      <p>55/234 บางมด กทม.</p>\n    </ion-item>\n    <ion-item>\n      อีเมลล์\n      <p>somsri@gmail.com</p>\n    </ion-item>\n    <ion-item>\n      เบอร์โทรศัพท์\n      <p>0876382671</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], TeacherProfileDetailPage);
    return TeacherProfileDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=teacher-profile-detail.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(86);
=======
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(214);
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
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
 * Generated class for the TeacherProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherProfilePage = (function () {
    function TeacherProfilePage(navCtrl, navParams, fireBase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.teachers = [];
        fireBase.list('/Teacher').subscribe(function (data) {
            _this.teachers = data;
        });
        for (var i = 0; i == this.teachers.length - 1; i++) {
            if (this.teachers[i].t_no == this.userId) {
                this.teacherDetail = this.teachers[i];
            }
        }
    }
    TeacherProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherProfilePage');
    };
    TeacherProfilePage.prototype.moveToProfileDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */]);
    };
    TeacherProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-teacher-profile',template:/*ion-inline-start:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/`<!--\n  Generated template for the TeacherProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar >\n    <ion-title ><img src="pic/logo.png" class="logo">\n    </ion-title>\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card style="text-align:center" *ngFor="let t of teacherDetail">\n      <img src="pic/girl.png" class="t-profile"><br>\n      <p >Hello!</p>\n      <p >{{t.t_name}}</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6><button ion-button (click)="moveToProfileDetail()">ประวัติส่วนตัว</button></ion-col>\n          <ion-col col-6><button ion-button>ให้คะแนน</button></ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-card><br>\n\n  \n  \n  \n</ion-content>\n`/*ion-inline-end:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
=======
<<<<<<< HEAD
            selector: 'page-teacher-profile',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/`<!--\n\n  Generated template for the TeacherProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n  <ion-navbar >\n\n    <ion-title ><img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n    \n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card style="text-align:center">\n\n      <img src="pic/girl.png" class="t-profile"><br>\n\n      <p >Hello!</p>\n\n      <p > ครู สมศรี </p>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6><button ion-button>ประวัติส่วนตัว</button></ion-col>\n\n          <ion-col col-6><button ion-button>ให้คะแนน</button></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </ion-card><br>\n\n\n\n  <ion-list>\n\n    <ion-item>วิชาภาษอังกฤษ</ion-item>\n\n    <ion-item>วิชาภาษอังกฤษ</ion-item>\n\n  </ion-list>\n\n  \n\n  \n\n</ion-content>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
=======
            selector: 'page-teacher-profile',template:/*ion-inline-start:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/`<!--\n  Generated template for the TeacherProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar >\n    <ion-title ><img src="pic/logo.png" class="logo">\n    </ion-title>\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card style="text-align:center">\n      <img src="pic/girl.png" class="t-profile"><br>\n      <p >Hello!</p>\n      <p > ครู สมศรี </p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6><button ion-button (click)="moveToProfileDetail()">ประวัติส่วนตัว</button></ion-col>\n          <ion-col col-6><button ion-button>ให้คะแนน</button></ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-card><br>\n\n  \n  \n  \n</ion-content>\n`/*ion-inline-end:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile\teacher-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
    ], TeacherProfilePage);
    return TeacherProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=teacher-profile.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/teacher-profile-detail/teacher-profile-detail.module": [
		316,
		1
	],
	"../pages/teacher-profile/teacher-profile.module": [
<<<<<<< HEAD
		315,
=======
		317,
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 216:
=======
<<<<<<< HEAD
=======
/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherProfileDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
 * Generated class for the TeacherProfileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherProfileDetailPage = (function () {
    function TeacherProfileDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherProfileDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherProfileDetailPage');
    };
    TeacherProfileDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher-profile-detail',template:/*ion-inline-start:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/`<!--\n  Generated template for the TeacherProfileDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <img src="pic/logo.png" class="logo">\n    </ion-title>\n    <button ion-button class="edit-button">Edit</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="pic/girl.png" class="t-profile">\n  <br><br>\n  <ion-list >\n    <ion-item >\n      ชื่อ \n      <p>สมศรี</p>\n    </ion-item>\n    <ion-item>\n      ประจำชั้น\n      <p>ม.1/1</p>\n    </ion-item>\n    <ion-item>\n      เลขประจำตัวประชาชน\n      <p>1104887397234</p>\n    </ion-item>\n    <ion-item>\n      เลขประจำตัวครู\n      <p>448756</p>\n    </ion-item>\n    <ion-item>\n      เพศ\n      <p>หญิง</p>\n    </ion-item>\n    <ion-item>\n      วันเกิด\n      <p>19/9/1984</p>\n    </ion-item>\n    <ion-item>\n      ที่อยู่\n      <p>55/234 บางมด กทม.</p>\n    </ion-item>\n    <ion-item>\n      อีเมลล์\n      <p>somsri@gmail.com</p>\n    </ion-item>\n    <ion-item>\n      เบอร์โทรศัพท์\n      <p>0876382671</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"C:\Users\Meen\Project\hi-school\src\pages\teacher-profile-detail\teacher-profile-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], TeacherProfileDetailPage);
    return TeacherProfileDetailPage;
    var _a, _b;
}());

//# sourceMappingURL=teacher-profile-detail.js.map

/***/ }),

>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
/***/ 215:
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_profile_teacher_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(112);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(108);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_profile_teacher_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(314);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_profile_teacher_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_teacher_profile_detail_teacher_profile_detail__ = __webpack_require__(214);
>>>>>>> 616ce6b70a5b906f9ca34aca98e441dc71e88e8d
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacher_profile_teacher_profile__["a" /* TeacherProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/teacher-profile-detail/teacher-profile-detail.module#TeacherProfileDetailPageModule', name: 'TeacherProfileDetailPage', segment: 'teacher-profile-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-profile/teacher-profile.module#TeacherProfilePageModule', name: 'TeacherProfilePage', segment: 'teacher-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */],
=======
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
>>>>>>> 985dda4d30e751f44e3fc63b17343d83e4ac9b07
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacher_profile_teacher_profile__["a" /* TeacherProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_teacher_profile_detail_teacher_profile_detail__["a" /* TeacherProfileDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(111);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\hi-school\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-play-outline"></ion-tab>\n\n    \n\n  </ion-tabs>\n\n  `/*ion-inline-end:"D:\Project\hi-school\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map