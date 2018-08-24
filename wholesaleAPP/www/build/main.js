webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__ = __webpack_require__(13);
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
 * Generated class for the AddressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressListPage = /** @class */ (function () {
    // addrPostParams = {
    //   addressId:"",
    //   regionId1: "",
    //   regionId2: "",
    //   regionId3: "",
    //   regionId4: "",
    //   regionId5: "",
    //   regionName1: "",
    //   regionName2: "",
    //   regionName3: "",
    //   regionName4: "",
    //   regionName5: "",
    //   address: "",
    //   phone: "",
    //   linkMan: ""
    // };
    function AddressListPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.addrparams = { id: Math.random() };
        this.addressId = -1;
    }
    AddressListPage.prototype.ionViewDidLoad = function () {
        this.getAddr();
    };
    AddressListPage.prototype.goAddr = function (item) {
        // console.log("item=" + item);
        if (item) {
            this.addrPostParams = new __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__["a" /* AddrPostParams */](item.AddressId || 0, item.RegionId1 || 0, item.RegionId2 || 0, item.RegionId3 || 0, item.RegionId4 || 0, item.RegionId5 || 0, item.Name1 || "", item.Name2 || "", item.Name3 || "", item.Name4 || "", item.Name5 || "", item.Address || "", item.Phone || "", item.LinkMan || "", 1);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */], this.addrPostParams);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
        }
        // if (this.addrPostParams) {
        //   this.addrPostParams.addressId = item.AddressId;
        //   this.addrPostParams.regionId1 = item.RegionId1;
        //   this.addrPostParams.regionId2 = item.RegionId2;
        //   this.addrPostParams.regionId3 = item.RegionId3;
        //   this.addrPostParams.regionId4 = item.RegionId4;
        //   this.addrPostParams.regionId5 = item.RegionId5;
        //   this.addrPostParams.regionName1 = item.Name1;
        //   this.addrPostParams.regionName2 = item.Name2;
        //   this.addrPostParams.regionName3 = item.Name3;
        //   this.addrPostParams.regionName4 = item.Name4;
        //   this.addrPostParams.regionName5 = item.Name5;
        //   this.addrPostParams.address = item.Address;
        //   this.addrPostParams.phone = item.Phone;
        //   this.addrPostParams.linkMan = item.LinkMan;
        //   this.navCtrl.push(AddressPage,this.addrPostParams);
        //   // this.service.addrPostParamsEvent.emit(this.addrPostParams);
        // }
    };
    AddressListPage.prototype.getAddr = function () {
        var _this = this;
        this.service.getAddress(this.addrparams).then(function (data) {
            _this.addressList = data;
        });
    };
    AddressListPage.prototype.goFillOrder = function (item) {
        if (item) {
            this.addrPostParams = new __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__["a" /* AddrPostParams */](item.AddressId || 0, item.RegionId1 || 0, item.RegionId2 || 0, item.RegionId3 || 0, item.RegionId4 || 0, item.RegionId5 || 0, item.Name1 || "", item.Name2 || "", item.Name3 || "", item.Name4 || "", item.Name5 || "", item.Address || "", item.Phone || "", item.LinkMan || "", 1);
        }
        this.service.addrPostParamsEvent.emit(this.addrPostParams);
        this.navCtrl.pop();
    };
    AddressListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address-list',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\address-list\address-list.html"*/'<!--\n  Generated template for the AddressListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>选择收货地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-grid style="padding: 0px;">\n      <ion-item style="padding: 0px;" *ngFor="let address of addressList">\n        <ion-row style="padding: 0px;">\n          <ion-col style="padding: 0px;" col-9 (click)="goFillOrder(address)">\n            \n            <h2>{{address.LinkMan}} {{address.Phone}}<ion-badge item-end color="danger" *ngIf="address.isDefault==1">默认</ion-badge></h2>\n            <p>{{address.Name1}}{{address.Name2}}{{address.Name3}}{{address.Name4}}{{address.Name5}}\n              <br>{{address.Address}}</p>\n          </ion-col>\n          <ion-col col-3 text-end style="padding: 0px;">\n            <button ion-button icon-only clear item-end (click)="goAddr(address)" style="padding: 0px;">\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full (click)="goAddr()">\n      <ion-icon name="add">新建收货地址</ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\address-list\address-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], AddressListPage);
    return AddressListPage;
}());

//# sourceMappingURL=address-list.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
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
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.hiddenAddr = true;
        this.addrAreas = "";
        this.addrParams = {
            regionId1: 0,
            regionId2: 0,
            regionId3: 0,
            regionId4: 0,
            regionId5: 0,
            address: "",
            phone: "",
            linkMan: "",
            isDefault: 0
        };
        this.addrNameParams = {
            address: "",
            phone: "",
            linkMan: "",
            regionName: ""
        };
        this.defaultAddr = false;
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.addrIdEvent.subscribe(function (data) {
            _this.addrPostParams.regionId1 = data[1];
            _this.addrPostParams.regionId2 = data[2];
            _this.addrPostParams.regionId3 = data[3];
            // this.addrPostParams.regionId4 = data[4];
            // this.addrPostParams.regionId5 = data[5];
        });
        this.service.addrNameEvent.subscribe(function (data) {
            _this.addrAreas = "";
            for (var i = 0; i < 4; i++) {
                _this.addrAreas += data[i];
            }
            _this.addrPostParams.regionName1 = data[0];
            _this.addrPostParams.regionName2 = data[1];
            _this.addrPostParams.regionName3 = data[2];
            _this.addrPostParams.regionName4 = "";
            _this.addrPostParams.regionName5 = "";
            _this.addrNameParams.regionName = _this.addrAreas;
        });
        this.addrPostParams = new __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["a" /* AddrPostParams */](this.navParams.get("addressId") || 0, this.navParams.get("regionId1") || 0, this.navParams.get("regionId2") || 0, this.navParams.get("regionId3") || 0, this.navParams.get("regionId4") || 0, this.navParams.get("regionId5") || 0, this.navParams.get("regionName1") || "", this.navParams.get("regionName2") || "", this.navParams.get("regionName3") || "", this.navParams.get("regionName4") || "", this.navParams.get("regionName5") || "", this.navParams.get("address"), this.navParams.get("phone") || "", this.navParams.get("linkMan") || "", this.defaultAddr ? 1 : 0);
        this.addrParams.linkMan = this.navParams.get("linkMan") || "";
        this.addrParams.phone = this.navParams.get("phone") || "";
        this.addrParams.address = this.navParams.get("address") || "";
        this.addrParams.regionId1 = this.addrPostParams.regionId1;
        this.addrParams.regionId2 = this.addrPostParams.regionId2;
        this.addrParams.regionId3 = this.addrPostParams.regionId3;
        this.addrParams.regionId4 = this.addrPostParams.regionId4;
        this.addrParams.regionId5 = this.addrPostParams.regionId5;
        // this.addrPostParams.address = this.navParams.get("address");
        // this.addrPostParams.addressId = this.navParams.get("addressId") || 0;
        // this.addrPostParams.linkMan = this.navParams.get("linkMan") || "";
        // this.addrPostParams.phone = this.navParams.get("phone") || "";
        // this.addrPostParams.regionId1 = this.navParams.get("regionId1") || 0;
        // this.addrPostParams.regionId2 = this.navParams.get("regionId2") || 0;
        // this.addrPostParams.regionId3 = this.navParams.get("regionId3") || 0;
        // this.addrPostParams.regionId4 = this.navParams.get("regionId4") || 0;
        // this.addrPostParams.regionId5 = this.navParams.get("regionId5") || 0;
        // this.addrPostParams.regionName1 = this.navParams.get("regionName1") || "";
        // this.addrPostParams.regionName2 = this.navParams.get("regionName2") || "";
        // this.addrPostParams.regionName3 = this.navParams.get("regionName3") || "";
        // this.addrPostParams.regionName4 = this.navParams.get("regionName4") || "";
        // this.addrPostParams.regionName5 = this.navParams.get("regionName5") || "";
        this.addrAreas = this.addrPostParams.regionName1
            + this.addrPostParams.regionName2
            + this.addrPostParams.regionName3
            + this.addrPostParams.regionName4
            + this.addrPostParams.regionName5;
        this.service.addrPostParamsEvent.emit(this.addrPostParams);
        // console.log("this.addrAreas="+this.addrAreas);
    };
    AddressPage.prototype.showArea = function () {
        this.service.hiddenAddrEvent.emit(false);
    };
    AddressPage.prototype.addAddr = function () {
        var _this = this;
        console.log("this.addrParams.address=" + this.addrParams.address);
        this.addrPostParams.address = this.addrParams.address;
        this.addrPostParams.linkMan = this.addrParams.linkMan;
        this.addrPostParams.phone = this.addrParams.phone;
        this.service.addAddress(this.addrPostParams).then(function (data) {
            _this.service.addrPostParamsEvent.emit(_this.addrPostParams);
            // this.navCtrl.popTo(this.navCtrl.getByIndex(1));
            // for (let index = 0; index < this.navCtrl.getViews().length; index++) {
            //   const element = this.navCtrl.getByIndex(index);
            //   console.log("view="+index+"-"+element.name);
            // }
            _this.popToPage(_this.navCtrl, "FillOrderPage");
        });
    };
    AddressPage.prototype.setDefault = function () {
        // console.log("this.defaultAddr="+this.defaultAddr);
        this.defaultAddr = !this.defaultAddr;
        this.addrPostParams.isDefault = this.defaultAddr ? 1 : 0;
    };
    AddressPage.prototype.popToPage = function (navCtrl, pageName) {
        var _this = this;
        navCtrl.getViews().forEach(function (item) {
            if (item.name == pageName) {
                _this.navCtrl.popTo(item);
            }
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\address\address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>新建收货地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">收&nbsp;&nbsp;货&nbsp;&nbsp;人</ion-label>\n      <ion-input maxlength="50" placeholder="请输入姓名" clearInput="true" [(ngModel)]="addrParams.linkMan"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label color="primary">手机号码</ion-label>\n      <ion-input type="number" placeholder="请输入" clearInput="true"  [(ngModel)]="addrParams.phone"></ion-input>\n    </ion-item>\n    <ion-item (click)="showArea()">\n        <ion-icon name="more" item-end (click)="showArea()"></ion-icon>\n      <ion-label color="primary">所在地区</ion-label>\n      <ion-input placeholder="请选择" value="{{addrAreas}}" readonly="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">详细地址</ion-label>\n      <ion-textarea maxlength="200" placeholder="街道、楼牌号等" clearInput="true" [(ngModel)]="addrParams.address"></ion-textarea>\n    </ion-item>\n  \n  </ion-list>\n  <ion-item>\n    <ion-label>设为默认地址</ion-label>\n    <ion-toggle checked="{{defaultAddr}}" (click)="setDefault()"></ion-toggle>\n  </ion-item>\n  <ion-area [hiddenAddr]="hiddenAddr" ></ion-area>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <button ion-button full (click)="addAddr()">\n        <ion-icon name="save">保存并使用</ion-icon>\n      </button>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_list_address_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_result__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_ok_result_ok__ = __webpack_require__(51);
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
 * Generated class for the FillOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FillOrderPage = /** @class */ (function () {
    function FillOrderPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.addrParams = {
            // regionId1:"",
            // regionId2 :"",
            // regionId3 :"",
            // regionId4 :"",
            // regionId5 :"",
            regionName: "",
            address: "",
            phone: "",
            linkMan: "",
            addressId: 0
        };
        this.params = {
            id: Math.random()
        };
        this.sumPiece = 0;
        this.sumPrice = 0;
        this.sumPiece = navParams.get("sumPiece") || 0;
        this.sumPrice = navParams.get("sumPrice") || 0;
    }
    FillOrderPage.prototype.ionViewDidLoad = function () {
        // console.log('this.navParams.get("address")=' + this.navParams.get("address"));
        // this.addrParams.linkMan = "梁鸿铮222";
        var _this = this;
        if (!this.navParams.get("address")) {
            this.service.getDefaultAddress(this.params).then(function (data) {
                if (data != "") {
                    _this.addrParams.regionName = data[0].Name1 + data[0].Name2 + data[0].Name3 + data[0].Name4 + data[0].Name5;
                    _this.addrParams.address = data[0].Address;
                    _this.addrParams.phone = data[0].Phone;
                    _this.addrParams.linkMan = data[0].LinkMan;
                    _this.addrParams.addressId = data[0].AddressId;
                }
            });
        }
        else {
            this.addrParams.address = this.navParams.get("address") || '';
            this.addrParams.phone = this.navParams.get("phone") || '';
            this.addrParams.linkMan = this.navParams.get("linkMan") || '';
            this.addrParams.regionName = this.navParams.get("regionName1") + this.navParams.get("regionName2") + this.navParams.get("regionName3") + this.navParams.get("regionName4") + this.navParams.get("regionName5") || '';
            this.addrParams.addressId = this.navParams.get("addressId") || 0;
        }
        this.service.addrPostParamsEvent.subscribe(function (data) {
            _this.addrParams.regionName = data.regionName1 + data.regionName2 + data.regionName3 + data.regionName4 + data.regionName5;
            _this.addrParams.address = data.address;
            _this.addrParams.phone = data.phone;
            _this.addrParams.linkMan = data.linkMan;
        });
        this.service.getPayType(this.params).then(function (data) {
            _this.payTypes = data;
        });
    };
    FillOrderPage.prototype.goAddressList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_list_address_list__["a" /* AddressListPage */]);
    };
    FillOrderPage.prototype.convertOrder = function () {
        var _this = this;
        this.payParams = new __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__["d" /* PayParams */](1, 0, this.payType, this.addrParams.address, this.addrParams.phone, this.addrParams.linkMan, "", 0, this.addrParams.addressId, 0, "sys");
        if (!this.addrParams.address) {
            this.showAlert('信息不完整', '请选择一个收货地址');
            return;
        }
        if (!this.payType) {
            this.showAlert('信息不完整', '请选择一个付款方式');
            return;
        }
        this.service.convertOrder(this.payParams).then(function (data) {
            var dataResult = JSON.parse(JSON.stringify(data));
            if (dataResult[0][0].pramCode == 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__result_result__["a" /* ResultPage */], { data: data });
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__result_ok_result_ok__["a" /* ResultOkPage */], { data: data });
            }
        });
    };
    FillOrderPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    FillOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fill-order',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\fill-order\fill-order.html"*/'<!--\n  Generated template for the FillOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-item style="padding: 0">\n        <ion-icon name="mail"> 收货地址</ion-icon>\n        <button ion-button icon-only clear item-end icon-end (click)="goAddressList()">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      {{addrParams.linkMan}} {{addrParams.phone}}\n      <br> {{addrParams.regionName}}\n      <br> {{addrParams.address}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-item style="padding: 0">\n        <ion-label> <ion-icon name="card"> 支付方式</ion-icon></ion-label>\n        <ion-select [(ngModel)]="payType" multiple="false" cancelText="取消" okText="确定">\n          <ion-option *ngFor="let item of payTypes" value="{{item.MoneyType}}">{{item.TypeDescription}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      选择您使用的支付方式，支持微信、支付宝、货到付款\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card>\n    <ion-card-header>\n        <ion-item style="padding: 0">\n            <ion-icon name="time"> 收货时间</ion-icon>\n            <button ion-button icon-only clear item-end icon-end>\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card> -->\n  <ion-card>\n    <ion-card-header>\n      <ion-item style="padding: 0">\n        <ion-icon name="cart"> 商品信息</ion-icon>\n        <button ion-button icon-only clear item-end icon-end>\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      商品数量:{{sumPiece|number:\'.2\'}} <br>\n      商品金额:{{sumPrice|number:\'.2\'}}<br>\n      运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费:0;\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer no-padding style="padding: 0px">\n  <ion-toolbar no-padding style="padding: 0px">\n    ￥:{{sumPrice|number:\'.2\'}}\n    <ion-buttons end>\n      <button ion-button color="danger" (click)="convertOrder()">\n        提交订单\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\fill-order\fill-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wholesale_wholesale__["e" /* WholesaleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FillOrderPage);
    return FillOrderPage;
}());

//# sourceMappingURL=fill-order.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_ok_result_ok__ = __webpack_require__(51);
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        var dataResult = JSON.parse(JSON.stringify(navParams.get("data")));
        this.results = dataResult[0][0];
        this.result = this.results.pramResult;
        this.goods = dataResult[1];
        // console.log("JSON.stringify(data)+" + JSON.stringify(JSON.stringify(dataResult[1])));
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        // this.service.convertOrderResultEvent.subscribe(data=>{
        //   let dataResult = JSON.parse(JSON.stringify(data));
        //   console.log("JSON.stringify(data)+"+JSON.stringify(data));
        //   this.result = dataResult[0][0].pramResult;
        //   this.goods = dataResult[0][1];
        // })
        this.method = -1;
    };
    ResultPage.prototype.ionViewWillEnter = function () {
    };
    ResultPage.prototype.convertOrder = function () {
        var _this = this;
        console.log("method=" + this.method);
        if (this.method == -1) {
            this.showAlert('信息不完整', '请选择商品缺货的处理方式！');
            return;
        }
        this.payParams = new __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["d" /* PayParams */](1, 0, this.results.payType, this.results.address, this.results.phone, this.results.linkMan, "", this.method, this.results.addressId, 0, "sys");
        this.service.convertOrder(this.payParams).then(function (data) {
            var dataResult = JSON.parse(JSON.stringify(data));
            if (dataResult[0][0].pramCode == 0) {
                // this.navCtrl.push(ResultPage, { data: data });
                var dataResult_1 = JSON.parse(JSON.stringify(data));
                _this.results = dataResult_1[0][0];
                _this.result = _this.results.pramResult;
                _this.goods = dataResult_1[1];
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_ok_result_ok__["a" /* ResultOkPage */], { data: data });
            }
        });
    };
    ResultPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\result\result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>商品有缺货</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-list *ngIf="!hasmore"> -->\n  <ion-list radio-group [(ngModel)]="method">\n    <ion-list-header>\n      {{result}}\n    </ion-list-header>\n    <ion-item>\n        <ion-label>只订有货的产品</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label>按最大可满足数订货</ion-label>\n        <ion-radio value="2"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label>放弃购买</ion-label>\n        <ion-radio value="3"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-list-header>\n        缺货商品\n      </ion-list-header>\n      <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let good of goods;let i=index">\n          <ion-thumbnail item-start>\n            <img src="img/thumbnail-totoro.png">\n          </ion-thumbnail>\n          <h2>{{good.Goodsname}}</h2>\n          <p>{{good.Description}}</p>\n          <ion-row>\n            <ion-col text-start>\n                  购买数:{{good.BookPiece}}\n            </ion-col>\n            <ion-col text-start>\n                库存数:{{good.InvalidStockPiece}}\n            </ion-col>\n          </ion-row>\n        </ion-item>\n    </ion-list>\n    <ion-footer no-padding style="padding: 0px">\n      <ion-toolbar no-padding style="padding: 0px">\n        ￥:{{results.amount|number:\'.2\'}}\n        <ion-buttons end>\n          <button ion-button color="danger" (click)="convertOrder()">\n            请选择提交\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(81);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.userName = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginParams = new __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["c" /* LoginParams */](this.userName, this.password);
        this.service.login(this.loginParams).then(function (data) {
            var rs = JSON.parse(JSON.stringify(data));
            if (rs.status == "success") {
                window.localStorage.setItem('token', rs.token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '登陆失败!',
            subTitle: '用户名或密码错误，请重新再试!',
            buttons: ['确定']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登陆</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>用户名:</ion-label>\n      <ion-input type="text" [(ngModel)]="userName"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  \n  <div padding>\n    <button ion-button color="primary" block (click)="login()">登陆</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WholesaleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrPostParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PayParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient,HttpHeaders } from '@angular/common/http';


/*
  Generated class for the WholesaleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WholesaleProvider = /** @class */ (function () {
    function WholesaleProvider(http) {
        this.http = http;
        //===event===============================
        this.cartEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.hiddenAddrEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.addrNameEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.addrIdEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.addrPostParamsEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.convertOrderResultEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.orderEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.data = null;
    }
    WholesaleProvider.prototype.getReviews = function (url, args) {
        // console.log("url="+this.data);
        // if (this.data) {
        //   return Promise.resolve(this.data);
        // }
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            var token = window.localStorage.getItem('token');
            headers.append('authorization', token);
            _this.requestParams = { params: args, headers: headers };
            _this.data = _this.http.get(url, _this.requestParams)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    WholesaleProvider.prototype.postReview = function (url, args) {
        var _this = this;
        this.requestParams = { params: args };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        var token = window.localStorage.getItem('token');
        headers.append('Content-Type', 'application/json');
        headers.append('authorization', token);
        return new Promise(function (resolve) {
            _this.data = _this.http.post(url, args, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    WholesaleProvider.prototype.createReview = function (review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    WholesaleProvider.prototype.deleteReview = function (id) {
        this.http.delete('http://localhost:8080/api/sort/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    WholesaleProvider.prototype.addCart = function (params) {
        return this.postReview('/api/document/addShoppingCar', params);
    };
    WholesaleProvider.prototype.modifyCart = function (params) {
        return this.postReview('/api/document/addShoppingCar', params);
    };
    WholesaleProvider.prototype.getArea = function (params) {
        return this.getReviews('/api/common/getArea', params);
    };
    WholesaleProvider.prototype.getAddress = function (params) {
        return this.getReviews('/api/customer/getAddress', params);
    };
    WholesaleProvider.prototype.getDefaultAddress = function (params) {
        return this.getReviews('/api/customer/getDefaultAddress', params);
    };
    WholesaleProvider.prototype.addAddress = function (params) {
        return this.postReview('/api/customer/addAddress', params);
    };
    WholesaleProvider.prototype.getPayType = function (params) {
        return this.getReviews('/api/finance/getMoneyType', params);
    };
    WholesaleProvider.prototype.convertOrder = function (params) {
        return this.postReview('/api/document/convertOrder', params);
    };
    WholesaleProvider.prototype.getOrderList = function (params) {
        var _this = this;
        var headers;
        this.getReviews('/api/document/getOrderList', params).then(function (data) {
            headers = data[0];
            var details = JSON.parse(JSON.stringify(data[1]));
            headers = headers.map(function (item) {
                var sumAmount = 0;
                var sumQuantity = 0;
                var detail = details.filter(function (detail) {
                    if (detail.OrderId == item.OrderId) {
                        sumAmount += detail.Price * detail.Piece;
                        sumQuantity += detail.Piece * 1;
                        return detail;
                    }
                });
                item = { "header": item, "detail": detail, "sumAmount": sumAmount, "sumQuantity": sumQuantity };
                return item;
            });
            _this.orderEvent.emit(headers);
        });
    };
    WholesaleProvider.prototype.login = function (params) {
        return this.postReview('/api/customer/login', params);
    };
    WholesaleProvider.prototype.refreshToken = function () {
        return this.postReview('/api/customer/refresh', { id: 0 });
    };
    WholesaleProvider.prototype.getToken = function () {
        return this.postReview('/api/customer/gettoken', { id: 0 });
    };
    WholesaleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], WholesaleProvider);
    return WholesaleProvider;
    var _a;
}());

var AddrPostParams = /** @class */ (function () {
    function AddrPostParams(addressId, regionId1, regionId2, regionId3, regionId4, regionId5, regionName1, regionName2, regionName3, regionName4, regionName5, address, phone, linkMan, isDefault) {
        this.addressId = addressId;
        this.regionId1 = regionId1;
        this.regionId2 = regionId2;
        this.regionId3 = regionId3;
        this.regionId4 = regionId4;
        this.regionId5 = regionId5;
        this.regionName1 = regionName1;
        this.regionName2 = regionName2;
        this.regionName3 = regionName3;
        this.regionName4 = regionName4;
        this.regionName5 = regionName5;
        this.address = address;
        this.phone = phone;
        this.linkMan = linkMan;
        this.isDefault = isDefault;
    }
    return AddrPostParams;
}());

;
var PayParams = /** @class */ (function () {
    function PayParams(warehouseId, levelId, paidWay, 
        // deliverStartDateTime = req.body.deliverStartDateTime;
        // deliverEndDateTime = req.body.deliverEndDateTime;
        deliveryAddress, mobile, linkman, remark, method, regionId, orderType, userId) {
        this.warehouseId = warehouseId;
        this.levelId = levelId;
        this.paidWay = paidWay;
        this.deliveryAddress = deliveryAddress;
        this.mobile = mobile;
        this.linkman = linkman;
        this.remark = remark;
        this.method = method;
        this.regionId = regionId;
        this.orderType = orderType;
        this.userId = userId;
    }
    return PayParams;
}());

var CartParams = /** @class */ (function () {
    function CartParams(addType, goodsId, cases, piece, levelId, warehouseId) {
        this.addType = addType;
        this.goodsId = goodsId;
        this.cases = cases;
        this.piece = piece;
        this.levelId = levelId;
        this.warehouseId = warehouseId;
    }
    return CartParams;
}());

var LoginParams = /** @class */ (function () {
    function LoginParams(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return LoginParams;
}());

//# sourceMappingURL=wholesale.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address-list/address-list.module": [
		285,
		6
	],
	"../pages/address/address.module": [
		286,
		5
	],
	"../pages/fill-order/fill-order.module": [
		287,
		4
	],
	"../pages/login/login.module": [
		288,
		3
	],
	"../pages/order/order.module": [
		289,
		2
	],
	"../pages/result-ok/result-ok.module": [
		290,
		1
	],
	"../pages/result/result.module": [
		291,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wholesale_wholesale__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPage = /** @class */ (function () {
    function MyPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    MyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var token = window.localStorage.getItem('token');
        // console.log("token="+token);
        if (!token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
        else {
            this.service.getToken().then(function (data) {
                var rs = JSON.parse(JSON.stringify(data));
                console.log("rs.status=" + rs.status);
                if (rs.status == "err") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    MyPage.prototype.goOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */]);
    };
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\my\my.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      我的\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button full (click)="goOrder()">查看订单</button>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\my\my.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_wholesale_wholesale__["e" /* WholesaleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_wholesale_wholesale__["e" /* WholesaleProvider */]) === "function" && _b || Object])
    ], MyPage);
    return MyPage;
    var _a, _b;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortPage = /** @class */ (function () {
    function SortPage(navCtrl, sortService) {
        this.navCtrl = navCtrl;
        this.sortService = sortService;
        this.params = { categroyId: 1, pageNo: 1 };
        this.hasmore = true;
        this.islock = false;
    }
    SortPage.prototype.ionViewDidLoad = function () {
        this.getCatagroyData();
        this.addScrollEventListener();
    };
    SortPage.prototype.getCatagroyData = function () {
        var _this = this;
        this.sortService.getReviews('/api/goods/getNavigation', this.params).then(function (data) {
            _this.sorts = data;
            if (data[0]) {
                _this.params.categroyId = data[0].CategroyId;
                _this.getGoodsData();
            }
        });
    };
    SortPage.prototype.addScrollEventListener = function () {
        var _this = this;
        this.scrollElement._scrollContent.nativeElement.onscroll = function (event) {
            if (_this.spinnerElement) {
                //元素顶端到可见区域顶端的距离
                var top = _this.spinnerElement.nativeElement.getBoundingClientRect().top;
                //可见区域高度
                var clientHeight = document.documentElement.clientHeight;
                if (top <= clientHeight) {
                    // console.log("ready loadmore...");
                    _this.doInfinite();
                }
            }
        };
    };
    SortPage.prototype.getGoods = function (c, event) {
        var initSelected = document.getElementsByClassName('menuItem');
        if (initSelected[0].classList.contains("active")) {
            initSelected[0].classList.remove("active");
        }
        //移除上次选中菜单的样式
        if (this.selectedMenuTarget) {
            this.selectedMenuTarget.classList.remove("active");
        }
        //修改本次选中菜单的样式
        event.currentTarget.classList.add("active");
        //将本次选中的菜单记录
        this.selectedMenuTarget = event.currentTarget;
        this.hasmore = true;
        // console.log("c.CategroyId="+c.CategroyId);
        this.params.categroyId = c.CategroyId;
        this.params.pageNo = 1;
        this.getGoodsData();
    };
    SortPage.prototype.getGoodsData = function () {
        var _this = this;
        // console.log("cate="+this.params);
        this.sortService.getReviews('/api/goods/getGoodsInfoPage', this.params).then(function (data) {
            _this.goods = data;
        });
        this.params.pageNo += 1;
    };
    SortPage.prototype.doInfinite = function () {
        var _this = this;
        if (this.islock) {
            return;
        }
        if (this.hasmore == false) {
            return;
        }
        this.islock = true;
        this.sortService.getReviews('/api/goods/getGoodsInfoPage', this.params).then(function (data) {
            _this.islock = false;
            if (data != "") {
                _this.goods = _this.goods.concat(data);
                _this.params.pageNo += 1;
            }
            else {
                _this.hasmore = false;
                console.log("没有数据啦！");
            }
        });
    };
    SortPage.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], SortPage.prototype, "scrollElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('spinner'),
        __metadata("design:type", Object)
    ], SortPage.prototype, "spinnerElement", void 0);
    SortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sort',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\sort\sort.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      商品分类\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-3 class="menus">\n        <ion-scroll scrollY="true" style="height:100%">\n          <ion-list>\n            <!-- <ion-item-sliding #slidingItem *ngFor="let sort of sorts"> -->\n              <ion-item style="padding-left: 0px;" class="menuItem" *ngFor="let sort of sorts;let i=index" [ngClass]="{\'active\': i==0}" text-center (click)="getGoods(sort,$event)">\n                {{sort.Description}}\n              </ion-item>\n          </ion-list>\n        </ion-scroll>\n      </ion-col>\n      <ion-col class="items">\n          <ion-scroll scrollY="true" #scroll style="height:100%">\n            <ion-goods [goods]="goods"></ion-goods>\n            <ion-row>\n              <ion-col class="nodata" text-center *ngIf="!hasmore">\n                没有商品啦 ♪(^∇^*)\n              </ion-col>\n            </ion-row>\n            <ion-row #spinner *ngIf="hasmore">\n              <ion-col text-center>\n                <ion-spinner>数据加载中</ion-spinner>\n              </ion-col>\n            </ion-row>\n          </ion-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\sort\sort.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        // var token = window.localStorage.getItem('token');
        // console.log("token="+token);
        this.service.refreshToken().then(function (data) {
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    </ion-title>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="卢记生鲜"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-slides pager style="height:150px">\n\n        <ion-slide>\n          <img src="../../assets/imgs/fish2.png">\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="../../assets/imgs/xie1.png">\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="../../assets/imgs/mango1.png">\n        </ion-slide>\n      </ion-slides> \n      <ion-grid>\n        <ion-row><ion-col><div style="height:20px;background-color:rgb(248, 246, 246);padding:5px 5px 5px 5px">每日必买</div></ion-col></ion-row>\n          <ion-row>\n            <ion-col>\n              <div><img src="../../assets/imgs/sku/1.jpg"></div>\n            </ion-col>\n            <ion-col>\n              <div><img src="../../assets/imgs/sku/2.jpg"></div>\n            </ion-col>\n            <ion-col>\n                <div><img src="../../assets/imgs/sku/3.jpg"></div>\n              </ion-col>\n              <ion-col>\n                  <div><img src="../../assets/imgs/sku/4.jpg"></div>\n                </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <div><img src="../../assets/imgs/sku/2-1.jpg"></div>\n              </ion-col>\n              <ion-col>\n                <div><img src="../../assets/imgs/sku/2-2.jpg"></div>\n              </ion-col>\n              <ion-col>\n                  <div><img src="../../assets/imgs/sku/2-3.jpg"></div>\n                </ion-col>\n                <ion-col>\n                    <div><img src="../../assets/imgs/sku/2-4.jpg"></div>\n                  </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <div><img src="../../assets/imgs/sku/3-1.jpg"></div>\n                </ion-col>\n                <ion-col>\n                  <div><img src="../../assets/imgs/sku/3-2.jpg"></div>\n                </ion-col>\n                <ion-col>\n                    <div><img src="../../assets/imgs/sku/3-3.jpg"></div>\n                  </ion-col>\n                  <ion-col>\n                      <div><img src="../../assets/imgs/sku/3-4.jpg"></div>\n                    </ion-col>\n              </ion-row>\n        </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_my__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sort_sort__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ion_goods_ion_goods__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ion_area_ion_area__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_address_list_address_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_address_address__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_result_result__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_result_ok_result_ok__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_order_order__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ComponentsModule } from '../components/components.module';
// import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';








// import {ComponentsModule} from '../components/components.module';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_my_my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_ion_goods_ion_goods__["a" /* IonGoodsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_ion_area_ion_area__["a" /* IonAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__["a" /* FillOrderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_address_list_address_list__["a" /* AddressListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_result_ok_result_ok__["a" /* ResultOkPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                // ComponentsModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/address-list/address-list.module#AddressListPageModule', name: 'AddressListPage', segment: 'address-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fill-order/fill-order.module#FillOrderPageModule', name: 'FillOrderPage', segment: 'fill-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result-ok/result-ok.module#ResultOkPageModule', name: 'ResultOkPage', segment: 'result-ok', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_my_my__["a" /* MyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_ion_goods_ion_goods__["a" /* IonGoodsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__["a" /* FillOrderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_address_list_address_list__["a" /* AddressListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_result_ok_result_ok__["a" /* ResultOkPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]
                // IonAreaComponent
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_wholesale_wholesale__["e" /* WholesaleProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonGoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
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
 * Generated class for the IonGoodsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonGoodsComponent = /** @class */ (function () {
    function IonGoodsComponent(navCtrl, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.params = {
            "addType": 1,
            "goodsId": 0,
            "cases": 0,
            "piece": 1,
            "levelId": 0,
            "warehouseId": 1
        };
        // console.log('Hello IonGoodsComponent Component');
    }
    IonGoodsComponent.prototype.addCart = function (goods) {
        var _this = this;
        this.params.goodsId = goods.GoodsId;
        var loader = this.loadingCtrl.create({
            content: "添加到购物车..."
        });
        loader.present();
        this.service.addCart(this.params).then((function (data) {
            console.log("data==" + JSON.stringify(goods));
            loader.dismiss();
            _this.service.cartEvent.emit(1);
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonGoodsComponent.prototype, "goods", void 0);
    IonGoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-goods',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\components\ion-goods\ion-goods.html"*/'<ion-list>\n    <!-- <ion-item-sliding #slidingItem *ngFor="let sort of sorts"> -->\n      <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let good of goods;let i=index">\n        <ion-thumbnail item-start>\n          <img src="img/thumbnail-totoro.png">\n        </ion-thumbnail>\n        <h2>{{good.Name}}</h2>\n        <p>{{good.Description}}</p>\n        <ion-row>\n          <ion-col text-start>\n            <button ion-button icon-start clear color="danger">\n                ￥{{good.Price}}\n            </button>\n          </ion-col>\n          <ion-col text-end>\n            <button ion-button icon-end clear (click)="addCart(good)">\n              <ion-icon name="add" color="danger"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n  </ion-list>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\components\ion-goods\ion-goods.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], IonGoodsComponent);
    return IonGoodsComponent;
}());

// class Params{
//   constructor(public addType: number,public goodsId: number,public cases: number,
//     public piece:number,levelId:number,warehouseId:num
//   ) {
//     // console.log('Hello IonGoodsComponent Component');
//   }
// }
//# sourceMappingURL=ion-goods.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_wholesale_wholesale__ = __webpack_require__(13);
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
 * Generated class for the IonAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonAreaComponent = /** @class */ (function () {
    function IonAreaComponent(service) {
        this.service = service;
        this.addrParams = { "level": 0, "parentId": -1 };
        this.addrParentIds = [-1, -1, -1, -1];
        this.addrLevelNames = ['', '', '', ''];
        this.addrLevelHiddens = [true, true, true, true];
        this.addrAreas = ""; //所选择区域的合并
        // addrLevelHiddens=[false,false,false,false];
        this.addrLevelId = 0; //当前选择的地址层级（0~3）
        this.addrId = 0;
        this.hiddenAddr = true;
        // this.text = "aaaa";
    }
    IonAreaComponent.prototype.closeAddr = function () {
        this.hiddenAddr = true;
    };
    IonAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.hiddenAddrEvent.subscribe(function (data) {
            // console.log("hide2="+data);
            _this.hiddenAddr = data;
        });
        // this.getCartGoods();
        var levelId = 0;
        this.service.addrPostParamsEvent.subscribe(function (data) {
            _this.addrPostParams = data;
            _this.addrLevelHiddens[0] = _this.addrPostParams.regionId1 == 0 ? true : false;
            _this.addrLevelHiddens[1] = _this.addrPostParams.regionId2 == 0 ? true : false;
            _this.addrLevelHiddens[2] = _this.addrPostParams.regionId3 == 0 ? true : false;
            // this.addrLevelHiddens[3] = this.addrPostParams.regionId4 == 0 ? true : false;
            // this.addrLevelHiddens[4] = this.addrPostParams.regionId1==0?true:false;
            // this.addrParentIds[0]=this.addrPostParams.regionId1;
            // this.addrParentIds[1]=this.addrPostParams.regionId2;
            // this.addrParentIds[2]=this.addrPostParams.regionId3;
            // this.addrParentIds[3]=this.addrPostParams.regionId4;
            _this.addrParentIds[0] = -1;
            _this.addrParentIds[1] = _this.addrPostParams.regionId1;
            _this.addrParentIds[2] = _this.addrPostParams.regionId2;
            _this.addrParentIds[3] = _this.addrPostParams.regionId3;
            _this.addrLevelNames[0] = _this.addrPostParams.regionName1;
            _this.addrLevelNames[1] = _this.addrPostParams.regionName2;
            _this.addrLevelNames[2] = _this.addrPostParams.regionName3;
            // this.addrLevelNames[3] = this.addrPostParams.regionName4;
            for (var index = 0; index < _this.addrLevelNames.length; index++) {
                console.log("this.addrLevelHiddens[index]=" + _this.addrLevelHiddens[index]);
                if (!_this.addrLevelHiddens[index]) {
                    _this.addrLevelId = index;
                }
            }
            console.log("this.addrLevelId1=" + levelId);
            _this.getArea(_this.addrLevelId);
        });
    };
    IonAreaComponent.prototype.ionViewWillEnter = function () {
        // this.getCartGoods();
        // this.text = "cccc";
    };
    IonAreaComponent.prototype.getArea = function (levelId) {
        var _this = this;
        this.addrParams.parentId = this.addrParentIds[levelId];
        this.addrId = this.addrParentIds[levelId + 1];
        // console.log('this.addrId='+this.addrId);
        this.addrParams.level = levelId;
        this.addrLevelId = levelId;
        this.service.getArea(this.addrParams).then((function (data) {
            _this.areaList = data;
        }));
    };
    IonAreaComponent.prototype.getNextArea = function (item) {
        var _this = this;
        this.addrParams.parentId = item.Id;
        this.addrId = item.Id;
        this.addrLevelId = item.Level;
        // console.log('item.Id='+item.Id);
        this.addrLevelNames[this.addrLevelId] = item.Name;
        this.addrLevelId += 1 * 1;
        this.addrParentIds[this.addrLevelId] = item.Id;
        console.log("this.addrLevelId2=" + item.Level);
        for (var i = this.addrLevelId; i < 4; i++) {
            this.addrLevelHiddens[i] = true;
            this.addrLevelNames[i] = "";
            // this.addrParentIds[i] = 0;
        }
        this.addrLevelHiddens[this.addrLevelId] = false;
        this.addrParams.level = this.addrLevelId;
        this.service.getArea(this.addrParams).then((function (data) {
            _this.areaList = data;
            if (data == "") {
                _this.addrLevelHiddens[_this.addrLevelId] = true;
                _this.addrAreas = "";
                _this.service.addrNameEvent.emit(_this.addrLevelNames);
                _this.service.addrIdEvent.emit(_this.addrParentIds);
                _this.closeAddr();
                // console.log('data='+JSON.stringify(data));
            }
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonAreaComponent.prototype, "hiddenAddr", void 0);
    IonAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-area',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\components\ion-area\ion-area.html"*/' <!--地址请选择-->\n <div class="showChose" [hidden]="hiddenAddr">\n  <div class="address">\n    <!-- <div class="title">\n      <h4>配送至</h4>\n      <span (click)="closeAddr()">×</span>\n    </div> -->\n    <ion-toolbar>\n        <ion-title text-center style="font-size:9pt;">配送至{{text}}</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="closeAddr()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n\n    <div class="addrTitle">\n      <div class="area" (click)="getArea(0)" [ngClass]="{\'active\': addrLevelId==0}">{{addrLevelNames[0]?addrLevelNames[0]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(1)" [ngClass]="{\'active\': addrLevelId==1}" [hidden]="addrLevelHiddens[1]">{{addrLevelNames[1]?addrLevelNames[1]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(2)" [ngClass]="{\'active\': addrLevelId==2}" [hidden]="addrLevelHiddens[2]">{{addrLevelNames[2]?addrLevelNames[2]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(3)" [ngClass]="{\'active\': addrLevelId==3}" [hidden]="addrLevelHiddens[3]">{{addrLevelNames[3]?addrLevelNames[3]:\'请选择\'}}</div>\n    </div>\n    <ul>\n      <ion-list>\n        <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let item of areaList;">\n          <!-- <li class="addList" [ngClass]="{\'active\': addrId==item.Id}" (click)="getNextArea(item)">{{item.Name}}</li> -->\n          <ion-label>{{item.Name}}</ion-label>\n    <ion-radio checked="{{addrId==item.Id}}" value="item.Id" (click)="getNextArea(item)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ul>\n  </div>\n</div>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\components\ion-area\ion-area.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], IonAreaComponent);
    return IonAreaComponent;
}());

//# sourceMappingURL=ion-area.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order__ = __webpack_require__(52);
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
 * Generated class for the ResultOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultOkPage = /** @class */ (function () {
    function ResultOkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var dataResult = JSON.parse(JSON.stringify(navParams.get("data")));
        this.results = dataResult[0][0];
    }
    ResultOkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultOkPage');
    };
    ResultOkPage.prototype.finish = function () {
        this.navCtrl.popToRoot();
    };
    ResultOkPage.prototype.goOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */]);
    };
    ResultOkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result-ok',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\result-ok\result-ok.html"*/'<!--\n  Generated template for the ResultOkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>订单支付成功</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="thumbs-up" click="finish()">完成</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n   查看订单详情\n    </ion-card-header>\n    <ion-card-content>\n      支付方式:{{results.phone}}<br>\n      支付金额:{{results.amount}}\n      <button ion-button full (click)="goOrder()">查看订单</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\result-ok\result-ok.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResultOkPage);
    return ResultOkPage;
}());

//# sourceMappingURL=result-ok.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(80);
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.params = {
            pageNo: 1
        };
        this.cartParams = new __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["b" /* CartParams */](1, 0, 0, 1, 0, 1);
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad OrderPage');
        this.service.getOrderList(this.params);
        this.service.orderEvent.subscribe(function (data) {
            _this.orders = data;
            // console.log("this.orders="+JSON.stringify(this.orders));
        });
    };
    OrderPage.prototype.buyMore = function (order) {
        var _this = this;
        var emitNum;
        emitNum = 0;
        var loader = this.loadingCtrl.create({
            content: "添加到购物车数量..."
        });
        loader.present();
        order.forEach(function (element) {
            _this.cartParams.goodsId = element.GoodsId;
            _this.cartParams.piece = element.Piece;
            emitNum += element.Piece * 1;
            _this.service.addCart(_this.cartParams).then(function (data) {
                // console.log("1")
            });
            // console.log("2")
        });
        loader.dismiss();
        this.service.cartEvent.emit(emitNum);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\order\order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding no-margin>\n  <ion-list no-lines>\n    <!-- <ion-item-sliding #slidingItem *ngFor="let sort of sorts"> -->\n    <ion-item no-padding no-margin *ngFor="let order of orders;">\n      <ion-card>\n        <ion-card-header>\n          <span float-left>{{order.header.CreateDate| date:\'yyyy-MM-dd HH:mm\'}}</span>\n          <span float-right>{{order.header.OrderStatusName}}</span>\n\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-list>\n            <ion-item *ngFor="let detail of order.detail;">\n              <ion-avatar item-start>\n                <img src="img/thumbnail-totoro.png">\n              </ion-avatar>\n              <h2>{{detail.Name}}</h2>\n              <h3 text-right color="danger">￥{{detail.Price}}x{{detail.Piece}}</h3>\n            </ion-item>\n            <ion-item>\n              <h3 color="danger">\n                <span float-left>总数量:{{order.sumQuantity}}</span>\n                <span float-right>总额:￥{{order.sumAmount | number: \'0.2\'}}</span>\n              </h3>\n            </ion-item>\n            <ion-item>\n              <button ion-button small outline float-left>取消订单</button>\n              <button ion-button small outline float-right (click)="buyMore(order.detail)">再次购买</button>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n      <!-- <ion-row>\n        <ion-col text-start>\n          <span class="price">￥{{goods.Price}}</span>\n          <ul class="btn-numbox">\n            <li>\n              <ul class="count">\n                <li>\n                  <span id="num-add" class="num-add" (click)="addCart(goods)">+</span>\n                </li>\n                <li>\n                  <span class="input-num" id="input-num" (click)="showConfirm(goods)">{{goods.Piece}}</span>\n                </li>\n                <li>\n                  <span id="num-remove" class="num-remove" (click)="removeCart(goods)">-</span>\n                </li>\n              </ul>\n            </li>\n            </ul>\n        </ion-col>\n      </ion-row> -->\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fill_order_fill_order__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = /** @class */ (function () {
    // areaList:any;
    // addrParentIds =[-1,-1,-1,-1];
    // addrLevelNames =['','','',''];
    // addrLevelHiddens=[true,true,true,true];
    // // addrLevelHiddens=[false,false,false,false];
    // addrLevelId = 0;
    // addrId=0;
    // hiddenAddr = false;
    //end 
    function CartPage(navCtrl, service, alertCtrl, loadingCtrl, toastCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        //start declare
        // text:string;
        this.params = { id: Math.random() };
        // addrParams={"level":0,"parentId":-1}
        this.cartParams = new __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["b" /* CartParams */](0, 0, 0, 1, 0, 1);
        this.sumPrice = 0;
        this.sumPiece = 0;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        // this.getCartGoods();
        // this.text = "cccc";
    };
    CartPage.prototype.ionViewDidEnter = function () {
        this.getCartGoods();
        // this.getArea(0);
    };
    //====自定义===========================
    // closeAddr(){
    //   this.hiddenAddr = true;
    // }
    CartPage.prototype.getCartGoods = function () {
        var _this = this;
        this.service.getReviews("/api/document/getCarGoods", this.params).then(function (data) {
            _this.cartGoods = data;
            _this.getTotal();
        });
    };
    CartPage.prototype.getTotal = function () {
        this.sumPrice = this.cartGoods.reduce(function (result, item) { return item.Price * item.Piece + result; }, 0);
        this.sumPiece = this.cartGoods.reduce(function (result, item) { return item.Piece + result; }, 0);
    };
    CartPage.prototype.showConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '输入数量',
            inputs: [
                {
                    name: 'piece',
                    placeholder: '购买数量',
                    value: item.Piece,
                    type: "number",
                    checked: true,
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('data1 cancel=' + JSON.stringify(data));
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.modCart(item, 0, data.piece * 1);
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.modCart = function (item, addType, piece) {
        var _this = this;
        var emitNum;
        var loader = this.loadingCtrl.create({
            content: "修改购物车数量..."
        });
        loader.present();
        this.cartParams.goodsId = item.GoodsId;
        this.cartParams.piece = piece;
        this.cartParams.addType = addType;
        this.cartGoods.filter(function (goods) {
            if (goods.GoodsId == item.GoodsId) {
                if (addType == 0) {
                    emitNum = piece - goods.Piece;
                }
                else {
                    emitNum = piece;
                }
                _this.service.addCart(_this.cartParams).then((function (data) {
                    if (addType == 0) {
                        goods.Piece = piece;
                    }
                    else {
                        goods.Piece += piece;
                    }
                    loader.dismiss();
                    _this.service.cartEvent.emit(emitNum);
                    _this.getTotal();
                }));
                return;
            }
            ;
        });
    };
    CartPage.prototype.addCart = function (item) {
        this.modCart(item, 1, 1);
    };
    CartPage.prototype.removeCart = function (item) {
        this.modCart(item, 1, -1);
    };
    //去填写订单页面
    CartPage.prototype.goOrder = function () {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__fill_order_fill_order__["a" /* FillOrderPage */], { sumPrice: this.sumPrice, sumPiece: this.sumPiece });
        // this.navCtrl.push(FillOrderPag);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      购物车\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-item-sliding #slidingItem *ngFor="let sort of sorts"> -->\n    <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let goods of cartGoods;">\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>{{goods.Name}}</h2>\n      <p>{{goods.Description}}</p>\n      <ion-row>\n        <ion-col text-start>\n          <span class="price">￥{{goods.Price}}</span>\n          <ul class="btn-numbox">\n            <li>\n              <ul class="count">\n                <li>\n                  <span id="num-add" class="num-add" (click)="addCart(goods)">+</span>\n                </li>\n                <li>\n                  <span class="input-num" id="input-num" (click)="showConfirm(goods)">{{goods.Piece}}</span>\n                </li>\n                <li>\n                  <span id="num-remove" class="num-remove" (click)="removeCart(goods)">-</span>\n                </li>\n              </ul>\n            </li>\n            </ul>\n          <!-- <button ion-button icon-end clear (click)="addCart(good)">\n            <ion-icon name="remove" color="danger"></ion-icon>\n          </button>\n          <input type="text"  value="{{good.Piece}}" class="num"/>\n          <span>{{good.Piece}}</span>\n          <button ion-button icon-end clear (click)="addCart(good)">\n            <ion-icon name="add" color="danger"></ion-icon>\n          </button> -->\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n \n\n</ion-content>\n<ion-footer no-padding style="padding: 0px">\n  <ion-toolbar no-padding style="padding: 0px">\n    合计：{{sumPrice|number:\'.2\'}}\n    <br>总额：优惠\n    <ion-buttons end>\n      <button ion-button color="danger" (click)="goOrder()">\n        去结算\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["e" /* WholesaleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_my__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wholesale_wholesale__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(tabService) {
        this.tabService = tabService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__sort_sort__["a" /* SortPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__my_my__["a" /* MyPage */];
        this.goodsNum = 0;
        this.params = { id: 0 };
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.tabService.getReviews('/api/document/getCarCount', this.params).then((function (data) {
            // console.log(JSON.stringify(data));
            var count = JSON.parse(JSON.stringify(data))[0].goodsCount;
            _this.goodsNum = count ? count : 0;
        }));
        this.tabService.cartEvent.subscribe(function (data) {
            _this.goodsNum += data;
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="分类" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="购物车" tabIcon="cart" [tabBadge]="goodsNum"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_wholesale_wholesale__["e" /* WholesaleProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map