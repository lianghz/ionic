import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Tabs, App } from 'ionic-angular';
import { WholesaleProvider, LoginParams, CustomerParams } from '../../providers/wholesale/wholesale';
import { TabsPage } from '../tabs/tabs';
import { CartPage } from '../cart/cart';
import { MyPage } from '../my/my';

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
  customerParams: CustomerParams = new CustomerParams('', '', '', '', '', 1, '', '', '', '', '1901/01/01', 0, '', '', '');
  // tabpages: TabsPage;


  // tabpages.tab3Root = CartPage;
  // tabpages.tab4Root = MyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider,
    public alertCtrl: AlertController, public tabs: Tabs, public appCtrl: App) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    // console.log(this.navCtrl.);
    this.loginParams = new LoginParams(this.userName, this.password);
    this.service.login(this.loginParams).then(data => {
      let rs = JSON.parse(JSON.stringify(data));
      if (rs.status == "success") {
        window.localStorage.setItem('token', rs.token);
        // this.navCtrl.setRoot(HomePage);
        

        for (let index = 0; index < this.navCtrl.length(); index++) {
          console.log("index=" + index);
          console.log("name=" + this.navCtrl.getByIndex(index).name);

          // this.navCtrl.pop();
        }
        // this.appCtrl.getRootNav().push(TabsPage);
        this.appCtrl.getRootNav().push(TabsPage, { id:0 });
        
        // navs[2].setRoot(CartPage);
        // navs[3].setRoot(MyPage);
        this.service.getCarCount({ id: 1 });
        // this.tabs.select(0);
        // this.navCtrl.setRoot(TabsPage);
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

  signout() {
    if (this.customerParams.password != this.customerParams.password2) {
      this.showAlert('重复密码不一致');
      return;
    }
    this.service.signout(this.customerParams).then(data => {
      let rs = JSON.parse(JSON.stringify(data));
      this.showAlert(rs.pramResult);
      if (rs.pramCode == 1) {
        // this.navCtrl.setRoot(TabsPage);
        this.sign = "signin";
        this.userName = this.customerParams.customerId;
      }
    })
  }

}
