import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    RootComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MatButtonModule,
        BrowserAnimationsModule,
    ]
})
export class HomeModule { }
