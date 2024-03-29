import {Component, OnInit} from '@angular/core';
import {PlatformService} from "../../shared/services/platform.service";
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators} from '@angular/forms';
import {environment} from "../../../environments/environment";
import {ToastService} from "../../shared/services/toast.service";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {ContestantDocs} from "../../shared/interfaces/contestant-docs";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {Contestant} from "../../shared/interfaces/contestant";
import {PictureDto} from "../../shared/interfaces/DTO/picture.dto";
import {forkJoin, Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {API_URLS} from "../../shared/api-urls";
import {Router} from "@angular/router";
import {RegistrationTermsDto} from "../../shared/interfaces/DTO/registrationTerms.dto";
import {ContactUsDto} from "../../shared/interfaces/DTO/contactUs.dto";
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-team-registration-page',
  templateUrl: './team-registration-page.component.html',
  styleUrls: ['./team-registration-page.component.scss']
})
export class TeamRegistrationPageComponent implements OnInit {

  isDesktop !: boolean;
  captchaToken !: string;
  disableSubmitButton: boolean = false

  siteKey = environment.recaptcha.siteKey;

  teamInfoFormGroup !: UntypedFormGroup;
  teamDocumentFormGroup !: UntypedFormGroup;

  registrationTerms!: RegistrationTermsDto;
  contactData!: ContactUsDto;

  showErrorOnCaptcha: boolean = false;

  constructor(private platform: PlatformService,
              private toast: ToastService,
              private http: HttpService,
              private router: Router,
              private meta: MetaService) {
    this.isDesktop = this.platform.isOnDesktopDevice();

    this.initializeTeamInfoFormGroup();
    this.initializeTeamDocumentFormGroup();
  }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<RegistrationTermsDto>>(API_URLS.TERMS)
      .subscribe(response => {
        this.registrationTerms = response.result;
      });

    this.http.sendGetRequest<BaseResponseDto<ContactUsDto>>(API_URLS.CONTACT_US)
      .subscribe(response => {
        this.contactData = response.result;
      });

    this.meta.setCustomMetaTag('description', 'Registration page of ACPC - ' +
      'Amirkabir University of Technology Collegiate Programming Contest');
    this.meta.setCustomMetaTag('keywords', 'ACPC, ICPC, Amirkabir, Contest, Tehran, AUT, Registration');
  }

  initializeTeamInfoFormGroup() {
    this.teamInfoFormGroup = new UntypedFormGroup({
      teamName: new UntypedFormControl('', Validators.required, uniqueTeamNameValidator(this.http)),
      institution: new UntypedFormControl('', [Validators.required,
        Validators.minLength(environment.inputValidators.institutionNameMinLength)]),
      contestantOne: new UntypedFormControl('', Validators.required),
      contestantTwo: new UntypedFormControl('', Validators.required),
      contestantThree: new UntypedFormControl('', Validators.required),
    })
  }

  initializeTeamDocumentFormGroup() {
    this.teamDocumentFormGroup = new UntypedFormGroup({
      contestantOne: new UntypedFormControl('', Validators.required),
      contestantTwo: new UntypedFormControl('', Validators.required),
      contestantThree: new UntypedFormControl('', Validators.required),
    })
  }

  isFormControlValid(formControlName: string) {
    return this.teamInfoFormGroup.controls[formControlName].invalid;
  }

  getContestantStudentId(number: 'One' | 'Two' | 'Three') {
    return this.teamInfoFormGroup.controls[`contestant${number}`].value.studentId;
  }

  showErrorIfInvalid(currentForm: UntypedFormGroup) {
    currentForm.markAllAsTouched();
    if (currentForm.invalid)
      this.toast.showError('please fill all the fields');
  }

  submitForm() {
    // if (!this.captchaToken) {
    //   this.showErrorOnCaptcha = true;
    //   this.toast.showError('please fill the captcha');
    //   return;
    // }

    this.showErrorOnCaptcha = false;

    let teamDto = new TeamDto();
    teamDto.teamName = this.teamInfoFormGroup.controls['teamName'].value;
    teamDto.institution = this.teamInfoFormGroup.controls['institution'].value;
    let contestants: Contestant[] = [];
    const firstCall = this.sendImagesOfContestant('One');
    const secondCall = this.sendImagesOfContestant('Two');
    const thirdCall = this.sendImagesOfContestant('Three');
    forkJoin([firstCall, secondCall, thirdCall]).subscribe(
      responses => {
        for (const response of responses) {
          contestants.push(response);
        }
        teamDto.contestants = contestants;

        this.http.sendPostRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER, teamDto).subscribe(
          response => {
            sessionStorage.setItem('teamId', `${response?.result?.id}`);
            this.router.navigateByUrl('/registration/success');
          },
          () => {
            this.disableSubmitButton = false;
            this.toast.showError('Something went wrong. Try again later.');
          }
        );
      },
      () => {
        this.disableSubmitButton = false;
        this.toast.showError('Something went wrong. Try again later.');
      });

    this.disableSubmitButton = true;
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
    return this.http.sendPostRequest<BaseResponseDto<string>>(API_URLS.PICTURE_UPLOAD, formData)
  }

}

export function uniqueTeamNameValidator(httpService: HttpService): (control: AbstractControl) => Observable<ValidationErrors | null> {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const teamName = control.value;

    const params = {teamName: teamName}
    return httpService.sendGetRequest<boolean>(API_URLS.REGISTRATION.UNIQUE_NAME_CHECK, {params: params}).pipe(
      map(response => {
        if (!response)
          return {uniqueTeamName: true};

        return null;
      })
    );
  };
}
