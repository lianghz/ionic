import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FillOrderPage } from './fill-order';

@NgModule({
  declarations: [
    FillOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(FillOrderPage),
  ],
})
export class FillOrderPageModule {}
