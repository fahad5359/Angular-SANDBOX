import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//                                                                                               Bello is the newly created Component \>
import { ServerComponent } from './Server/server.component';
import { SservvrsComponent } from './sservvrs/sservvrs.component';
import { TesttComponent } from './testt/testt.component';
import { Hww } from './HW 2/hw2.compponent';
import { Ttst2Component } from './ttst2/ttst2.component';





@NgModule({
  declarations: [
    AppComponent,
    // Bello is the newly created Component
    ServerComponent,
    SservvrsComponent,
    TesttComponent,
    Hww,
    Ttst2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
