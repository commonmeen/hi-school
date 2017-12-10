webpackJsonp([6],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARoomPageModule", function() { return ARoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a_room__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ARoomPageModule = (function () {
    function ARoomPageModule() {
    }
    ARoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__a_room__["a" /* RoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__a_room__["a" /* RoomPage */]),
            ],
        })
    ], ARoomPageModule);
    return ARoomPageModule;
}());

//# sourceMappingURL=a-room.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__a_room_detail_a_room_detail__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DataProvider } from '../../providers/data/data' ;

/**
 * Generated class for the ARoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomPage = (function () {
    function RoomPage(navCtrl, navParams, fireBase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireBase = fireBase;
        this.alertCtrl = alertCtrl;
        this.rooms = [];
        fireBase.list("/Room").subscribe(function (data) {
            _this.rooms = data;
        });
    }
    RoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ARoomPage');
    };
    RoomPage.prototype.moveToRoomDetail = function (room) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__a_room_detail_a_room_detail__["a" /* RoomDetailPage */], room);
    };
    RoomPage.prototype.addRoom = function () {
        var newRoom = prompt("New Room");
        var rno;
        var status = 0;
        if (newRoom != '' && newRoom != null) {
            for (var i = this.rooms.length - 1; i >= 0; i--) {
                console.log("roomloop");
                if (newRoom == this.rooms[i].r_name) {
                    var alert_1 = this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: newRoom + " มีอยู่ในรายการแล้ว",
                        buttons: ['OK']
                    });
                    alert_1.present();
                    status = 1;
                    console.log();
                    break;
                }
            }
            if (status == 0) {
                rno = parseInt(this.rooms[this.rooms.length - 1].r_no);
                rno += 1;
                var add = { r_name: newRoom, r_no: rno, stdCount: 0 };
                this.fireBase.list("/Room").push(add);
            }
        }
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a-room',template:/*ion-inline-start:"D:\Project\hi-school\src\pages\a-room\a-room.html"*/`<!--\n  Generated template for the ARoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title ><img src="pic/logo.png" class="logo"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-row>\n		<ion-col>\n			<p>ห้องเรียน</p> \n		</ion-col>\n		<ion-col class="right">\n			<button ion-button small (click)="addRoom()"> เพิ่มห้องเรียน </button>\n		</ion-col>\n	</ion-row>\n	<ion-row class="listRoom" *ngFor="let room of rooms">\n		<ion-col col-7 (click)="moveToRoomDetail(room)"> \n			{{room.r_name}}  \n		</ion-col>\n		<ion-col class="right" (click)="moveToRoomDetail(room)">\n			{{room.stdCount}}\n		</ion-col>\n	</ion-row>\n</ion-content>\n`/*ion-inline-end:"D:\Project\hi-school\src\pages\a-room\a-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=a-room.js.map

/***/ })

});
//# sourceMappingURL=6.js.map