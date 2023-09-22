import {Injectable, TemplateRef} from '@angular/core';
import {MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig} from "@angular/material/legacy-dialog";
import {ModalBodyComponent} from "../components/modal-body/modal-body.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog) {}

  openModal(content: TemplateRef<any> | any, options?: MatDialogConfig): void {
    const dialogRef = this.matDialog.open(ModalBodyComponent, {
      ...options,
      data: {
        content,
        ...options?.data,
      },
    });
  }
}
