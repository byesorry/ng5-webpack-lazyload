import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//modules
import  { AppRoutingModule, appRoutingComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    appRoutingComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
