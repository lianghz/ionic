import { NgModule } from '@angular/core';
import { IonGoodsComponent } from './ion-goods/ion-goods';
import { IonAreaComponent } from './ion-area/ion-area';
@NgModule({
	declarations: [IonGoodsComponent,
    IonAreaComponent],
	imports: [],
	exports: [IonGoodsComponent,
    IonAreaComponent]
})
export class ComponentsModule {}
