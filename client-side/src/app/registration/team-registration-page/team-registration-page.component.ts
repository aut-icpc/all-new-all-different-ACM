import {Component} from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {PlatformService} from "../../shared/services/platform.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../../environments/environment";
import {ToastService} from "../../shared/services/toast.service";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {ContestantDocs} from "../../shared/interfaces/contestant-docs";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {Contestant} from "../../shared/interfaces/contestant";
import {PictureDto} from "../../shared/interfaces/DTO/picture.dto";
import {forkJoin, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {HttpHeaders} from "@angular/common/http";
import {ApiUrls} from "../../shared/api-urls";

@Component({
  selector: 'acpc-team-registration-page',
  templateUrl: './team-registration-page.component.html',
  styleUrls: ['./team-registration-page.component.scss']
})
export class TeamRegistrationPageComponent {

  headerTextColor = HeaderOptionClass;
  isDesktop !: boolean;
  captchaToken !: string;
  siteKey = environment.recaptcha.siteKey;
  teamInfoFormGroup !: FormGroup;
  teamDocumentFormGroup !: FormGroup;

  showErrorOnCaptcha: boolean = false;

  constructor(private platform: PlatformService, private toast: ToastService, private http: HttpService) {
    this.isDesktop = this.platform.isOnDesktopDevice();
    this.initializeTeamInfoFormGroup();
    this.initializeTeamDocumentFormGroup()
  }

  initializeTeamInfoFormGroup() {
    this.teamInfoFormGroup = new FormGroup({
      teamName: new FormControl('', Validators.required),
      institution: new FormControl('', [Validators.required, Validators.minLength(10)]),
      contestantOne: new FormControl('', Validators.required),
      contestantTwo: new FormControl('', Validators.required),
      contestantThree: new FormControl('', Validators.required),
    })
  }

  initializeTeamDocumentFormGroup() {
    this.teamDocumentFormGroup = new FormGroup({
      contestantOne: new FormControl('', Validators.required),
      contestantTwo: new FormControl('', Validators.required),
      contestantThree: new FormControl('', Validators.required),
    })
  }

  isFormControlValid(formControlName: string) {
    return this.teamInfoFormGroup.controls[formControlName].invalid;
  }

  getContestantStudentId(number: 'One' | 'Two' | 'Three') {
    return this.teamInfoFormGroup.controls[`contestant${number}`].value.studentId;
  }

  getErrorMessage(formControlName: string) {
    const errors = this.teamInfoFormGroup.controls[formControlName].errors;
    if (errors?.minlength)
      return 'Enter institution\'s full name';
    else if (errors?.required)
      return 'Fill the input';
    return '';
  }

  showErrorIfInvalid(currentForm: FormGroup) {
    currentForm.markAllAsTouched();
    if (currentForm.invalid)
      this.toast.showError('please fill all the fields');
  }

  submitForm() {
    if (!this.captchaToken) {
      this.showErrorOnCaptcha = true;
      this.toast.showError('please fill the captcha');
      return;
    }

    this.showErrorOnCaptcha = false;

    let teamDto = new TeamDto();
    teamDto.teamName = this.teamInfoFormGroup.controls['teamName'].value;
    teamDto.institution = this.teamInfoFormGroup.controls['institution'].value;
    let contestants: Contestant[] = [];
    let firstCall = this.sendImagesOfContestant('One');
    let secondCall = this.sendImagesOfContestant('Two');
    let thirdCall = this.sendImagesOfContestant('Three');
    forkJoin([firstCall, secondCall, thirdCall]).subscribe(responses => {
      for (const response of responses) {
        contestants.push(response);
      }
      teamDto.contestants = contestants;

      this.http.sendPostRequest<BaseResponseDto<TeamDto>>(ApiUrls.TEAM_REGISTER, teamDto).subscribe(response => {
        console.log(response);
      });
    });
  }

  private sendImagesOfContestant(contestantNumber: 'One' | 'Two' | 'Three') {
    let formObj: Contestant = this.teamInfoFormGroup.controls['contestant' + contestantNumber].value;
    const docObj: ContestantDocs = this.teamDocumentFormGroup.controls['contestant' + contestantNumber].value;
    const idCardObservable = this.generateImageUrl(docObj.idCardPhoto, "ID_CARD");
    const studentCardObservable = this.generateImageUrl(docObj.studentCardPhoto, "STUDENT_CARD");

    return forkJoin([idCardObservable, studentCardObservable]).pipe(
      switchMap(responses => {
        const [idCardResponse, studentCardResponse] = responses;

        let idCardDto = new PictureDto();
        idCardDto.link = idCardResponse.result;
        formObj.nationalIdPicture = idCardDto;

        let studentCardDto = new PictureDto();
        studentCardDto.link = studentCardResponse.result;
        formObj.studentCardPicture = studentCardDto;

        return of(formObj);
      })
    );
  }

  private generateImageUrl(imageFile: File, type: 'ID_CARD' | 'STUDENT_CARD') {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('type', type);
    const pictureDto = new PictureDto();
    return this.http.sendPostRequest<BaseResponseDto<string>>(ApiUrls.PICTURE_UPLOAD, formData)
  }

}
