import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// So This file here is the root component, if u go to the app.modul u can see it there being referanced too...
export class AppComponent {
  
  nemDispalyign="fahad"
  message="hey my name is"
  message2="it has been changed from"
  addNewNem(){
    this.nemDispalyign="kaled"
  }
}
