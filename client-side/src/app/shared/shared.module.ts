import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ModalBodyComponent} from './components/modal-body/modal-body.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { StatusToastComponent } from './components/status-toast/status-toast.component';
import { UpperSnakeCaseToNormalPipe } from './pipes/upper-snake-case-to-normal.pipe';
import { NormalStringToSnakeCasePipe } from './pipes/normal-string-to-snake-case.pipe';
import { DateToHumanReadableStringPipe } from './pipes/date-to-human-readable-string.pipe';


@NgModule({
    declarations: [
        HeaderComponent,
        ModalBodyComponent,
        StatusToastComponent,
        UpperSnakeCaseToNormalPipe,
        NormalStringToSnakeCasePipe,
        DateToHumanReadableStringPipe
    ],
  exports: [
    HeaderComponent,
    UpperSnakeCaseToNormalPipe,
    NormalStringToSnakeCasePipe,
    DateToHumanReadableStringPipe
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        MatIconModule,
        MatSnackBarModule
    ]
})
export class SharedModule { }
