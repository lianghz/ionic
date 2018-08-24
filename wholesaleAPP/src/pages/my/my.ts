import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  constructor(public navCtrl: NavController,public service:WholesaleProvider) {

  }

  ionViewWillEnter() {
    var token = window.localStorage.getItem('token');
    // console.log("token="+token);
    if(!token){
      this.navCtrl.push(LoginPage);
    }else{
      this.service.getToken().then(data=>{
        let rs = JSON.parse(JSON.stringify(data));
        console.log("rs.status="+rs.status);
        if(rs.status=="err"){
          this.navCtrl.push(LoginPage);
        }
      })
    }
  }

  goOrder(){
    this.navCtrl.push(OrderPage);
  }
}
