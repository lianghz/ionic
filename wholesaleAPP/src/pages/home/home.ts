import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageUrl='';
  images:[any];
  params={
    levelId :0,
		warehouseId :1,
		promotionType:1
  };
  goods1:any;
  goods2:any;
  goods3:any;
  adverts:any;
  constructor(public navCtrl: NavController,public service:WholesaleProvider) {
    this.imageUrl = this.service.imageURl;
  }
  ionViewDidEnter() {
    this.service.getAdvert(this.params).then(data=>this.adverts=data);
    this.service.getWebGoods(this.params).then(data=>this.goods1 = data);
    this.params.promotionType=2;
    this.service.getWebGoods(this.params).then(data=>this.goods2 = data);
    this.params.promotionType=3;
    this.service.getWebGoods(this.params).then(data=>this.goods3 = data);
    // this.images=["http://1"];
    // for (let index = 0; index < 30; index++) {
    //   this.images.push("http://1");
    // }
    // console.log("this.images="+this.images.length)
    // this.getArea(0);
  }


}
