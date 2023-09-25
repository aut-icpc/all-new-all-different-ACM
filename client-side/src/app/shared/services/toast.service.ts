import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {StatusToastComponent} from "../components/status-toast/status-toast.component";
import {PlatformService} from "./platform.service";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackbar: MatSnackBar, private platform: PlatformService) { }

  createToast(message: string, action: string = 'Close', config?: MatSnackBarConfig) {
    this.snackbar.open(message, action, config);
  }

  createToastFromComponent(component: any, config?: MatSnackBarConfig) {
    this.snackbar.openFromComponent(component, config);
  }

  showSuccess(message: string, config?: MatSnackBarConfig) {
    config = {
      ...config,
      duration: 5000
    };
    this.showSnackbar(message, 'SUCCESS', config);
  }

  showError(message: string, config?: MatSnackBarConfig) {
    config = {
      ...config,
      verticalPosition: this.platform.isOnDesktopDevice() ? 'bottom' : 'top',
      duration: 500000
    };
    this.showSnackbar(message, 'ERROR', config);
  }

  private showSnackbar(message: string, type: 'ERROR' | 'SUCCESS' | 'WARNING', config?: MatSnackBarConfig) {
    const snackbarConfig: MatSnackBarConfig = {
      ...config,
      verticalPosition: this.platform.isOnDesktopDevice() ? 'bottom' : 'top',
      data: { message, type }
    };

    this.snackbar.openFromComponent(StatusToastComponent, snackbarConfig);
  }
}
