import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';
import { LoadingController } from 'ionic-angular';
import { DetailsPage } from '../../pages/details/details';


/**
 * Generated class for the IonGoodsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-goods',
  templateUrl: 'ion-goods.html'
})

export class IonGoodsComponent {
  @Input() goods: any;

  params={
    "addType":1,
    "goodsId":0,
    "cases":0,
    "piece":1,
    "levelId":0,
    "warehouseId":1
  }
  imageUrl="";
  constructor(public navCtrl: NavController,public service: WholesaleProvider,public loadingCtrl: LoadingController) {
    // console.log('Hello IonGoodsComponent Component');
    this.imageUrl = this.service.imageURl;
  }

  addCart(goods){
    this.params.goodsId = goods.GoodsId;
    const loader = this.loadingCtrl.create({
      content: "添加到购物车..."
    });
    loader.present();
    this.service.addCart(this.params).then((data=>{
      // console.log("data=="+JSON.stringify(goods));
      loader.dismiss();
      this.service.cartEvent.emit(1);
    })); 
  }
  goDetail(goods){
    this.navCtrl.push(DetailsPage,{goods:goods});
  }
}


// class Params{
//   constructor(public addType: number,public goodsId: number,public cases: number,
//     public piece:number,levelId:number,warehouseId:num
//   ) {
//     // console.log('Hello IonGoodsComponent Component');
//   }
// }
