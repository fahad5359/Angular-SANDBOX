import { Component} from '@angular/core';

@Component({
  selector: 'app-ttst2',
  templateUrl: './ttst2.component.html',
  styleUrls: ['./ttst2.component.css']
})
export class Ttst2Component  {
  som=""
  neem=""
trueFalse=false
statisOfProfile="offline"


constructor(){
  this.statisOfProfile = Math.random()>0.5 ? 'online':'offline';
}


  neemAdd(){
    this.neem="All good"
    this.trueFalse=true
  }


  getColorr() {
    return this.statisOfProfile === 'online' ? 'green' : 'red';
  }
}
