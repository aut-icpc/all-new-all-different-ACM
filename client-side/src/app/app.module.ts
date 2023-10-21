import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {RegistrationModule} from "./registration/registration.module";
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";
import {environment} from "../environments/environment";
import {AboutModule} from "./about/about.module";
import {TimelineModule} from "./timeline/timeline.module";
import {ContestsArchiveModule} from "./contests-archive/contests-archive.module";
import {AdminModule} from "./admin/admin.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RegistrationModule,
    AboutModule,
    TimelineModule,
    MatButtonModule,
    ContestsArchiveModule,
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
export class AppModule {
}
