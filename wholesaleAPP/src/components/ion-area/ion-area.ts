import { Component, Input } from '@angular/core';
import { WholesaleProvider, AddrPostParams } from '../../providers/wholesale/wholesale';

/**
 * Generated class for the IonAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-area',
  templateUrl: 'ion-area.html'
})
export class IonAreaComponent {

  addrParams = { "level": 0, "parentId": -1 }
  areaList: any;
  addrParentIds = [-1, -1, -1, -1];
  addrLevelNames = ['', '', '', ''];
  addrLevelHiddens = [true, true, true, true];
  addrAreas = "";//所选择区域的合并
  // addrLevelHiddens=[false,false,false,false];
  addrLevelId = 0;
  addrId = 0;
  addrPostParams: AddrPostParams;
  @Input()
  hiddenAddr = true;
  constructor(public service: WholesaleProvider) {
    

    // this.text = "aaaa";
  }

  closeAddr() {
    this.hiddenAddr = true;
  }
  ngOnInit() {
    this.service.hiddenAddrEvent.subscribe(data => {
      // console.log("hide2="+data);
      this.hiddenAddr = data;
    })
    // this.getCartGoods();
    this.service.addrPostParamsEvent.subscribe(
      data => {
        this.addrPostParams = data;
        this.addrLevelHiddens[0] = this.addrPostParams.regionId1==0?true:false;
        this.addrLevelHiddens[1] = this.addrPostParams.regionId2==0?true:false;
        this.addrLevelHiddens[2] = this.addrPostParams.regionId3==0?true:false;
        this.addrLevelHiddens[3] = this.addrPostParams.regionId4==0?true:false;
        this.addrParentIds[0]=this.addrPostParams.regionId1;
        this.addrParentIds[1]=this.addrPostParams.regionId2;
        this.addrParentIds[2]=this.addrPostParams.regionId3;
        this.addrParentIds[3]=this.addrPostParams.regionId4;
        // this.addrLevelHiddens[4] = this.addrPostParams.regionId1==0?true:false;
        this.addrLevelNames[0] = this.addrPostParams.regionName1;
        this.addrLevelNames[1] = this.addrPostParams.regionName2;
        this.addrLevelNames[2] = this.addrPostParams.regionName3;
        this.addrLevelNames[3] = this.addrPostParams.regionName4;
        for (let index = 0; index < this.addrLevelNames.length; index++) {
          this.addrLevelId = !this.addrLevelHiddens[index]?this.addrParentIds[index]:0;
        }
      })
      this.getArea(this.addrLevelId);
  }
  ionViewWillEnter() {
    // this.getCartGoods();
    // this.text = "cccc";
  }
  getArea(levelId) {
    this.addrParams.parentId = this.addrParentIds[levelId];
    this.addrId = this.addrParentIds[levelId + 1];
    // console.log('this.addrId='+this.addrId);
    this.addrParams.level = levelId;
    this.addrLevelId = levelId;
    this.service.getArea(this.addrParams).then(
      (data => {
        this.areaList = data;
      })
    )
  }

  getNextArea(item) {
    this.addrParams.parentId = item.Id;
    this.addrId = item.Id;
    // console.log('item.Id='+item.Id);
    this.addrLevelNames[this.addrLevelId] = item.Name;
    this.addrParentIds[this.addrLevelId] = item.Id;
    this.addrLevelId += 1 * 1;
    for (var i = this.addrLevelId; i < 4; i++) {
      this.addrLevelHiddens[i] = true;
      this.addrLevelNames[i] = "";
      this.addrParentIds[i] = 0;
    }
    this.addrLevelHiddens[this.addrLevelId] = false;
    this.addrParams.level = this.addrLevelId;

    this.service.getArea(this.addrParams).then(
      (data => {
        this.areaList = data;
        if (data == "") {
          this.addrLevelHiddens[this.addrLevelId] = true;
          this.addrAreas = "";

          this.service.addrNameEvent.emit(this.addrLevelNames);
          this.service.addrIdEvent.emit(this.addrParentIds);
          this.closeAddr();
          // console.log('data='+JSON.stringify(data));
        }

      })
    )
  }

}
