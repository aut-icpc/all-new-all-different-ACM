import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'acpc-contest-details-page',
  templateUrl: './contest-details-page.component.html',
  styleUrls: ['./contest-details-page.component.scss']
})
export class ContestDetailsPageComponent implements OnInit {

  selectedYear!: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.selectedYear = params.year;
      }
    );
  }

  ngOnInit(): void { }

}
