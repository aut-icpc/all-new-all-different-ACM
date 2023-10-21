import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FadeInDirective} from './fade-in.directive';


@NgModule({
  declarations: [
    FadeInDirective
  ],
  exports: [
    FadeInDirective
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
  ]
})
export class AboutModule {
}
