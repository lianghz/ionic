// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { WholesaleProvider } from '../wholesale/wholesale';

/*
  Generated class for the AuthorizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthorizationProvider {

  constructor(public service:WholesaleProvider) {
    // console.log('Hello AuthorizationProvider Provider');
  }
  verifyToken(navCtrl: NavController) {
    var token = window.localStorage.getItem('token');
    // console.log("token="+token);
    if(!token){
      navCtrl.push(LoginPage);
    }else{
      this.service.verifyToken().then(data=>{
        let rs = JSON.parse(JSON.stringify(data));
        console.log("rs.status="+rs.status);
        if(rs.status=="err"){
          navCtrl.push(LoginPage);
        }
      })
    }
  }
}
