import {Component, OnInit, ViewChild} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {JwtAuthenticationResponseDto} from "../../shared/interfaces/DTO/jwtAuthenticationResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {Router} from "@angular/router";
import {SignInRequestDto} from "../../shared/interfaces/DTO/signInRequest.dto";
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
  group!: UntypedFormGroup;

  isPasswordHidden = true;

  @ViewChild('passwordInput') passwordInput!: HTMLInputElement;

  constructor(private http: HttpService,
              private route: Router, private meta: MetaService) { }

  ngOnInit(): void {
    this.group = new UntypedFormGroup({
      username: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required)
    });

    this.meta.setCustomMetaTag('description',
      'admin panel of ACPC registration website that monitors registration process');
    this.meta.setCustomMetaTag('keywords',
      'ACPC, ICPC, Admin, Panel, Registration, Contest, Monitoring');
  }

  login() {
    if (this.group.invalid) {
      return;
    }

    let request = new SignInRequestDto();
    request.username = this.group.controls['username'].value;
    request.password = this.group.controls['password'].value;

    this.http.sendPostRequest<BaseResponseDto<JwtAuthenticationResponseDto>>(API_URLS.LOGIN, request)
      .subscribe(response => {
        localStorage.setItem('token', response.result.token);
        this.route.navigateByUrl('/admin/home');
      });
  }
}
