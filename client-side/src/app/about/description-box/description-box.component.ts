import {Component, Input, OnInit} from '@angular/core';
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";
import {environment} from "../../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'acpc-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {

  @Input() direction!: 'rtl' | 'ltr';
  @Input() description!: AboutDto;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getImageUrl(): any {
    debugger
    return this.sanitizer.bypassSecurityTrustUrl(this.description.picture.link);
  }


}
