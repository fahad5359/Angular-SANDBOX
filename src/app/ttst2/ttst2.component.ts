import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttst2',
  templateUrl: './ttst2.component.html',
  styleUrls: ['./ttst2.component.css']
})
export class Ttst2Component  {
  som=""
  neem=""
trueFalse=false
  neemAdd(){
    this.neem="All good"
    this.trueFalse=true
  }


}
