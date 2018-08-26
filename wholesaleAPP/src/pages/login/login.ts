import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WholesaleProvider, LoginParams, CustomerParams } from '../../providers/wholesale/wholesale';
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
  sign: string = "signin";
  customerParams:CustomerParams=new CustomerParams('','','','','',1,'','','','','1901/01/01',0,'','','');

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
        this.showAlert('用户名或密码错误，请重新再试!');
      }
    })
  }

  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: '信息提示',
      subTitle: msg,
      buttons: ['确定']
    });
    alert.present();
  }

  signout(){
    if(this.customerParams.password!=this.customerParams.password2){
      this.showAlert('重复密码不一致');
      return;
    }
    this.service.signout(this.customerParams).then(data=>{
      let rs = JSON.parse(JSON.stringify(data));
      this.showAlert(rs.pramResult);
      if(rs.pramCode == 1){
        // this.navCtrl.setRoot(TabsPage);
        this.sign = "signin";
        this.userName = this.customerParams.customerId;
      }
    })
  }

}
