import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sservvrs',
  templateUrl: './sservvrs.component.html',
  styleUrls: ['./sservvrs.component.css']
})
export class SservvrsComponent{
  @ViewChild("slct") slct: ElementRef;
 
  showValue(){
    console.log( this.slct.nativeElement.innerHTML);
  }
}
