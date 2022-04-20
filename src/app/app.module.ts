import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//                                                                                               Bello is the newly created Component \>
import { ServerComponent } from './Server/server.component';
import { SservvrsComponent } from './sservvrs/sservvrs.component';
import { Pp1 } from './pracone/pp1.component';
import { Pp2 } from './practwo/pp2.component';



@NgModule({
  declarations: [
    AppComponent,
    // Bello is the newly created Component
    ServerComponent,
    SservvrsComponent,
   Pp1,
   Pp2
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
