webpackJsonp([4],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePageModule", function() { return AdminProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_profile__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminProfilePageModule = (function () {
    function AdminProfilePageModule() {
    }
    AdminProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_profile__["a" /* AdminProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_profile__["a" /* AdminProfilePage */]),
            ],
        })
    ], AdminProfilePageModule);
    return AdminProfilePageModule;
}());

//# sourceMappingURL=admin-profile.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_user_admin_add_user__ = __webpack_require__(230);
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
 * Generated class for the AdminProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminProfilePage = (function () {
    function AdminProfilePage(navCtrl, navParams, storage, loadingCtrl, fireBase, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.fireBase = fireBase;
        this.app = app;
        this.name = '';
        this.teachers = [];
        this.students = [];
        this.count = 0;
        this.tcount = 0;
        this.scount = 0;
        //  this.count = 0 ;
        this.storage.ready().then(function () { return _this.storage.get('admin').then(function (data) {
            _this.name = data;
        }); });
        fireBase.list('/Teacher').subscribe(function (data) {
            _this.teachers = data;
            _this.tcount = _this.teachers.length;
            _this.calCount();
        });
        fireBase.list('/Student').subscribe(function (data) {
            _this.students = data;
            _this.scount = _this.students.length;
            _this.calCount();
        });
    }
    AdminProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminProfilePage');
    };
    AdminProfilePage.prototype.moveToAddUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_add_user_admin_add_user__["a" /* AdminAddUserPage */]);
    };
    AdminProfilePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    AdminProfilePage.prototype.calCount = function () {
        this.count = this.teachers.length + this.students.length;
    };
    AdminProfilePage.prototype.logout = function () {
        this.storage.clear();
        // this.app.getRootNav().setRoot(HomePage);
        // this.app.getRootNav().pop();
        // this.app.unregisterRootNav(this.app.getRootNavById('n5'));
        // console.log(this.app.getRootNavs())
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.app.getRootNav().popToRoot();
        // console.log(this.app.getRootNav().popToRoot(HomePage));
    };
    AdminProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-profile',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\admin-profile\admin-profile.html"*/`<!--\n\n  Generated template for the AdminProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar >\n\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n\n    <button ion-button small outline style="color:#ffff" class="logout" (click)="logout()">Logout</button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card style="text-align:center">\n\n      <img src="pic/girl.png" class="t-profile"><br>\n\n      <p >Hello!</p>\n\n      <p >Admin {{name}}</p>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col><button ion-button (click)="moveToAddUser()"><ion-icon name="add"></ion-icon>เพิ่มผู้ใช้</button></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </ion-card><br>\n\n  <ion-card style="text-align:center">\n\n    <ion-grid>\n\n    	<ion-row>\n\n    		<ion-col><p>จำนวนผู้ใช้ทั้งหมด</p><p class="data">{{count}}</p></ion-col>\n\n    	</ion-row>\n\n    	<br>\n\n        <ion-row>\n\n        	<ion-col col6><p>จำนวนครู</p><p class="data">{{tcount}}</p></ion-col>\n\n        	<ion-col col6><p>จำนวนนักเรียน</p><p class="data">{{scount}}</p></ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\admin-profile\admin-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AdminProfilePage);
    return AdminProfilePage;
}());

// private get _navCtrl(): NavController {
//         return this._app.getRootNav();
//     }
//# sourceMappingURL=admin-profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map