import {Component, Input} from '@angular/core';
import {ArchiveDto} from "../../../shared/interfaces/DTO/archive.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'acpc-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  @Input() archive!: ArchiveDto;

  constructor(private router: Router) { }

  navigateToArchivedContest() {
    const id = this.archive.id;
    this.router.navigate(['/archive'], {queryParams: {id: id}});
  }

}
