import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ResultOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-ok',
  templateUrl: 'result-ok.html',
})

export class ResultOkPage {

  results:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public appCtrl:App) {
    let dataResult = JSON.parse(JSON.stringify(navParams.get("data")));
    this.results = dataResult[0][0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultOkPage');
  }
  finish() {
    // this.navCtrl.setRoot(TabsPage);
    console.log('finish()')
    this.appCtrl.getRootNav().push(TabsPage);
  }
  goOrder(){
    this.navCtrl.push(OrderPage);
    
  }
}
