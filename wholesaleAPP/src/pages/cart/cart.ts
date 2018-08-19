import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController, App } from 'ionic-angular';
import { WholesaleProvider, CartParams } from '../../providers/wholesale/wholesale';
import { RequestOptionsArgs } from '@angular/http';
import { FillOrderPage } from '../fill-order/fill-order';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  //start declare
  // text:string;
  params = { id: Math.random() };
  // addrParams={"level":0,"parentId":-1}
  cartParams = new CartParams(0,0,0,1,0,1);

  //  {
  //   "addType": 0,
  //   "goodsId": 0,
  //   "cases": 0,
  //   "piece": 1,
  //   "levelId": 0,
  //   "warehouseId": 1
  // }
  
  cartGoods: any;
  sumPrice = 0;
  sumPiece = 0;
 
  // areaList:any;
  // addrParentIds =[-1,-1,-1,-1];
  // addrLevelNames =['','','',''];
  // addrLevelHiddens=[true,true,true,true];
  // // addrLevelHiddens=[false,false,false,false];
  // addrLevelId = 0;
  // addrId=0;
  // hiddenAddr = false;



  //end 


  constructor(public navCtrl: NavController, public service: WholesaleProvider, public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,public toastCtrl: ToastController,public appCtrl: App) {
  }
  ionViewDidLoad() {
    // this.getCartGoods();
    // this.text = "cccc";
  }
  ionViewDidEnter() {
    this.getCartGoods();
    // this.getArea(0);
  }
  //====自定义===========================
  // closeAddr(){
  //   this.hiddenAddr = true;
  // }

  getCartGoods() {
    this.service.getReviews("/api/document/getCarGoods", this.params).then((data) => {
      this.cartGoods = data;
      this.getTotal();
    })
  }

  getTotal() {
    this.sumPrice = this.cartGoods.reduce((result, item) => item.Price * item.Piece + result, 0);
    this.sumPiece = this.cartGoods.reduce((result, item) => item.Piece + result, 0);
  }


  showConfirm(item) {
    let alert = this.alertCtrl.create({
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
          handler: data => {
            console.log('data1 cancel=' + JSON.stringify(data));
          }
        },
        {
          text: '确定',
          handler: data => {
            this.modCart(item, 0, data.piece * 1);
          }
        }
      ]
    });
    alert.present();
  }

  modCart(item, addType, piece: number) {
    let emitNum: number;
    const loader = this.loadingCtrl.create({
      content: "修改购物车数量..."
    });
    loader.present();
    this.cartParams.goodsId = item.GoodsId;
    this.cartParams.piece = piece;
    this.cartParams.addType = addType;
    this.cartGoods.filter(goods => {
      if (goods.GoodsId == item.GoodsId) {
        if (addType == 0) {
          emitNum = piece - goods.Piece;
        } else {
          emitNum = piece;
        }
        this.service.addCart(this.cartParams).then((data => {
          if (addType == 0) {
            goods.Piece = piece;
          } else {
            goods.Piece += piece;
          }
          loader.dismiss();
          this.service.cartEvent.emit(emitNum);
          this.getTotal();
        }));
        return;
      };
    });
  }

  addCart(item) {
    this.modCart(item, 1, 1);
  }

  removeCart(item) {
    this.modCart(item, 1, -1);
  }

  //去填写订单页面
  goOrder() {
    this.appCtrl.getRootNav().push(FillOrderPage,{sumPrice:this.sumPrice,sumPiece:this.sumPiece});
    // this.navCtrl.push(FillOrderPag);
 }

}
