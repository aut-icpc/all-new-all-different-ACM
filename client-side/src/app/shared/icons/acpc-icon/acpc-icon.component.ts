import {Component, Input} from '@angular/core';

@Component({
  selector: 'acpc-icon',
  templateUrl: './acpc-icon.component.html',
  styleUrls: ['./acpc-icon.component.scss']
})
export class AcpcIconComponent {

  @Input() icon!: string;
  @Input() color: 'primary' | 'accent' | 'warn' | 'background' | 'foreground' = 'foreground';
  @Input() size: '1x' | '2x' | '3x' | '4x' | '10x' = '1x';

  constructor() { }

}
