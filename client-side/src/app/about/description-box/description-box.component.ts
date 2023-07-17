import {Component, Input, OnInit} from '@angular/core';
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'acpc-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {

  @Input() direction!: 'rtl' | 'ltr';
  @Input() description!: AboutDto;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getImageUrl(): any {
    let imageData = this.description.picture.data;
    // const blob = new Blob([imageData], {type: 'image/jpeg'});
    // return URL.createObjectURL(blob);
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,'
      + imageData);
    // return 'data:image/jpg;base64, ' + imageData;
  }


}
