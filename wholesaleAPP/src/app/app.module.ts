import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { ComponentsModule } from '../components/components.module';
// import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Http, Headers,HttpModule  } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MyPage } from '../pages/my/my';
import { SortPage } from '../pages/sort/sort';
import { CartPage } from '../pages/cart/cart';
import { TabsPage } from '../pages/tabs/tabs';
import {IonGoodsComponent} from '../components/ion-goods/ion-goods';
// import {ComponentsModule} from '../components/components.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WholesaleProvider } from '../providers/wholesale/wholesale';
import { IonAreaComponent } from '../components/ion-area/ion-area';
import { FillOrderPage } from '../pages/fill-order/fill-order';
import { AddressListPage } from '../pages/address-list/address-list';
import { AddressPage } from '../pages/address/address';
import { ResultPage } from '../pages/result/result';
import { ResultOkPage } from '../pages/result-ok/result-ok';
import { OrderPage } from '../pages/order/order';

@NgModule({
  declarations: [
    MyApp,
    SortPage,
    MyPage,
    CartPage,
    HomePage,
    TabsPage,
    IonGoodsComponent,
    IonAreaComponent,
    FillOrderPage,
    AddressListPage,
    AddressPage,
    ResultPage,
    ResultOkPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SortPage,
    MyPage,
    CartPage,
    HomePage,
    TabsPage,
    IonGoodsComponent,
    FillOrderPage,
    AddressListPage,
    AddressPage,
    ResultPage,
    ResultOkPage,
    OrderPage
    // IonAreaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WholesaleProvider,
    // HttpClient
  ]
})
export class AppModule {}
