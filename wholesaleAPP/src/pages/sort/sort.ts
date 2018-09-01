import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';
import { RequestOptionsArgs } from '@angular/http';

@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html'
})
export class SortPage {
  @ViewChild('scroll') scrollElement: any;
  @ViewChild('spinner') spinnerElement: any;
  goods: any;
  sorts: any;
  params = { categroyId: 1, pageNo: 1 };

  selectedMenuTarget: any;
  hasmore = true;
  islock = false;

  constructor(public navCtrl: NavController, public sortService: WholesaleProvider) {

  }

  ionViewDidLoad() {
    this.getCatagroyData();
    this.addScrollEventListener();
  }

  getCatagroyData() {
      this.sortService.getNavigation(this.params).then((data) => {
      //this.sortService.getReviews('http://192.168.0.153:8090/goods/getNavigation', this.params).then((data) => {
      
      this.sorts = data;
      if (data[0]) {
        this.params.categroyId = data[0].CategroyId;
        this.getGoodsData();
      }
    });
  }
  addScrollEventListener() {
    this.scrollElement._scrollContent.nativeElement.onscroll = event => {
      if (this.spinnerElement) {
        //元素顶端到可见区域顶端的距离
        var top = this.spinnerElement.nativeElement.getBoundingClientRect().top;
        //可见区域高度
        var clientHeight = document.documentElement.clientHeight;
        if (top <= clientHeight) {
          // console.log("ready loadmore...");
          this.doInfinite();
        }
      }
    }
  }

  getGoods(c, event) {

    var initSelected: any = document.getElementsByClassName('menuItem');
    if (initSelected[0].classList.contains("active")) {
      initSelected[0].classList.remove("active")
    }

    //移除上次选中菜单的样式
    if (this.selectedMenuTarget) {
      this.selectedMenuTarget.classList.remove("active")
    }

    //修改本次选中菜单的样式
    event.currentTarget.classList.add("active");

    //将本次选中的菜单记录
    this.selectedMenuTarget = event.currentTarget;

    this.hasmore = true;

    // console.log("c.CategroyId="+c.CategroyId);
    this.params.categroyId = c.CategroyId;
    this.params.pageNo = 1;
    this.getGoodsData();

  }

  getGoodsData() {
    // console.log("cate="+this.params);
    this.sortService.getGoodsPage(this.params).then((data) => {

      this.goods = data;
    });
    this.params.pageNo += 1;
  }

  doInfinite() {
    if (this.islock) {
      return;
    }
    if (this.hasmore == false) {
      return;
    }
    this.islock = true;
    this.sortService.getGoodsPage(this.params).then((data) => {
      this.islock = false;
      if (data != "") {
        this.goods = this.goods.concat(data);
        this.params.pageNo += 1;
      } else {
        this.hasmore = false;
        console.log("没有数据啦！")
      }
    });
  }

  goDetails(item) {
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }

}
