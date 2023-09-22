import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA, MatLegacySnackBarRef as MatSnackBarRef} from "@angular/material/legacy-snack-bar";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'acpc-status-toast',
  templateUrl: './status-toast.component.html',
  styleUrls: ['./status-toast.component.scss']
})
export class StatusToastComponent {

  message: string;
  type: 'ERROR' | 'WARNING' | 'SUCCESS';

  constructor(
    private snackbarRef: MatSnackBarRef<StatusToastComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.message = data.message;
    this.type = data.type;

  }

  close(): void {
    this.snackbarRef.dismiss();
  }

  getIcon() {
    let icon = '';

    switch (this.type) {
      case "ERROR":
        icon = 'error';
        break;
      case "SUCCESS":
        icon = 'tick';
        break;
      case "WARNING":
        icon = 'warn';
        break;
    }

    return icon;
  }

}
