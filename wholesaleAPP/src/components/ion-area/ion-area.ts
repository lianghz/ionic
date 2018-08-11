import { Component, Input } from '@angular/core';
import { WholesaleProvider } from '../../providers/wholesale/wholesale';

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
  @Input() 
  text:string;

  addrParams={"level":0,"parentId":-1}
  areaList:any;
  addrParentIds =[-1,-1,-1,-1];
  addrLevelNames =['','','',''];
  addrLevelHiddens=[true,true,true,true];
  // addrLevelHiddens=[false,false,false,false];
  addrLevelId = 0;
  addrId=0;
  hiddenAddr = true;
  constructor(public service: WholesaleProvider) {
    
    // this.text = "aaaa";
  }

   closeAddr(){
    this.hiddenAddr = true;
  }
  ngOnInit() {
    // this.getCartGoods();
    
    this.getArea(0);
  }
  ionViewWillEnter() {
    // this.getCartGoods();
    // this.text = "cccc";
    this.text = "cccc";
  }
  getArea(levelId){
    this.addrParams.parentId = this.addrParentIds[levelId];
    this.addrId = this.addrParentIds[levelId+1];
    console.log('this.addrId='+this.addrId);
    this.addrParams.level = levelId;
    this.addrLevelId = levelId;
    this.service.getArea(this.addrParams).then(
      (data=>{
        this.areaList = data; 
      })
    )
  }

  getNextArea(item){
    this.addrParams.parentId = item.Id;
    this.addrId = item.Id;
    console.log('item.Id='+item.Id);
    this.addrLevelNames[this.addrLevelId]=item.Name;
    this.addrLevelId +=1*1;
    for(var i=this.addrLevelId;i<4;i++){
      this.addrLevelHiddens[i]=true;
      this.addrLevelNames[i]="";
    }
    this.addrLevelHiddens[this.addrLevelId]=false;
    this.addrParams.level = this.addrLevelId;
    this.addrParentIds[this.addrLevelId]=item.Id;
    this.service.getArea(this.addrParams).then(
      (data=>{
        this.areaList = data; 
        if(data==""){
          this.addrLevelHiddens[this.addrLevelId]=true;
          // this.closeAddr();
          // console.log('data='+JSON.stringify(data));
        }
        
      })
    )
  }

}
