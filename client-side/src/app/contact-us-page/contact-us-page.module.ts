import {NgModule} from '@angular/core';
import {ContactUsPageComponent} from "./contact-us-page.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ContactUsPageComponent,
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ContactUsPageComponent
  ]
})
export class ContactUsPageModule {
}
