import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

/**
 * Generated class for the AddressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {
  addrparams = { id: Math.random() };
  addressList: any;

  addrPostParams = {
    addressId:"",
    regionId1: "",
    regionId2: "",
    regionId3: "",
    regionId4: "",
    regionId5: "",
    regionName1: "",
    regionName2: "",
    regionName3: "",
    regionName4: "",
    regionName5: "",
    address: "",
    phone: "",
    linkMan: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider) {
  }

  ionViewDidLoad() {
    this.getAddr();
  }

  goAddr(item) {
    // console.log("item="+item);
    if (this.addrPostParams) {
      this.addrPostParams.addressId = item.AddressId;
      this.addrPostParams.regionId1 = item.RegionId1;
      this.addrPostParams.regionId2 = item.RegionId2;
      this.addrPostParams.regionId3 = item.RegionId3;
      this.addrPostParams.regionId4 = item.RegionId4;
      this.addrPostParams.regionId5 = item.RegionId5;
      this.addrPostParams.regionName1 = item.Name1;
      this.addrPostParams.regionName2 = item.Name2;
      this.addrPostParams.regionName3 = item.Name3;
      this.addrPostParams.regionName4 = item.Name4;
      this.addrPostParams.regionName5 = item.Name5;
      this.addrPostParams.address = item.Address;
      this.addrPostParams.phone = item.Phone;
      this.addrPostParams.linkMan = item.LinkMan;
      this.navCtrl.push(AddressPage,this.addrPostParams);
      // this.service.addrPostParamsEvent.emit(this.addrPostParams);
    }
  }

  getAddr() {
    this.service.getAddress(this.addrparams).then(data => {
      this.addressList = data;
    })
  }
}




