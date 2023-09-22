import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutPageComponent } from './about-page/about-page.component';
import { DescriptionBoxComponent } from './description-box/description-box.component';
import {SharedModule} from "../shared/shared.module";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { FadeInDirective } from './fade-in.directive';



@NgModule({
  declarations: [
    AboutPageComponent,
    DescriptionBoxComponent,
    FadeInDirective
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class AboutModule { }
