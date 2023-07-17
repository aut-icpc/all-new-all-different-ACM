import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutPageComponent } from './about-page/about-page.component';
import { DescriptionBoxComponent } from './description-box/description-box.component';
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AboutPageComponent,
    DescriptionBoxComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class AboutModule { }
