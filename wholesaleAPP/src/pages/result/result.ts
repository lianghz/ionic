import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WholesaleProvider, PayParams } from '../../providers/wholesale/wholesale';
import { ResultOkPage } from '../result-ok/result-ok';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  goods: any;
  result: string;
  results: any;
  payParams: PayParams;
  method: -1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: WholesaleProvider,
    public alertCtrl: AlertController) {

    let dataResult = JSON.parse(JSON.stringify(navParams.get("data")));
    this.results = dataResult[0][0];
    this.result = this.results.pramResult;
    this.goods = dataResult[1];
    // console.log("JSON.stringify(data)+" + JSON.stringify(JSON.stringify(dataResult[1])));
  }


  ionViewDidLoad() {
    // this.service.convertOrderResultEvent.subscribe(data=>{
    //   let dataResult = JSON.parse(JSON.stringify(data));
    //   console.log("JSON.stringify(data)+"+JSON.stringify(data));
    //   this.result = dataResult[0][0].pramResult;
    //   this.goods = dataResult[0][1];
    // })
    this.method = -1;
  }
  ionViewWillEnter() {

  }
  convertOrder() {
    console.log("method=" + this.method);
    if (this.method == -1) {
      this.showAlert('信息不完整', '请选择商品缺货的处理方式！');
      return;
    }

    this.payParams = new PayParams(
      1, 0,
      this.results.payType,
      this.results.address,
      this.results.phone,
      this.results.linkMan,
      "", this.method, this.results.addressId, 0, "sys"
    )

    this.service.convertOrder(this.payParams).then(data => {
      let dataResult = JSON.parse(JSON.stringify(data));
      if (dataResult[0][0].pramCode == 0) {
        // this.navCtrl.push(ResultPage, { data: data });
        let dataResult = JSON.parse(JSON.stringify(data));
        this.results = dataResult[0][0];
        this.result = this.results.pramResult;
        this.goods = dataResult[1];
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
