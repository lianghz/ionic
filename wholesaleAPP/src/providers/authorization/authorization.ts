// import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { WholesaleProvider } from '../wholesale/wholesale';

/*
  Generated class for the AuthorizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthorizationProvider {

  tokenEvent:EventEmitter<TokenParam> = new EventEmitter();
  tokenParam:TokenParam = new TokenParam('','','','');


  constructor(public service:WholesaleProvider) {
    // console.log('Hello AuthorizationProvider Provider');
  }
  verifyToken(navCtrl: NavController) {
    var token = window.localStorage.getItem('token');
    // console.log("token="+token);
    if(!token){
      navCtrl.setRoot(LoginPage);
      // appCtrl.getRootNav().push(LoginPage);
    }else{
      this.service.verifyToken().then(data=>{
        let rs = JSON.parse(JSON.stringify(data));
        this.tokenParam = new TokenParam(rs.status,rs.userName,rs.message,rs.token);
        if(rs.status=="err"){
          navCtrl.setRoot(LoginPage);
          // appCtrl.getRootNav().push(LoginPage);
        }else{
          this.tokenEvent.emit(this.tokenParam);
        }
      })
    }
  }
}

export class TokenParam{
  constructor(
    public status:string,
    public userName:string,
    public message:string,
    public token:string
  ){};
}
