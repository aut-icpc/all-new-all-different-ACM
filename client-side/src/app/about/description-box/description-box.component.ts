import {Component, Input, OnInit} from '@angular/core';
import {DescriptionDetails} from "../../shared/interfaces/description-details";

@Component({
  selector: 'acpc-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {

  @Input() direction!: 'rtl' | 'ltr';
  @Input() description!: DescriptionDetails;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string | null {
    let imageData = this.description.image;
    if (imageData instanceof Uint8Array) {
      const blob = new Blob([imageData], { type: 'image/jpeg' });
      return URL.createObjectURL(blob);
    }
    else if (imageData instanceof Blob)
      return URL.createObjectURL(imageData);

    return null;
  }


}
