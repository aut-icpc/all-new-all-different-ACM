import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutPageComponent } from './about-page/about-page.component';
import { DescriptionBoxComponent } from './description-box/description-box.component';
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import { FadeInDirective } from './fade-in.directive';
import { AboutDevsPageComponent } from './about-devs-page/about-devs-page.component';
import { DeveloperCardComponent } from './developer-card/developer-card.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AboutPageComponent,
    DescriptionBoxComponent,
    FadeInDirective,
    AboutDevsPageComponent,
    DeveloperCardComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class AboutModule { }
