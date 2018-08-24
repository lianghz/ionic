import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WholesaleProvider, LoginParams } from '../../providers/wholesale/wholesale';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName = "";
  password = "";
  loginParams: LoginParams;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginParams = new LoginParams(this.userName, this.password);
    this.service.login(this.loginParams).then(data => {
      let rs = JSON.parse(JSON.stringify(data));
      if (rs.status == "success") {
        window.localStorage.setItem('token', rs.token);
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.showAlert();
      }
    })
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '登陆失败!',
      subTitle: '用户名或密码错误，请重新再试!',
      buttons: ['确定']
    });
    alert.present();
  }

}
