import { Component, OnInit } from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {TimelineDto} from "../../shared/interfaces/DTO/timeline.dto";
import {PlatformService} from "../../shared/services/platform.service";

@Component({
  selector: 'acpc-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {

  isDesktop!: boolean;

  items: TimelineDto[] = [
    {
      image: './assets/icons/edit.png',
      title: 'Registeration Dates',
      date: 'March 28th, 2023',
      description: 'Registration period is from 28th of March to 2nd of April 2023'
    },
    {
      image: './assets/icons/opening-ceremony.png',
      title: 'Orientation Day',
      date: 'April 7th, 2023',
      description: 'All team members are required to be present on orientation day. It will be held in AUT\'s Mawlana conference hall at 5:00 P.M.'
    },
    {
      image: './assets/icons/cup logo.png',
      title: 'In-site Contest',
      date: 'April 8th, 2023',
      description: 'Contest starts at 9:00 AM in Tehran, Iran (local time), in-person only.'
    }
  ];

  headerTextColor = HeaderOptionClass;

  constructor(private platform: PlatformService) {
    this.isDesktop = this.platform.IsOnDesktopDevice();
  }

  ngOnInit(): void {
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
