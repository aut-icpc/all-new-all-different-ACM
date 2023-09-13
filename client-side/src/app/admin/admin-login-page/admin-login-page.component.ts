import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {JwtAuthenticationResponseDto} from "../../shared/interfaces/DTO/jwtAuthenticationResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {Router} from "@angular/router";
import {SignInRequestDto} from "../../shared/interfaces/DTO/signInRequest.dto";

@Component({
  selector: 'acpc-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
  group!: FormGroup;

  isPasswordHidden = true;

  @ViewChild('passwordInput') passwordInput!: HTMLInputElement;

  constructor(private http: HttpService, private route: Router) { }

  ngOnInit(): void {
    this.group = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    if (this.group.invalid) {
      return;
    }

    let request = new SignInRequestDto();
    request.username = this.group.controls['username'].value;
    request.password = this.group.controls['password'].value;

    this.http.sendPostRequest<BaseResponseDto<JwtAuthenticationResponseDto>>(API_URLS.LOGIN, request)
      .subscribe(() => {
        this.route.navigateByUrl('/admin/home');
      });
  }
}
