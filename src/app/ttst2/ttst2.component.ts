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
statisOfProfile=""
hlaa="Active"
baag=['ahmad','fahad']

constructor(){
  this.statisOfProfile = Math.random()>0.5 ? 'online':'offline';
}


  neemAdd(){
    this.neem="All good"
    this.baag.push(this.som)
    this.trueFalse=true
  }


  getColorr() {
    // as u see bwllow this function has a condition:  that if the "statisOfProfile" equls online, make its background color equls to green, else put red
    return this.statisOfProfile === 'online' ? 'green' : 'red';
  }
   randommm:string;

}
