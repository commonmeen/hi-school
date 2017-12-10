webpackJsonp([3],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_category__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__t_category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__t_category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=t-category.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_category_detail_t_category_detail__ = __webpack_require__(231);
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






/**
 * Generated class for the TCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, fireBase, provideData, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.provideData = provideData;
        this.storage = storage;
        this.subjects = [];
        this.subjectDetial = [];
        this.teachs = [];
        this.teachers = [];
        this.teachDetail = this.navParams.data;
        console.log("teacher detail", this.teachDetail);
        provideData.getTeach().subscribe(function (data) {
            _this.teachs = data;
        });
        provideData.getSubject().subscribe(function (data) {
            _this.subjects = data;
        });
        this.storage.ready().then(function () { return _this.storage.get('UserId').then(function (data) {
            _this.userId = data;
            console.log("11111111111111111111111111111", _this.userId);
        }); });
        setTimeout(function () {
            provideData.getTeachers().subscribe(function (data) {
                _this.teachers = data;
            });
            for (var i = _this.teachers.length - 1; i >= 0; i--) {
                if (_this.teachers[i].t_no == _this.userId) {
                    _this.teacherDetail = _this.teachers[i];
                    console.log("66666666666666666666666666666666666666", _this.teacherDetail);
                    console.log("777777777777777777777777,", _this.teachs);
                    break;
                }
            }
            for (var j = _this.teachs.length - 1; j >= 0; j--) {
                if (_this.teachs[j].t_no == _this.teacherDetail.t_no) {
                    _this.teachDetail = _this.teachs[j];
                    console.log("ตรงกันแล้วจ้าาาาาาาา", _this.teachDetail.s_no);
                    for (var k = _this.subjects.length - 1; k >= 0; k--) {
                        console.log("เข้า loop");
                        if (_this.subjects[k].s_no == _this.teachDetail.s_no) {
                            console.log("เข้า if");
                            _this.subjectDetial.push(_this.subjects[k]);
                            console.log("Yeahhhhhhhhhhhhhhh", _this.subjectDetial);
                            break;
                        }
                    }
                }
            }
        }, 3000);
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TCategoryPage');
    };
    CategoryPage.prototype.moveToCategoryDetail = function (sub) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__t_category_detail_t_category_detail__["a" /* TCategoryDetailPage */], sub);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-t-category',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\t-category\t-category.html"*/`<!--\n\n  Generated template for the TCategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="pic/logo.png" class="logo">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list-header>เลือกวิชา</ion-list-header>\n\n  \n\n  <ion-list >\n\n    <ion-item *ngFor="let sub of subjectDetial"  class="listCategory">\n\n      <ion-label no-lines><button ion-button outline (click)="moveToCategoryDetail(sub)">{{sub.s_name}}</button></ion-label>\n\n      <ion-label class="credit">{{sub.credit}} หน่วยกิต</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\Project\hi-school\src\pages\t-category\t-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=t-category.js.map

/***/ })

});
//# sourceMappingURL=3.js.map