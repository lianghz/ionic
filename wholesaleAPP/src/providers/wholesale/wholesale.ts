import { Http, Headers, RequestOptionsArgs } from '@angular/http';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WholesaleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WholesaleProvider {
  data: any;
  apiUrl1='/api';
  apiCompany='http://192.168.1.38';
  apiHome='http://192.168.0.153'
  apiPost=":8090";
  apiUrl = this.apiUrl1;
  public imageURl=this.apiHome + ":8080/images/";
  
  //===event===============================
  cartEvent: EventEmitter<CartNumParams> = new EventEmitter();
  hiddenAddrEvent: EventEmitter<boolean> = new EventEmitter();
  addrNameEvent: EventEmitter<string[]> = new EventEmitter();
  addrIdEvent: EventEmitter<number[]> = new EventEmitter();
  addrPostParamsEvent: EventEmitter<AddrPostParams> = new EventEmitter();
  convertOrderResultEvent: EventEmitter<any> = new EventEmitter();
  orderEvent: EventEmitter<any> = new EventEmitter();
  //============params
  requestParams: RequestOptionsArgs;

  constructor(public http: Http) {
    this.data = null;
    if(this.apiUrl!=this.apiUrl1)
      this.apiUrl += this.apiPost;
  }

  getReviews(url: string, args: any) {
    // console.log("url="+this.data);
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }

    return new Promise(resolve => {
      let headers = new Headers();
      let token = window.localStorage.getItem('token');
      headers.append('authorization', token);
      this.requestParams = { params: args, headers: headers };
      this.data = this.http.get(url, this.requestParams)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }
  postReview(url: string, args: any) {
    this.requestParams = { params: args };
    let headers = new Headers();
    let token = window.localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', token);
    return new Promise(resolve => {
      this.data = this.http.post(url, args, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  createReview(review) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });
  }

  deleteReview(id) {
    this.http.delete('http://localhost:8080/api/sort/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

  addCart(params: CartParams) {
    
    return this.postReview(this.apiUrl + '/document/addShoppingCar', params);
  }

  modifyCart(params: CartParams) {

    return this.postReview(this.apiUrl + '/document/addShoppingCar', params);
  }


  getArea(params) {
    return this.getReviews(this.apiUrl + '/common/getArea', params);
  }
  getAddress(params) {
    return this.getReviews(this.apiUrl + '/customer/getAddress', params);
  }
  getDefaultAddress(params) {
    return this.getReviews(this.apiUrl + '/customer/getDefaultAddress', params);
  }
  addAddress(params) {
    return this.postReview(this.apiUrl + '/customer/addAddress', params);

  }
  getPayType(params) {
    return this.getReviews(this.apiUrl + '/finance/getMoneyType', params);
  }
  convertOrder(params) {
    return this.postReview(this.apiUrl + '/document/convertOrder', params);
  }

  getWebGoods(params){
    return this.getReviews(this.apiUrl + '/goods/getwebgoods', params);
  }

  getAdvert(params){
    return this.getReviews(this.apiUrl + '/community/getAdvert', params);
  }
  getNavigation(params){
    return this.getReviews(this.apiUrl + '/goods/getNavigation', params);
  }
  getGoodsPage(params){
    return this.getReviews(this.apiUrl + '/goods/getGoodsInfoPage', params);
  }
  getCarGoods(params){
    return this.getReviews(this.apiUrl + '/document/getCarGoods', params);
  }
  getCarCount(params){
      this.getReviews(this.apiUrl + '/document/getCarCount', params).then(data=>{
      let count = JSON.parse(JSON.stringify(data))[0].goodsCount;
      let cartNumParams = new CartNumParams("over",count);
      this.cartEvent.emit(cartNumParams);
    });
  }
  
  
  getOrderList(params) {
    let headers: any;
    return this.getReviews(this.apiUrl + '/document/getOrderList', params).then(data => {
      headers = data[0];
      let details = JSON.parse(JSON.stringify(data[1]));

      headers = headers.map(item => {
        let sumAmount = 0;
        let sumQuantity = 0;
        let detail = details.filter(detail => {
          if (detail.OrderId == item.OrderId) {
            sumAmount += detail.Price * detail.Piece;
            sumQuantity += detail.Piece * 1;
            return detail;
          }
        })
        item = { "header": item, "detail": detail, "sumAmount": sumAmount, "sumQuantity": sumQuantity };
        return item;
      })
      // this.orderEvent.emit(headers);
      return headers;
    });
  }

  login(params: LoginParams) {
    return this.postReview(this.apiUrl + '/customer/login', params);
  }

  refreshToken() {
    return this.postReview(this.apiUrl + '/customer/refresh', { id: 0 });
  }

  verifyToken() {

    return this.postReview(this.apiUrl + '/customer/verifytoken', { id: 0 });
  }

  signout(customerParams:CustomerParams){
    return this.postReview(this.apiUrl + '/customer/addCustomer',customerParams);
  }


}

export class AddrPostParams {
  constructor(
    public addressId: number,
    public regionId1: number,
    public regionId2: number,
    public regionId3: number,
    public regionId4: number,
    public regionId5: number,
    public regionName1: string,
    public regionName2: string,
    public regionName3: string,
    public regionName4: string,
    public regionName5: string,
    public address: string,
    public phone: string,
    public linkMan: string,
    public isDefault: number) { }
};

export class PayParams {
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

export class CartParams {
  constructor(
    public addType: number,
    public goodsId: number,
    public cases: number,
    public piece: number,
    public levelId: number,
    public warehouseId: number) { }
}
export class CartNumParams {
  constructor(
    public addType: string,//add or over
    public num: number) { }
}

export class LoginParams {
  constructor(
    public userName: string,
    public password: string
  ) { }
}

export class TokenStatus {
  constructor(
    public status: string,
    public message: string
  ) { }
}

export class CustomerParams {
  constructor(
    public customerId:string,
		public nickName:string,
		public customerName:string,
		public address1 :string,
		public address2 :string,
		public regionId:number=0,
		public idcard:string,
		public telphone:string,
		public mobile:string,
		public sex :string,
		public birthday :string,
		public jobId:number=0,
		public email :string,
    public password:string,
    public password2:string
  ) { }
}

