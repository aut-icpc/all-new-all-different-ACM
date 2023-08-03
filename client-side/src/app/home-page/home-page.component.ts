import {Component, OnInit} from '@angular/core';
import {TimeComponents} from "../shared/interfaces/time-components";
import {interval, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {HttpService} from "../shared/services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'acpc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private contestDate !: Date;
  timeLeft$ !: Observable<TimeComponents>;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calculateDateDiff()),
      shareReplay(1)
    );
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
