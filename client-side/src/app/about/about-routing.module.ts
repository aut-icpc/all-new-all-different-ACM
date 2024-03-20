import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./about-page/about-page.component";
import {AboutDevsPageComponent} from "./about-devs-page/about-devs-page.component";

const routes: Routes = [
  {path: 'about', component: AboutPageComponent, title: 'About us'},
  {path: 'about-devs', component: AboutDevsPageComponent, title: 'About developers'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
