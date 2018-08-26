import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';
import { AuthorizationProvider } from '../../providers/authorization/authorization';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  constructor(public navCtrl: NavController,public service:WholesaleProvider,public authorization:AuthorizationProvider) {

  }

  ionViewWillEnter() {
    this.authorization.verifyToken(this.navCtrl);
  }

  goOrder(){
    this.navCtrl.push(OrderPage);
  }
}
