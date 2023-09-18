import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {MailDto} from "../../shared/interfaces/DTO/mail.dto";
import {API_URLS} from "../../shared/api-urls";
import {Router} from "@angular/router";
import {ToastService} from "../../shared/services/toast.service";

@Component({
  selector: 'acpc-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.scss']
})
export class ComingSoonPageComponent {

  formControl = new FormControl('', Validators.email)

  constructor(private http: HttpService, private router: Router, private toast: ToastService) { }

  scheduleMail() {
    if (this.formControl.invalid)
      return;

    const mailDto = new MailDto();
    mailDto.value = this.formControl.value;
    this.http.sendPostRequest<BaseResponseDto<MailDto>>(API_URLS.MAIL_SCHEDULE, mailDto)
      .subscribe(response => {
        this.toast.showSuccess(response.message);
        this.router.navigateByUrl('/home');
      });
  }


}
