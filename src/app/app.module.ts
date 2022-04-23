import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//                                                                                               Bello is the newly created Component \>
import { ServerComponent } from './Server/server.component';
import { SservvrsComponent } from './sservvrs/sservvrs.component';
import { TesttComponent } from './testt/testt.component';




@NgModule({
  declarations: [
    AppComponent,
    // Bello is the newly created Component
    ServerComponent,
    SservvrsComponent,
    TesttComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
