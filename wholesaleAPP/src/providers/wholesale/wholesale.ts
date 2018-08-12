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
  cartEvent: EventEmitter<number> = new EventEmitter();
  hiddenAddrEvent: EventEmitter<boolean> = new EventEmitter();
  addrNameEvent: EventEmitter<string[]> = new EventEmitter();
  addrIdEvent: EventEmitter<number[]> = new EventEmitter();
  addrPostParamsEvent: EventEmitter<AddrPostParams> = new EventEmitter();

  requestParams: RequestOptionsArgs;

  constructor(public http: Http) {
    this.data = null;
  }

  getReviews(url: string, args: any) {
    // console.log("url="+this.data);
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }

    return new Promise(resolve => {

      this.requestParams = { params: args };
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
    headers.append('Content-Type', 'application/json');
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

  addCart(params) {
    return this.postReview('/api/document/addShoppingCar', params);
  }
  getArea(params) {
    return this.getReviews('/api/common/getArea', params);
  }
  getAddress(params) {
    return this.getReviews('/api/customer/getAddress', params);
  }
  getDefaultAddress(params) {
    return this.getReviews('/api/customer/getDefaultAddress', params);
  }
  addAddress(params) {
    return this.postReview('/api/customer/addAddress', params);
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
    public linkMan: string) { }
};