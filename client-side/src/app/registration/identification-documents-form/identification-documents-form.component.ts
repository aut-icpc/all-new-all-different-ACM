import {Component, Input, OnInit} from '@angular/core';
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
import {ContestantDocs} from "../../shared/interfaces/contestant-docs";

@Component({
  selector: 'acpc-identification-documents-form',
  templateUrl: './identification-documents-form.component.html',
  styleUrls: ['./identification-documents-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IdentificationDocumentsFormComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: IdentificationDocumentsFormComponent,
    },
  ],
})
export class IdentificationDocumentsFormComponent implements OnInit, ControlValueAccessor, Validator {

  group!: UntypedFormGroup;
  @Input() contestantStudentId!: string;

  onChange = (change: any) => {}
  onTouched = () => {}

  constructor() { }

  ngOnInit(): void {
    this.group = new UntypedFormGroup({
      idCardPhoto: new UntypedFormControl('', Validators.required),
      studentCardPhoto: new UntypedFormControl('', Validators.required)
    });
    this.group.valueChanges.subscribe(e => {
      if (this.group.valid)
        this.onChange(this.convertToContestantDocsObject());
    })
  }

  convertToContestantDocsObject() {
    let temp = new ContestantDocs();
    temp.idCardPhoto = this.group.controls['idCardPhoto'].value;
    temp.studentCardPhoto = this.group.controls['studentCardPhoto'].value;
    temp.contestantStudentNumber = this.contestantStudentId;
    return temp;
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
    if (!this.group.controls['idCardPhoto'].value || !this.group.controls['studentCardPhoto'].value)
      return { required: true };
    return null;
  }

}
