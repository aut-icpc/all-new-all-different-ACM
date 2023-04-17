import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
