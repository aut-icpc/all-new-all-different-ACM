import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {MatButtonModule} from "@angular/material/button";
import {RegistrationModule} from "./registration/registration.module";
import {RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from "ng-recaptcha";
import {environment} from "../environments/environment";
import {AboutModule} from "./about/about.module";
import {ContactUsPageComponent} from './contact-us-page/contact-us-page.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {TimelineModule} from "./timeline/timeline.module";
import {ContestsArchiveModule} from "./contests-archive/contests-archive.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatButtonModule,
    RegistrationModule,
    RecaptchaModule,
    AboutModule,
    LeafletModule,
    TimelineModule,
    ContestsArchiveModule,
    MatProgressSpinnerModule,
    AdminModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
