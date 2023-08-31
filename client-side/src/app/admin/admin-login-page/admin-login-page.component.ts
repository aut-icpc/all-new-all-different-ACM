import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'acpc-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
  group!: FormGroup;

  isPasswordHidden = true;

  @ViewChild('passwordInput') passwordInput!: HTMLInputElement;

  constructor() { }

  ngOnInit(): void {
    this.group = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

}
