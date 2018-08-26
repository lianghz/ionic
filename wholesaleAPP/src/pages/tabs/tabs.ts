import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { SortPage } from '../sort/sort';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SortPage;
  tab3Root = CartPage;
  tab4Root = MyPage;
  goodsNum = 0;
  params = { id: 0 };

  constructor(public tabService: WholesaleProvider) {

  }

  ngOnInit() {
    this.tabService.getReviews('/api/document/getCarCount', this.params).then((data => {
      // console.log(JSON.stringify(data));
      let count = JSON.parse(JSON.stringify(data))[0].goodsCount;
      this.goodsNum = count ? count : 0;
    }));
    this.tabService.cartEvent.subscribe(
      data => {
        this.goodsNum += data;
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
}
