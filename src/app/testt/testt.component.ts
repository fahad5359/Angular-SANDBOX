import { Component} from '@angular/core';

@Component({
  selector: 'app-testt',
  templateUrl: './testt.component.html',
  styleUrls: ['./testt.component.css']
})
export class TesttComponent{
  // as u can see we can property bind evrything, and change it values from here.
  vaaalue="fahad";
  nems=["kaled","maoth"]
  vaaalue2="Ali";
  btn="false";
  inbty="time";
   Changenems(){
    this.vaaalue="ahmad"
    // this.nems[0]="kaled is dead"
  }
  sj(){
    // we can even change the value of the input by addding an event to a button
    this.inbty="number"
  }

   
  

}
