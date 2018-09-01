import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { SortPage } from '../sort/sort';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SortPage;
  public tab3Root = CartPage;
  public tab4Root = MyPage;
  goodsNum = 0;
  params = { id: 0 };

  constructor(public tabService: WholesaleProvider,public navCtrl: NavController) {

  }

  ngOnInit() {
    //this.tabService.getReviews('/api/document/getCarCount', this.params).then((data => {

    this.tabService.cartEvent.subscribe(
      data => {
        if (data == 0) {
          this.goodsNum = 0;
        } else {
          this.goodsNum += data;
        }
        console.log("this.goodsNumEvent=" + data);
      }
    )
  }
  ionViewWillEnter() {
    // var token = window.localStorage.getItem('token');
    // console.log("token="+token);
    this.tabService.refreshToken().then(data => {
      let rs = JSON.parse(JSON.stringify(data));
      window.localStorage.setItem('token', rs.token);
    })
  }
  ionViewDidEnter() {
    this.tabService.getCarCount(this.params);
  }

  changeTab(even){
    // let title = even._app._title;
    // console.log("even._app._title="+even._app._title);
    // if(title=='登陆'){
    //   this.navCtrl.;
    // }
  }
 
}
