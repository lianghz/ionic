webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fill-order/fill-order.module": [
		278,
		2
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_my__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wholesale_wholesale__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_wholesale_wholesale__["a" /* WholesaleProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function MyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\my\my.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      我的\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\my\my.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MyPage);
    return MyPage;
}());

//# sourceMappingURL=my.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["a" /* WholesaleProvider */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fill_order_fill_order__ = __webpack_require__(279);
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
        this.cartParams = {
            "addType": 0,
            "goodsId": 0,
            "cases": 0,
            "piece": 1,
            "levelId": 0,
            "warehouseId": 1
        };
        this.sumPrice = 0;
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
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__fill_order_fill_order__["a" /* FillOrderPage */]);
        // this.navCtrl.push(FillOrderPag);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      购物车\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-item-sliding #slidingItem *ngFor="let sort of sorts"> -->\n    <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let goods of cartGoods;">\n      <ion-thumbnail item-start>\n        <img src="img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>{{goods.Name}}</h2>\n      <p>{{goods.Description}}</p>\n      <ion-row>\n        <ion-col text-start>\n          <span class="price">￥{{goods.Price}}</span>\n          <ul class="btn-numbox">\n            <li>\n              <ul class="count">\n                <li>\n                  <span id="num-add" class="num-add" (click)="addCart(goods)">+</span>\n                </li>\n                <li>\n                  <span class="input-num" id="input-num" (click)="showConfirm(goods)">{{goods.Piece}}</span>\n                </li>\n                <li>\n                  <span id="num-remove" class="num-remove" (click)="removeCart(goods)">-</span>\n                </li>\n              </ul>\n            </li>\n            </ul>\n          <!-- <button ion-button icon-end clear (click)="addCart(good)">\n            <ion-icon name="remove" color="danger"></ion-icon>\n          </button>\n          <input type="text"  value="{{good.Piece}}" class="num"/>\n          <span>{{good.Piece}}</span>\n          <button ion-button icon-end clear (click)="addCart(good)">\n            <ion-icon name="add" color="danger"></ion-icon>\n          </button> -->\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n \n\n</ion-content>\n<ion-footer no-padding style="padding: 0px">\n  <ion-toolbar no-padding style="padding: 0px">\n    合计：{{sumPrice|number:\'.2\'}}\n    <br>总额：优惠\n    <ion-buttons end>\n      <button ion-button color="danger" (click)="goOrder()">\n        去结算\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["a" /* WholesaleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["a" /* WholesaleProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _f || Object])
    ], CartPage);
    return CartPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    </ion-title>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="卢记生鲜"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-slides pager style="height:150px">\n\n        <ion-slide>\n          <img src="../../assets/imgs/fish2.png">\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="../../assets/imgs/xie1.png">\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="../../assets/imgs/mango1.png">\n        </ion-slide>\n      </ion-slides> \n      <ion-grid>\n        <ion-row><ion-col><div style="height:20px;background-color:rgb(248, 246, 246);padding:5px 5px 5px 5px">每日必买</div></ion-col></ion-row>\n          <ion-row>\n            <ion-col>\n              <div><img src="../../assets/imgs/sku/1.jpg"></div>\n            </ion-col>\n            <ion-col>\n              <div><img src="../../assets/imgs/sku/2.jpg"></div>\n            </ion-col>\n            <ion-col>\n                <div><img src="../../assets/imgs/sku/3.jpg"></div>\n              </ion-col>\n              <ion-col>\n                  <div><img src="../../assets/imgs/sku/4.jpg"></div>\n                </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <div><img src="../../assets/imgs/sku/2-1.jpg"></div>\n              </ion-col>\n              <ion-col>\n                <div><img src="../../assets/imgs/sku/2-2.jpg"></div>\n              </ion-col>\n              <ion-col>\n                  <div><img src="../../assets/imgs/sku/2-3.jpg"></div>\n                </ion-col>\n                <ion-col>\n                    <div><img src="../../assets/imgs/sku/2-4.jpg"></div>\n                  </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <div><img src="../../assets/imgs/sku/3-1.jpg"></div>\n                </ion-col>\n                <ion-col>\n                  <div><img src="../../assets/imgs/sku/3-2.jpg"></div>\n                </ion-col>\n                <ion-col>\n                    <div><img src="../../assets/imgs/sku/3-3.jpg"></div>\n                  </ion-col>\n                  <ion-col>\n                      <div><img src="../../assets/imgs/sku/3-4.jpg"></div>\n                    </ion-col>\n              </ion-row>\n        </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_my__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sort_sort__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ion_goods_ion_goods__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wholesale_wholesale__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ion_area_ion_area__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__ = __webpack_require__(279);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__["a" /* FillOrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                // ComponentsModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fill-order/fill-order.module#FillOrderPageModule', name: 'FillOrderPage', segment: 'fill-order', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_15__pages_fill_order_fill_order__["a" /* FillOrderPage */]
                // IonAreaComponent
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_wholesale_wholesale__["a" /* WholesaleProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonGoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wholesale_wholesale__["a" /* WholesaleProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_wholesale_wholesale__ = __webpack_require__(33);
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
        // addrLevelHiddens=[false,false,false,false];
        this.addrLevelId = 0;
        this.addrId = 0;
        this.hiddenAddr = true;
        // this.text = "aaaa";
    }
    IonAreaComponent.prototype.closeAddr = function () {
        this.hiddenAddr = true;
    };
    IonAreaComponent.prototype.ngOnInit = function () {
        // this.getCartGoods();
        this.getArea(0);
    };
    IonAreaComponent.prototype.ionViewWillEnter = function () {
        // this.getCartGoods();
        // this.text = "cccc";
        this.text = "cccc";
    };
    IonAreaComponent.prototype.getArea = function (levelId) {
        var _this = this;
        this.addrParams.parentId = this.addrParentIds[levelId];
        this.addrId = this.addrParentIds[levelId + 1];
        console.log('this.addrId=' + this.addrId);
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
        console.log('item.Id=' + item.Id);
        this.addrLevelNames[this.addrLevelId] = item.Name;
        this.addrLevelId += 1 * 1;
        for (var i = this.addrLevelId; i < 4; i++) {
            this.addrLevelHiddens[i] = true;
            this.addrLevelNames[i] = "";
        }
        this.addrLevelHiddens[this.addrLevelId] = false;
        this.addrParams.level = this.addrLevelId;
        this.addrParentIds[this.addrLevelId] = item.Id;
        this.service.getArea(this.addrParams).then((function (data) {
            _this.areaList = data;
            if (data == "") {
                _this.addrLevelHiddens[_this.addrLevelId] = true;
                // this.closeAddr();
                // console.log('data='+JSON.stringify(data));
            }
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], IonAreaComponent.prototype, "text", void 0);
    IonAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-area',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\components\ion-area\ion-area.html"*/' <!--地址请选择-->\n <div class="showChose" [hidden]="hiddenAddr">\n  <div class="address">\n    <!-- <div class="title">\n      <h4>配送至</h4>\n      <span (click)="closeAddr()">×</span>\n    </div> -->\n    <ion-toolbar>\n        <ion-title text-center style="font-size:9pt;">配送至{{text}}</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="closeAddr()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n\n    <div class="addrTitle">\n      <div class="area" (click)="getArea(0)" [ngClass]="{\'active\': addrLevelId==0}">{{addrLevelNames[0]?addrLevelNames[0]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(1)" [ngClass]="{\'active\': addrLevelId==1}" [hidden]="addrLevelHiddens[1]">{{addrLevelNames[1]?addrLevelNames[1]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(2)" [ngClass]="{\'active\': addrLevelId==2}" [hidden]="addrLevelHiddens[2]">{{addrLevelNames[2]?addrLevelNames[2]:\'请选择\'}}</div>\n      <div class="area" (click)="getArea(3)" [ngClass]="{\'active\': addrLevelId==3}" [hidden]="addrLevelHiddens[3]">{{addrLevelNames[3]?addrLevelNames[3]:\'请选择\'}}</div>\n    </div>\n    <ul>\n      <ion-list>\n        <ion-item style="padding-left: 3px;" class="menuItem" *ngFor="let item of areaList;">\n          <li class="addList" [ngClass]="{\'active\': addrId==item.Id}" (click)="getNextArea(item)">{{item.Name}}</li>\n        </ion-item>\n      </ion-list>\n    </ul>\n  </div>\n</div>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\components\ion-area\ion-area.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_wholesale_wholesale__["a" /* WholesaleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_wholesale_wholesale__["a" /* WholesaleProvider */]) === "function" && _a || Object])
    ], IonAreaComponent);
    return IonAreaComponent;
    var _a;
}());

//# sourceMappingURL=ion-area.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function FillOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FillOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FillOrderPage');
    };
    FillOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fill-order',template:/*ion-inline-start:"C:\dev\ionic\wholesaleAPP\src\pages\fill-order\fill-order.html"*/'<!--\n  Generated template for the FillOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-item style="padding: 0">\n        <ion-icon name="mail"> 收货地址</ion-icon>\n        <button ion-button icon-only clear item-end icon-end>\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-item style="padding: 0">\n        <ion-icon name="card"> 支付方式</ion-icon>\n        <button ion-button icon-only clear item-end icon-end>\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-item style="padding: 0">\n            <ion-icon name="time"> 收货时间</ion-icon>\n            <button ion-button icon-only clear item-end icon-end>\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n        <ion-item style="padding: 0">\n            <ion-icon name="cart"> 商品信息</ion-icon>\n            <button ion-button icon-only clear item-end icon-end>\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\dev\ionic\wholesaleAPP\src\pages\fill-order\fill-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FillOrderPage);
    return FillOrderPage;
}());

//# sourceMappingURL=fill-order.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WholesaleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(275);
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
        this.cartEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.data = null;
    }
    WholesaleProvider.prototype.getReviews = function (url, args) {
        // console.log("url="+this.data);
        // if (this.data) {
        //   return Promise.resolve(this.data);
        // }
        var _this = this;
        return new Promise(function (resolve) {
            _this.requestParams = { params: args };
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
        headers.append('Content-Type', 'application/json');
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
    WholesaleProvider.prototype.getArea = function (params) {
        return this.getReviews('/api/common/getArea', params);
    };
    WholesaleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], WholesaleProvider);
    return WholesaleProvider;
}());

//# sourceMappingURL=wholesale.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map