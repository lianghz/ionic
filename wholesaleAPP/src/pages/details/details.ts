import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WholesaleProvider, CartParams, CartNumParams } from '../../providers/wholesale/wholesale';
import { LoginPage } from '../login/login';

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
    let cartNumParams = new CartNumParams("add",1);
    const loader = this.loadingCtrl.create({
      content: "添加到购物车..."
    });
    loader.present();
    this.service.addCart(params).then((data=>{
      let rs =  JSON.parse(JSON.stringify(data));
      if(rs[0].pramCode==1)
      {
        this.service.cartEvent.emit(cartNumParams);
      }else{
        this.navCtrl.push(LoginPage);
      }
      loader.dismiss();
    })); 
  }

}
