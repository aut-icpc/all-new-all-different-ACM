import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALIDATORS,
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

  group!: FormGroup;
  // @Input() contestantLastName!: string;
  @Input() contestantStudentId!: string;

  onChange = (change: any) => {}
  onTouched = (onTouched: any) => {}

  constructor() { }

  ngOnInit(): void {
    this.group = new FormGroup({
      idCardPhoto: new FormControl(null, Validators.required),
      studentCardPhoto: new FormControl(null, Validators.required)
    });
    this.group.valueChanges.subscribe(e => {
      this.onChange(this.convertToContestantDocsObject());
    })
  }

  convertToContestantDocsObject() {
    let temp = new ContestantDocs();
    temp.idCardPhoto = this.group.controls['idCardPhoto'].value;
    temp.studentCardPhoto = this.group.controls['studentCardPhoto'].value;
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
    debugger
    if (!this.group.controls['idCardPhoto'].value)
      this.group.controls['idCardPhoto'].markAsTouched();

    if (!this.group.controls['studentCardPhoto'].value)
      this.group.controls['studentCardPhoto'].markAsTouched();

    if (!this.group.controls['idCardPhoto'].value || !this.group.controls['studentCardPhoto'].value)
      return { required: true };
    return null;
  }

}
