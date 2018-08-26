import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddressListPage } from '../address-list/address-list';
import { WholesaleProvider, AddrPostParams, PayParams } from '../../providers/wholesale/wholesale';
import { ResultPage } from '../result/result';
import { ResultOkPage } from '../result-ok/result-ok';
import { AuthorizationProvider } from '../../providers/authorization/authorization';

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
    regionName: "",
    address: "",
    phone: "",
    linkMan: "",
    addressId: 0
  };
  params = {
    id: Math.random()
  }
  sumPiece = 0;
  sumPrice = 0;
  defaultAddres: any;
  addrPostParams: AddrPostParams;
  payTypes: any;
  payType: any;
  payParams: PayParams;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider, 
    public alertCtrl: AlertController,public authorization:AuthorizationProvider) {
    this.sumPiece = navParams.get("sumPiece") || 0;
    this.sumPrice = navParams.get("sumPrice") || 0;
  }
  ionViewWillEnter() {
    this.authorization.verifyToken(this.navCtrl);
  }
  
  ionViewDidLoad() {
    // console.log('this.navParams.get("address")=' + this.navParams.get("address"));
    // this.addrParams.linkMan = "梁鸿铮222";


    if (!this.navParams.get("address")) {
      this.service.getDefaultAddress(this.params).then(data => {
        if (data != "") {
          this.addrParams.regionName = data[0].Name1 + data[0].Name2 + data[0].Name3 + data[0].Name4 + data[0].Name5;
          this.addrParams.address = data[0].Address;
          this.addrParams.phone = data[0].Phone;
          this.addrParams.linkMan = data[0].LinkMan;
          this.addrParams.addressId = data[0].AddressId;
        }
      });
    } else {
      this.addrParams.address = this.navParams.get("address") || '';
      this.addrParams.phone = this.navParams.get("phone") || '';
      this.addrParams.linkMan = this.navParams.get("linkMan") || '';
      this.addrParams.regionName = this.navParams.get("regionName1") + this.navParams.get("regionName2") + this.navParams.get("regionName3") + this.navParams.get("regionName4") + this.navParams.get("regionName5") || ''
      this.addrParams.addressId = this.navParams.get("addressId") || 0;
    }

    this.service.addrPostParamsEvent.subscribe(data => {
      this.addrParams.regionName = data.regionName1 + data.regionName2 + data.regionName3 + data.regionName4 + data.regionName5;
      this.addrParams.address = data.address;
      this.addrParams.phone = data.phone;
      this.addrParams.linkMan = data.linkMan;
    })

    this.service.getPayType(this.params).then(data => {
      this.payTypes = data;
    });

  }

  goAddressList() {
    this.navCtrl.push(AddressListPage)
  }
  convertOrder() {
    this.payParams = new PayParams(
      1, 0,
      this.payType,
      this.addrParams.address,
      this.addrParams.phone,
      this.addrParams.linkMan,
      "", 0, this.addrParams.addressId, 0, "sys"
    )

    if (!this.addrParams.address) {
      this.showAlert('信息不完整', '请选择一个收货地址');
      return;
    }
    if (!this.payType) {
      this.showAlert('信息不完整', '请选择一个付款方式');
      return;
    }

    this.service.convertOrder(this.payParams).then(data => {
      let dataResult = JSON.parse(JSON.stringify(data));

      if (dataResult[0][0].pramCode == 0) {
        this.navCtrl.push(ResultPage, { data: data });
      }
      else {
        this.navCtrl.push(ResultOkPage, { data: data });
      }
    }
    )
  }

  showAlert(title, subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['确定']
    });
    alert.present();
  }
}


