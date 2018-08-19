import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WholesaleProvider, CartParams } from '../../providers/wholesale/wholesale';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})

export class OrderPage {
  params={
    pageNo:1
  }
  orders:any;
  cartParams = new CartParams(1,0,0,1,0,1);
  constructor(public navCtrl: NavController, public navParams: NavParams,public service : WholesaleProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderPage');
    this.service.getOrderList(this.params);
    this.service.orderEvent.subscribe(data=>{
      this.orders = data;
      // console.log("this.orders="+JSON.stringify(this.orders));
    })
  }

  buyMore(order){
    let emitNum: number;
    emitNum = 0;
    const loader = this.loadingCtrl.create({
      content: "添加到购物车数量..."
    });
    loader.present();
    order.forEach(element => {
      this.cartParams.goodsId = element.GoodsId;
      this.cartParams.piece = element.Piece;
      emitNum += element.Piece*1;
      this.service.addCart(this.cartParams).then(data=>{
        // console.log("1")
      })
      // console.log("2")
    });
    
    loader.dismiss();
    this.service.cartEvent.emit(emitNum);
    this.navCtrl.push(CartPage);

  }

}
