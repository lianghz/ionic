import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider,public alertCtrl: AlertController) {
    this.sumPiece = navParams.get("sumPiece") || 0;
    this.sumPrice = navParams.get("sumPrice") || 0;
  }

  ionViewDidLoad() {
    console.log('this.navParams.get("address")=' + this.navParams.get("address"));
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

    if(!this.addrParams.address){
      this.showAlert('信息不完整','请选择一个收货地址');
      return;
    }
    if(!this.payType){
      this.showAlert('信息不完整','请选择一个付款方式');
      return;
    }
    
    // console.log("this.payParams=" + JSON.stringify(this.payParams));
    this.service.convertOrder(this.payParams).then(data => {
      this.showAlert('订单提交结果',JSON.parse(JSON.stringify(data))[0].pramResult);
      }
    )
  }

  showAlert(title,subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['确定']
    });
    alert.present();
  }
}

 class PayParams {
  constructor(
    public warehouseId: number,
    public levelId: number,
    public paidWay: number,
    // deliverStartDateTime = req.body.deliverStartDateTime;
    // deliverEndDateTime = req.body.deliverEndDateTime;
    public deliveryAddress: string,
    public mobile: string,
    public linkman: string,
    public remark: string,
    public method: number,
    public regionId: number,
    public orderType: number,
    public userId: string) { }
}
