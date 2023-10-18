import {Component, OnInit} from '@angular/core';
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-rules-and-terms-page',
  templateUrl: './rules-and-terms-page.component.html',
  styleUrls: ['./rules-and-terms-page.component.scss']
})
export class RulesAndTermsPageComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setPageIndexing("noindex");
  }

}
