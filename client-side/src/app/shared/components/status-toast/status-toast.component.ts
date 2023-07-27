import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
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

    this.addSvgIconsToRegistry();
  }

  close(): void {
    this.snackbarRef.dismiss();
  }

  addSvgIconsToRegistry() {
    this.iconRegistry.addSvgIcon(
      'ERROR',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/error.svg')
    );

    this.iconRegistry.addSvgIcon(
      'SUCCESS',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/success.svg')
    );
    this.iconRegistry.addSvgIcon(
      'WARNING',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/warning.svg')
    );
  }

}
