import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AboutPageComponent} from "./about-page.component";
import {DescriptionBoxComponent} from "./description-box/description-box.component";
import {AboutModule} from "../about.module";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: "",
    component: AboutPageComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AboutModule,
    MatButtonModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AboutPageComponent,
    DescriptionBoxComponent,
  ]
})
export class AboutPageModule {
}
