import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatLegacyDialogModule as MatDialogModule} from "@angular/material/legacy-dialog";
import {ModalBodyComponent} from './components/modal-body/modal-body.component';
import {MatIconModule} from "@angular/material/icon";
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";
import {StatusToastComponent} from './components/status-toast/status-toast.component';
import {UpperSnakeCaseToNormalPipe} from './pipes/upper-snake-case-to-normal.pipe';
import {NormalStringToSnakeCasePipe} from './pipes/normal-string-to-snake-case.pipe';
import {DateToHumanReadableStringPipe} from './pipes/date-to-human-readable-string.pipe';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {NameToRouterLinkPipe} from './pipes/name-to-router-link.pipe';
import {RouterModule} from "@angular/router";
import {GenerateErrorMessagePipe} from './pipes/generate-error-message.pipe';
import {IconsModule} from "./icons/icons.module";
import {MatLegacySlideToggleModule as MatSlideToggleModule} from "@angular/material/legacy-slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ThemeSlideToggleComponent } from './components/theme-slide-toggle/theme-slide-toggle.component';
import { SocialMediaUrlToUsernamePipe } from './pipes/socla-media-url-to-username.pipe';
import { MapComponent } from './components/map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";


@NgModule({
    declarations: [
        HeaderComponent,
        ModalBodyComponent,
        StatusToastComponent,
        UpperSnakeCaseToNormalPipe,
        NormalStringToSnakeCasePipe,
        DateToHumanReadableStringPipe,
        NameToRouterLinkPipe,
        GenerateErrorMessagePipe,
        ThemeSlideToggleComponent,
        SocialMediaUrlToUsernamePipe,
        MapComponent
    ],
  exports: [
    HeaderComponent,
    UpperSnakeCaseToNormalPipe,
    NormalStringToSnakeCasePipe,
    DateToHumanReadableStringPipe,
    GenerateErrorMessagePipe,
    IconsModule,
    SocialMediaUrlToUsernamePipe,
    MapComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    RouterModule,
    IconsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
