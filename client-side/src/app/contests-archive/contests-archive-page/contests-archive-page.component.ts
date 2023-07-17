import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'acpc-contests-archive-page',
  templateUrl: './contests-archive-page.component.html',
  styleUrls: ['./contests-archive-page.component.scss']
})
export class ContestsArchivePageComponent implements OnInit {

  availableYear: number[] = [2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArchivedContest(year: number) {
    this.router.navigate(['/archive'], {queryParams: {year: year}});
  }

}
