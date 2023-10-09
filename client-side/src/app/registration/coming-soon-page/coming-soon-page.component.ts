import {Component} from '@angular/core';
import {AbstractControl, UntypedFormControl, ValidationErrors, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {MailDto} from "../../shared/interfaces/DTO/mail.dto";
import {API_URLS} from "../../shared/api-urls";
import {Router} from "@angular/router";
import {ToastService} from "../../shared/services/toast.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'acpc-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.scss']
})
export class ComingSoonPageComponent {

  formControl = new UntypedFormControl('', Validators.email, repeatEmailValidator(this.http))

  constructor(private http: HttpService, private router: Router, private toast: ToastService) { }

  scheduleMail() {
    if (this.formControl.invalid)
      return;

    const mailDto = new MailDto();
    mailDto.value = this.formControl.value;
    this.http.sendPostRequest<BaseResponseDto<MailDto>>(API_URLS.MAIL.MAIL_SCHEDULE, mailDto)
      .subscribe(response => {
        this.toast.showSuccess(response.message);
        this.router.navigateByUrl('/home');
      });
  }


}

export function repeatEmailValidator(httpService: HttpService): (control: AbstractControl) => Observable<ValidationErrors | null> {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;

    const params = {mail: email}
    return httpService.sendGetRequest<BaseResponseDto<boolean>>(API_URLS.MAIL.MAIL_EXISTS, {params: params}).pipe(
      map(response => {
        if (response.result)
          return { repeatEmail: true };

        return null;
      })
    );
  };
}
