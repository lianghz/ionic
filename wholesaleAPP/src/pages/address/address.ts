import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WholesaleProvider, AddrPostParams } from '../../providers/wholesale/wholesale';
import { FillOrderPage } from '../fill-order/fill-order';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  hiddenAddr = true;
  addrAreas = "";
  addrParams = {
    regionId1: "",
    regionId2: "",
    regionId3: "",
    regionId4: "",
    regionId5: "",
    address: "",
    phone: "",
    linkMan: ""
  };
  addrNameParams = {
    address: "",
    phone: "",
    linkMan: "",
    regionName: ""
  };

  addrPostParams: AddrPostParams;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider) {


  }

  ionViewDidLoad() {
    this.service.addrIdEvent.subscribe(data => {
      this.addrParams.regionId1 = data[0];
      this.addrParams.regionId2 = data[1];
      this.addrParams.regionId3 = data[2];
      this.addrParams.regionId4 = data[3];
      this.addrParams.regionId5 = data[4];
    })

    this.service.addrNameEvent.subscribe(data => {
      this.addrAreas = "";
      for (var i = 0; i < 4; i++) {
        this.addrAreas += data[i];
      }
      this.addrNameParams.regionName = this.addrAreas;
    })

    this.addrParams.linkMan = this.navParams.get("linkMan")||"";
    this.addrParams.phone = this.navParams.get("phone")||"";
    this.addrParams.address = this.navParams.get("address")||"";

    this.addrPostParams = new AddrPostParams(
      this.navParams.get("addressId") || 0,
      this.navParams.get("regionId1")||0,
      this.navParams.get("regionId2")||0,
      this.navParams.get("regionId3")||0,
      this.navParams.get("regionId4")||0,
      this.navParams.get("regionId5")||0,
      this.navParams.get("regionName1") || "",
      this.navParams.get("regionName2") || "",
      this.navParams.get("regionName3") || "",
      this.navParams.get("regionName4") || "",
      this.navParams.get("regionName5") || "",
      this.navParams.get("address"),
      this.navParams.get("phone")|| "",
      this.navParams.get("linkMan") || ""
    );
    // this.addrPostParams.address = this.navParams.get("address");
    // this.addrPostParams.addressId = this.navParams.get("addressId") || 0;
    // this.addrPostParams.linkMan = this.navParams.get("linkMan") || "";
    // this.addrPostParams.phone = this.navParams.get("phone") || "";
    // this.addrPostParams.regionId1 = this.navParams.get("regionId1") || 0;
    // this.addrPostParams.regionId2 = this.navParams.get("regionId2") || 0;
    // this.addrPostParams.regionId3 = this.navParams.get("regionId3") || 0;
    // this.addrPostParams.regionId4 = this.navParams.get("regionId4") || 0;
    // this.addrPostParams.regionId5 = this.navParams.get("regionId5") || 0;
    // this.addrPostParams.regionName1 = this.navParams.get("regionName1") || "";
    // this.addrPostParams.regionName2 = this.navParams.get("regionName2") || "";
    // this.addrPostParams.regionName3 = this.navParams.get("regionName3") || "";
    // this.addrPostParams.regionName4 = this.navParams.get("regionName4") || "";
    // this.addrPostParams.regionName5 = this.navParams.get("regionName5") || "";

    this.addrAreas = this.addrPostParams.regionName1
      + this.addrPostParams.regionName2
      + this.addrPostParams.regionName3
      + this.addrPostParams.regionName4
      + this.addrPostParams.regionName5;
    this.service.addrPostParamsEvent.emit(this.addrPostParams);
    // console.log("this.addrAreas="+this.addrAreas);

  }

  showArea() {
    this.service.hiddenAddrEvent.emit(false);
  }

  addAddr() {
    // console.log("linkman="+this.addrParams.linkMan)
    this.addrNameParams.address = this.addrParams.address;
    this.addrNameParams.linkMan = this.addrParams.linkMan;
    this.addrNameParams.phone = this.addrParams.phone;
    this.service.addAddress(this.addrParams).then(data => {
      this.navCtrl.push(FillOrderPage, this.addrNameParams);
    })
  }

}
