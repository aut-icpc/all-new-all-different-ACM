import {Component, OnInit} from '@angular/core';
import {TimeComponents} from "../shared/interfaces/time-components";
import {interval, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {HttpService} from "../shared/services/http.service";
import {Router} from "@angular/router";
import {BaseResponseDto} from "../shared/interfaces/DTO/baseResponse.dto";
import {CountDownDto} from "../shared/interfaces/DTO/countDown.dto";
import {API_URLS} from "../shared/api-urls";
import {MetaService} from "../shared/services/meta.service";

@Component({
  selector: 'acpc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  timeLeft$ !: Observable<TimeComponents>;

  constructor(private http: HttpService, private router: Router, private meta: MetaService) {}

  ngOnInit(): void {
    const params = {type: 'MAIN'}
    this.http.sendGetRequest<BaseResponseDto<CountDownDto>>(API_URLS.COUNTDOWN, {params: params})
      .subscribe(response => {
        const date = new Date(response.result.date);
        this.timeLeft$ = interval(1000).pipe(
          map(x => this.calculateDateDiff(date)),
          shareReplay(1)
        );
      });

    this.meta.setCustomMetaTag('description', 'Home page of ACPC - ' +
      'Amirkabir University of Technology Collegiate Programming Contest')
    this.meta.setCustomMetaTag('keywords', 'ACPC, ICPC, Amirkabir, Contest, Tehran, AUT');
  }

  goToRegistrationPage() {
    this.router.navigateByUrl('/registration/register');
  }

  calculateDateDiff(endDay: Date = new Date(2023, 6, 1)): TimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = this.formatNumberToValidString(Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    ));

    const hoursToDday = this.formatNumberToValidString(Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    ));

    const minutesToDday = this.formatNumberToValidString(Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    ));

    const secondsToDday =
      this.formatNumberToValidString(Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute);

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

  private formatNumberToValidString(number: number): string {
    if (number >= 10)
      return String(number);
    return '0' + this.formatNegativeNumber(number);
  }

  private formatNegativeNumber(num: number): number {
    if (num < 0)
      return 0;
    return num;
  }

}
