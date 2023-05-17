import {Component, Input, OnInit} from '@angular/core';
import {PlatformService} from "../../shared/services/platform.service";
import {
  AbstractControl,
  ControlValueAccessor, FormControl, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator, Validators
} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Contestant} from "../../shared/interfaces/contestant";

@Component({
  selector: 'acpc-contestant-form',
  templateUrl: './contestant-form.component.html',
  styleUrls: ['./contestant-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ContestantFormComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ContestantFormComponent
    }
  ]
})
export class ContestantFormComponent implements OnInit, ControlValueAccessor, Validator {
  isDesktop !: boolean;

  @Input() contestantCounter !: number;

  genders = environment.registration.genders;
  tShirts = environment.registration.shirtSizes;
  eduLevels = environment.registration.educationLevels;

  myForm: FormGroup;

  onChange = (change: any) => {}
  onTouched = (onTouched: any) => {}

  constructor(private platformService: PlatformService) {
    this.isDesktop = platformService.IsOnDesktopDevice();
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.maxLength(11),
        Validators.pattern('\\+?\\d{10,15}')]),
      email: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      studentId: new FormControl('', Validators.required),
      shirtSize: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(changedForm => {
      if (this.myForm.valid)
        this.onChange(this.convertToContestantObject());
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.onChange(obj)
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as Contestant;
    if (this.hasEmptyOrNullFields(value))
      return {
        mustBeFilledCompletely: {
          contestant: value
        }
      };
    return null;
  }

  private hasEmptyOrNullFields(obj: Contestant): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key as keyof Contestant];
        if (value === null || value === '') {
          return true;
        }
      }
    }
    return false;
  }

  private convertToContestantObject() {
    let temp = new Contestant();
    temp.firstname = this.myForm.controls['firstname'].value;
    temp.lastname = this.myForm.controls['lastname'].value;
    temp.gender = this.myForm.controls['gender'].value;
    temp.phoneNumber = this.myForm.controls['phoneNumber'].value;
    temp.email = this.myForm.controls['email'].value;
    temp.graduationLevel = this.myForm.controls['education'].value;
    temp.studentId = this.myForm.controls['studentId'].value;
    temp.shirtSize = this.myForm.controls['shirtSize'].value;
    return temp;
  }
}
