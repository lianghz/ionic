import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';
import { AuthorizationProvider, TokenParam } from '../../providers/authorization/authorization';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  tokenParam:TokenParam=new TokenParam('','','','');
  constructor(public navCtrl: NavController,public service:WholesaleProvider,public authorization:AuthorizationProvider,
  public appCtrl:App) {

  }

  ionViewWillEnter() {
    this.authorization.verifyToken(this.navCtrl);
  }

  ionViewDidEnter(){
    this.authorization.tokenEvent.subscribe(data=>{
      this.tokenParam = data
    });
  }

  goOrder(){
    this.navCtrl.push(OrderPage);
  }

  logout(){
    window.localStorage.removeItem('token');
    this.navCtrl.setRoot(LoginPage);
    this.service.cartEvent.emit(0);
  }
}
