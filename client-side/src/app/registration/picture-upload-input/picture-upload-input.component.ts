import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'acpc-picture-upload-input',
  templateUrl: './picture-upload-input.component.html',
  styleUrls: ['./picture-upload-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: PictureUploadInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PictureUploadInputComponent
    }
  ],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ top: '0' })),
      state('out', style({ top: '-30px' })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class PictureUploadInputComponent implements ControlValueAccessor, Validator, OnInit {
  currentState!: componentState;
  uploadedFile!: File | null;
  uploadedFileBytes!: Int8Array;

  errorMessage!: string;
  errorMessagesMap!:  {[p: number]: string};

  isDragOver: boolean = false;
  showErrorBox: boolean = false;

  uploadProgress: number = 0;

  @Input() type !: 'id-card' | 'student-card';
  @Input() required = false;

  @ViewChild('fileInput') fileInput!: ElementRef;

  onChange = (change: any) => {}
  onTouched = (onTouched: any) => {}

  ngOnInit(): void {
    this.errorMessagesMap = {
      [fileUploadErrorType.REQUIRED]: `Please upload your ${this.type} image`,
      [fileUploadErrorType.SIZE_LIMIT]: 'The image size should not be greater than 1MB',
      [fileUploadErrorType.WRONG_FORMAT]: 'The uploaded file is not an image'
    }

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

  setImageFile(file: File): void {
    const fileList = new DataTransfer();
    fileList.items.add(file);
    Object.defineProperty(this.fileInput.nativeElement, 'files', {
      value: fileList,
      writable: true,
      configurable: true,
      enumerable: true
    });
  }

  onDragOver(event: any, container: HTMLDivElement): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(): void {
    this.isDragOver = false;
  }

  readFile(file: File): void {
    if (!this.isFileValid(file))
      return;
    this.currentState = componentState.UPLOADING;
    this.uploadedFile = file;
    this.triggerUploadProgress();
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc: string = e.target.result;
      this.uploadedFileBytes = this.convertDataURIToBinary(reader.result);
      this.onChange(this.uploadedFileBytes);
    };
    reader.readAsDataURL(file);
  }

  private convertDataURIToBinary(dataURI: any) {
    let base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    let base64 = dataURI.substring(base64Index);
    let raw = window.atob(base64);
    let rawLength = raw.length;
    let array = new Int8Array(new ArrayBuffer(rawLength));

    for(let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
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
    this.currentState = componentState.NONE;
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
    if (file.size / 1024 > 1024) {
      this.errorMessage = this.errorMessagesMap[fileUploadErrorType.SIZE_LIMIT];
      return false;
    } else if (!this.isImage(file)) {
      this.errorMessage = this.errorMessagesMap[fileUploadErrorType.WRONG_FORMAT];
      return false;
    }
    return true;
  }

  triggerErrorMessage() {
    this.showErrorBox = true;
    setTimeout(() => {
      this.showErrorBox = false;
    }, 5000);
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
    if (!this.uploadedFile && this.required) {
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
