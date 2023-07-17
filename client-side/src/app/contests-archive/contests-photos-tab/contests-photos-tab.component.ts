import {Component, OnInit} from '@angular/core';
import Viewer from 'viewerjs';

@Component({
  selector: 'acpc-contests-photos-tab',
  templateUrl: './contests-photos-tab.component.html',
  styleUrls: ['./contests-photos-tab.component.scss']
})
export class ContestsPhotosTabComponent implements OnInit {

  viewer!: Viewer;

  images!: string[];

  constructor() { }

  ngOnInit(): void {
    this.initializeViewer();
  }

  initializeViewer() {
    let imageList = document.getElementById('image-list');
    if (imageList)
      this.viewer = new Viewer(imageList);
  }

  viewImage(imageIndex: number) {
    this.viewer.view(imageIndex);
  }

}
