import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PlatformService} from "../../shared/services/platform.service";
import {
  AbstractControl,
  ControlValueAccessor,
  UntypedFormControl,
  UntypedFormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Contestant} from "../../shared/interfaces/contestant";
import {ModalService} from "../../shared/services/modal.service";
import {GraduationLevelDto} from "../../shared/interfaces/DTO/graduationLevel.dto";
import {ShirtSizeDto} from "../../shared/interfaces/DTO/shirtSize.dto";

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

  @ViewChild('guideTemplate') guideTemplate!: TemplateRef<any>;

  isDesktop !: boolean;

  @Input() contestantCounter !: number;

  genders = environment.registration.genders;
  tShirts = environment.registration.shirtSizes;
  eduLevels = environment.registration.educationLevels;

  group: UntypedFormGroup;

  shirtSizeImageName!: string;

  onChange = (change: any) => {}
  onTouched = (onTouched: any) => {}

  constructor(private platformService: PlatformService, private modalService: ModalService) {
    this.isDesktop = platformService.isOnDesktopDevice();
    this.group = new UntypedFormGroup({
      firstname: new UntypedFormControl('', Validators.required),
      lastname: new UntypedFormControl('', Validators.required),
      gender: new UntypedFormControl('', Validators.required),
      phoneNumber: new UntypedFormControl('', [Validators.required,
        Validators.minLength(environment.inputValidators.phoneMinLength),
        Validators.pattern(environment.inputValidators.phonePattern)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      education: new UntypedFormControl('', Validators.required),
      studentId: new UntypedFormControl('', Validators.required),
      shirtSize: new UntypedFormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.group.valueChanges.subscribe(changedForm => {
      this.onChange(this.convertToContestantObject());
    })
  }

  openGuide() {
    this.setShirtSizeImageName();
    this.modalService.openModal(this.guideTemplate);
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
    if (!value || this.hasEmptyOrNullFields(value))
      return { required: true };
    return null;
  }

  isFormControlValid(formControlName: string) {
    return this.group.controls[formControlName].invalid;
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
    temp.firstname = this.group.controls['firstname'].value;
    temp.lastname = this.group.controls['lastname'].value;
    temp.gender = this.group.controls['gender'].value.toUpperCase();
    temp.phoneNumber = this.group.controls['phoneNumber'].value;
    temp.email = this.group.controls['email'].value;
    let graduationLevel = new GraduationLevelDto();
    graduationLevel.value = this.group.controls['education'].value;
    temp.graduationLevel = graduationLevel;
    temp.studentId = this.group.controls['studentId'].value;
    let shirtSize = new ShirtSizeDto();
    shirtSize.size = this.group.controls['shirtSize'].value;
    temp.shirtSize = shirtSize;
    return temp;
  }

  private setShirtSizeImageName() {
    this.shirtSizeImageName = `assets/images/shirt-sizes-n-stuffs.jpg`;
  }
}
