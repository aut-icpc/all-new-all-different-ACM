import {Component, Input, OnInit} from '@angular/core';
import {TimelineDto} from "../../shared/interfaces/DTO/timeline.dto";

@Component({
  selector: 'acpc-timeline-milestone',
  templateUrl: './timeline-milestone.component.html',
  styleUrls: ['./timeline-milestone.component.scss']
})
export class TimelineMilestoneComponent implements OnInit {

  @Input() timelineData!: TimelineDto;
  @Input() isDesktop = true;

  constructor() { }

  ngOnInit(): void {
  }

}
