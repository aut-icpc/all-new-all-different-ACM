import {Component, Input, OnInit} from '@angular/core';
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";

@Component({
  selector: 'acpc-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {

  @Input() direction!: 'rtl' | 'ltr';
  @Input() description!: AboutDto;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string | null {
    let imageData = this.description.pictureDto.data;
    const blob = new Blob([imageData], {type: 'image/jpeg'});
    return URL.createObjectURL(blob);

    return null;
  }


}
