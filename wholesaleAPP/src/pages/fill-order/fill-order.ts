import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressListPage } from '../address-list/address-list';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

/**
 * Generated class for the FillOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fill-order',
  templateUrl: 'fill-order.html',
})
export class FillOrderPage {
  addrParams = {
    // regionId1:"",
    // regionId2 :"",
    // regionId3 :"",
    // regionId4 :"",
    // regionId5 :"",
    regionName:"",
    address: "",
    phone: "",
    linkMan: "",
  };
  params = {
    id: Math.random()
  }
  defaultAddres: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FillOrderPage');
    // this.addrParams.linkMan = "梁鸿铮222";
    if (!this.navParams.get("address")) {
      this.service.getDefaultAddress(this.params).then(data => {
        this.addrParams.regionName=data[0].Name1+data[0].Name2+data[0].Name3+data[0].Name4+data[0].Name5;
        this.addrParams.address = data[0].Address;
        this.addrParams.phone = data[0].Phone;
        this.addrParams.linkMan = data[0].LinkMan;
      });
    } else {
      this.addrParams.address = this.navParams.get("address") || '';
      this.addrParams.phone = this.navParams.get("phone") || '';
      this.addrParams.linkMan = this.navParams.get("linkMan") || '';
      this.addrParams.regionName = this.navParams.get("regionName") || ''
    }
  }
  goAddressList() {
    this.navCtrl.push(AddressListPage)
  }

}
