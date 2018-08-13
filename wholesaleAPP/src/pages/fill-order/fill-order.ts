import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressListPage } from '../address-list/address-list';
import { WholesaleProvider, AddrPostParams } from '../../providers/wholesale/wholesale';

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
  addrPostParams:AddrPostParams;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider) {

  }

  ionViewDidLoad() {
    console.log('this.navParams.get("address")='+this.navParams.get("address"));
    // this.addrParams.linkMan = "梁鸿铮222";
    if (!this.navParams.get("address")) {
      this.service.getDefaultAddress(this.params).then(data => {
        if(data!=""){
        this.addrParams.regionName=data[0].Name1+data[0].Name2+data[0].Name3+data[0].Name4+data[0].Name5;
        this.addrParams.address = data[0].Address;
        this.addrParams.phone = data[0].Phone;
        this.addrParams.linkMan = data[0].LinkMan;}
      });
    } else {
      this.addrParams.address = this.navParams.get("address") || '';
      this.addrParams.phone = this.navParams.get("phone") || '';
      this.addrParams.linkMan = this.navParams.get("linkMan") || '';
      this.addrParams.regionName = this.navParams.get("regionName1")+this.navParams.get("regionName2")+this.navParams.get("regionName3")+this.navParams.get("regionName4")+this.navParams.get("regionName5") || ''
    }

    this.service.addrPostParamsEvent.subscribe(data=>{
      this.addrParams.regionName=data.regionName1+data.regionName2+data.regionName3+data.regionName4+data.regionName5;
      this.addrParams.address = data.address;
      this.addrParams.phone = data.phone;
      this.addrParams.linkMan = data.linkMan;
    })
  }
  goAddressList() {
    this.navCtrl.push(AddressListPage)
  }

}
