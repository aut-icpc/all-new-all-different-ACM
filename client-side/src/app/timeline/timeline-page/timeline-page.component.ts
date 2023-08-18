import {Component, OnInit} from '@angular/core';
import {TimelineDto} from "../../shared/interfaces/DTO/timeline.dto";
import {PlatformService} from "../../shared/services/platform.service";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {ArchiveDto} from "../../shared/interfaces/DTO/archive.dto";

@Component({
  selector: 'acpc-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {

  isDesktop!: boolean;

  milestones!: TimelineDto[];

  constructor(private platform: PlatformService, private http: HttpService) {
    this.isDesktop = this.platform.isOnDesktopDevice();
  }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<TimelineDto[]>>(API_URLS.TIMELINE).subscribe(response => {
      this.milestones = response.result;
      this.milestones = this.milestones.map((timelineDto: TimelineDto) => {
        return { ...timelineDto, date: new Date(timelineDto.date) };
      }).sort(
        (a, b) => a.date.getTime() - b.date.getTime()
      );
    })
  }

  getCardClassByIndex(i: number) {
    let tempClass = '-card';
    switch (i) {
      case 0: {
        tempClass = 'blue' + tempClass;
        break;
      }
      case 1: {
        tempClass = 'yellow' + tempClass;
        break;
      }
      default: {
        tempClass = 'red' + tempClass;
        break;
      }
    }
    return tempClass;
  }

}
