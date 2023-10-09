import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  {path: 'about', component: AboutPageComponent, title: 'About us'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
