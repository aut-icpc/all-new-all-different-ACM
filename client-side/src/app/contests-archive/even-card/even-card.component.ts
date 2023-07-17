import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'acpc-even-card',
  templateUrl: './even-card.component.html',
  styleUrls: ['./even-card.component.scss']
})
export class EvenCardComponent implements OnInit {

  @Input() yearOfHolding!: number;

  constructor() { }

  ngOnInit(): void { }

}
