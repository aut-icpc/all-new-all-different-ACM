import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PlatformService} from "../../shared/services/platform.service";
import {Observable} from "rxjs";

@Component({
  selector: 'acpc-picture-upload-input',
  templateUrl: './picture-upload-input.component.html',
  styleUrls: ['./picture-upload-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => PictureUploadInputComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => PictureUploadInputComponent)
    }
  ],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ top: '0' })),
      state('out', style({ top: '-30px' })),
      transition('* <=> *', animate('.5s ease-in-out')),
    ]),
  ],
})
export class PictureUploadInputComponent implements ControlValueAccessor, Validator, OnInit {
  currentState!: componentState;
  commandMessage!: string;
  uploadedFile!: File | null;

  errorMessage!: string;
  errorMessagesMap!:  {[p: number]: string};

  isDragOver: boolean = false;
  showErrorBox: boolean = false;

  uploadProgress: number = 0;

  formControl = new FormControl(null, Validators.required);

  @Input() required = false;
  @Input() type !: 'id-card' | 'student-card';

  @ViewChild('fileInput') fileInput!: ElementRef;

  onChange = (change: any) => {}
  onTouched = (onTouched: any) => {}

  constructor(private platform: PlatformService) {
    this.commandMessage = platform.isOnDesktopDevice() ? 'Drag your image here or browse' :
      'tap to choose an image';
  }

  ngOnInit(): void {
    this.errorMessagesMap = {
      [fileUploadErrorType.REQUIRED]: `Please upload your ${this.type} image`,
      [fileUploadErrorType.SIZE_LIMIT]: 'The image size must be less than 1MB',
      [fileUploadErrorType.WRONG_FORMAT]: 'The uploaded file is not an image'
    };

    this.formControl.statusChanges.subscribe(e => {
      console.log(e)
    })

    this.currentState = componentState.NONE;
  }

  openFileWindow(input: any) {
    if (this.currentState == componentState.NONE)
      input.click();
  }

  onFileDropped(event: any): void {
    event.preventDefault();
    this.isDragOver = false;
    const files: FileList = event.dataTransfer.files;
    if (files.length > 0) {
      const file: File = files[0];
      this.readFile(file);
    }
  }

  onDragOver(event: any, container: HTMLDivElement): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(): void {
    this.isDragOver = false;
  }

  readFile(file: File): void {
    if (!this.isFileValid(file)) {
      this.triggerErrorMessage();
      this.clearInput()
      return;
    }
    this.currentState = componentState.UPLOADING;
    this.uploadedFile = file;
    this.formControl.setValue(this.uploadedFile);
    this.triggerUploadProgress();
    this.onChange(this.uploadedFile);
  }

  private clearInput() {
    this.fileInput.nativeElement.value = '';
  }

  onFileSelected(event: any): void {
    const files: FileList = (this.fileInput.nativeElement as HTMLInputElement).files || new FileList();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++)
        this.readFile(files[i]);
    }
  }

  onFileDelete(event: any) {
    this.uploadProgress = 0;
    this.uploadedFile = null;
    this.formControl.setValue(this.uploadedFile);
    this.currentState = componentState.NONE;
    this.clearInput()
  }

  formatFileSize(bytes: number) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  triggerUploadProgress() {
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      let randomIncrementer = Math.floor(Math.random() * 30);
      this.uploadProgress = this.uploadProgress + randomIncrementer;
      if (this.uploadProgress > 100) {
        clearInterval(interval);
      }
    }, 500);
  }

  isImage(file: File) {
    let regex = new RegExp(/image\/\w*/);
    return regex.test(file.type);
  }

  isFileValid(file: File) {
    if (!this.isImage(file)) {
      this.errorMessage = this.errorMessagesMap[fileUploadErrorType.WRONG_FORMAT];
      return false;
    } else if (file.size / 1024 > 1024) {
      this.errorMessage = this.errorMessagesMap[fileUploadErrorType.SIZE_LIMIT];
      return false;
    }
    return true;
  }

  triggerErrorMessage() {
    this.showErrorBox = true;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.onChange(obj);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    debugger
    if (!this.formControl.value && this.required) {
      this.errorMessage = this.errorMessagesMap[fileUploadErrorType.REQUIRED];
      this.triggerErrorMessage();
      return { required: true };
    }
    return null;
  }
}

export enum fileUploadErrorType {
  REQUIRED,
  SIZE_LIMIT,
  WRONG_FORMAT
}

export enum componentState {
  NONE = 'none',
  UPLOADING = 'uploading',
  SUCCESS = 'success',
  FAIL = 'fail'
}
