import {Component, OnInit} from '@angular/core';
import {ContactUsDto} from "../shared/interfaces/DTO/contactUs.dto";
import {HttpService} from "../shared/services/http.service";
import {BaseResponseDto} from "../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../shared/api-urls";
import {fadeInAnimation} from "../shared/animations/fade-animations";

@Component({
  selector: 'acpc-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
  animations: [fadeInAnimation]
})
export class ContactUsPageComponent implements OnInit {

  contactData!: ContactUsDto;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<ContactUsDto>>(API_URLS.CONTACT_US)
      .subscribe(response => {
        this.contactData = response.result;
      });
  }

}
