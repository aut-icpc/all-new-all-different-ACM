import { Component, OnInit } from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {TimeComponents} from "../../shared/interfaces/time-components";
import {interval, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  headerTextColor = HeaderOptionClass;
  timeLeft$ !: Observable<TimeComponents>;

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calculateDateDiff()),
      shareReplay(1)
    );
  }

  ngOnInit(): void {
  }

  calculateDateDiff(endDay: Date = new Date(2023, 4, 1)): TimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = this.formatNumber(Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    ));

    const hoursToDday = this.formatNumber(Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    ));

    const minutesToDday = this.formatNumber(Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    ));

    const secondsToDday =
      this.formatNumber(Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute);

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

  private formatNumber(number: number): string {
    if (number >= 10)
      return String(number);
    return '0' + number;
  }

}
