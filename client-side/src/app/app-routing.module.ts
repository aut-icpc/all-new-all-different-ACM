import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactUsPageComponent} from "./contact-us-page/contact-us-page.component";

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent,
    title: 'ACPC - Amirkabir University of Technology Collegiate Programming Contest'
  },
  {
    path: 'contact-us', component: ContactUsPageComponent,
    title: 'Contact us',
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
