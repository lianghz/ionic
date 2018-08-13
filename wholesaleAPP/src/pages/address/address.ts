import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
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
    regionId1: 0,
    regionId2: 0,
    regionId3: 0,
    regionId4: 0,
    regionId5: 0,
    address: "",
    phone: "",
    linkMan: "",
    isDefault: 0
  };
  addrNameParams = {
    address: "",
    phone: "",
    linkMan: "",
    regionName: ""
  };
  defaultAddr = false;
  addrPostParams: AddrPostParams;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider) {


  }

  ionViewDidLoad() {
    this.service.addrIdEvent.subscribe(data => {
      this.addrPostParams.regionId1 = data[1];
      this.addrPostParams.regionId2 = data[2];
      this.addrPostParams.regionId3 = data[3];
      // this.addrPostParams.regionId4 = data[4];
      // this.addrPostParams.regionId5 = data[5];
    })

    this.service.addrNameEvent.subscribe(data => {
      this.addrAreas = "";
      for (var i = 0; i < 4; i++) {
        this.addrAreas += data[i];
      }
      this.addrPostParams.regionName1 = data[0];
      this.addrPostParams.regionName2 = data[1];
      this.addrPostParams.regionName3 = data[2];
      this.addrPostParams.regionName4 = "";
      this.addrPostParams.regionName5 = "";
      this.addrNameParams.regionName = this.addrAreas;
    })

    this.addrPostParams = new AddrPostParams(
      this.navParams.get("addressId") || 0,
      this.navParams.get("regionId1") || 0,
      this.navParams.get("regionId2") || 0,
      this.navParams.get("regionId3") || 0,
      this.navParams.get("regionId4") || 0,
      this.navParams.get("regionId5") || 0,
      this.navParams.get("regionName1") || "",
      this.navParams.get("regionName2") || "",
      this.navParams.get("regionName3") || "",
      this.navParams.get("regionName4") || "",
      this.navParams.get("regionName5") || "",
      this.navParams.get("address"),
      this.navParams.get("phone") || "",
      this.navParams.get("linkMan") || "",
      this.defaultAddr ? 1 : 0
    );
    this.addrParams.linkMan = this.navParams.get("linkMan") || "";
    this.addrParams.phone = this.navParams.get("phone") || "";
    this.addrParams.address = this.navParams.get("address") || "";
    this.addrParams.regionId1 = this.addrPostParams.regionId1;
    this.addrParams.regionId2 = this.addrPostParams.regionId2;
    this.addrParams.regionId3 = this.addrPostParams.regionId3;
    this.addrParams.regionId4 = this.addrPostParams.regionId4;
    this.addrParams.regionId5 = this.addrPostParams.regionId5;

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
    console.log("this.addrParams.address=" + this.addrParams.address)
    this.addrPostParams.address = this.addrParams.address;
    this.addrPostParams.linkMan = this.addrParams.linkMan;
    this.addrPostParams.phone = this.addrParams.phone;

    this.service.addAddress(this.addrPostParams).then(data => {
      this.service.addrPostParamsEvent.emit(this.addrPostParams);
      // this.navCtrl.popTo(this.navCtrl.getByIndex(1));
      // for (let index = 0; index < this.navCtrl.getViews().length; index++) {
      //   const element = this.navCtrl.getByIndex(index);
      //   console.log("view="+index+"-"+element.name);
        
      // }
      this.popToPage(this.navCtrl,"FillOrderPage");

    })
  }

  setDefault() {
    // console.log("this.defaultAddr="+this.defaultAddr);
    this.defaultAddr = !this.defaultAddr;
    this.addrPostParams.isDefault = this.defaultAddr ? 1 : 0;

  }

  popToPage(navCtrl:NavController,pageName:string){
    navCtrl.getViews().forEach(item => {
      if (item.name == pageName) {
        this.navCtrl.popTo(item);
      }
    });
  }

}
