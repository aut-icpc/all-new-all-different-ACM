import {Component, Input} from '@angular/core';
import {Developer} from "../../shared/interfaces/developer";

@Component({
  selector: 'acpc-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent {
  @Input() developerData!: Developer;
}
