import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./home/home.module";
import { HomeRoutingModule } from './home/home-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
