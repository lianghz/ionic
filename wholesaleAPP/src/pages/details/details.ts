import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WholesaleProvider, CartParams } from '../../providers/wholesale/wholesale';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  imageUrl:string;
  goods:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:WholesaleProvider,
    public loadingCtrl:LoadingController) {
    // let dataResult = JSON.parse(JSON.stringify(navParams.get("data")));
    this.goods = JSON.parse(JSON.stringify(navParams.get("goods")));//navParams.get("goods")
    this.imageUrl = this.service.imageURl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  addCart(goods){
    let params= new CartParams(1,goods.GoodsId,0,1,0,1);
    const loader = this.loadingCtrl.create({
      content: "添加到购物车..."
    });
    loader.present();
    this.service.addCart(params).then((data=>{
      // console.log("data=="+JSON.stringify(goods));
      loader.dismiss();
      this.service.cartEvent.emit(1);
    })); 
  }

}
