import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public service:WholesaleProvider) {

  }



}
