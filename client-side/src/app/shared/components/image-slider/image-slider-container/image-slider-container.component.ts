import {Component, Input} from '@angular/core';

@Component({
  selector: 'acpc-image-slider-container',
  templateUrl: './image-slider-container.component.html',
  styleUrls: ['./image-slider-container.component.scss']
})
export class ImageSliderContainerComponent {
  // @Input() images: string[] | null = null;
  @Input() images: string[] | null = [
    "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_15602.jpg",
    "https://images.dog.ceo/breeds/dingo/n02115641_7222.jpg",
    "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4560.jpg",
    "https://images.dog.ceo/breeds/eskimo/n02109961_2369.jpg",
    "https://images.dog.ceo/breeds/hound-walker/n02089867_1931.jpg",
    "https://images.dog.ceo/breeds/setter-irish/n02100877_1062.jpg",
    "https://images.dog.ceo/breeds/doberman/n02107142_13483.jpg",
  ]
  currentIndex: number = 0

  forwardButtonOnClick() {
    if (this.images == null) return

    if (this.currentIndex === this.images?.length - 1) this.currentIndex = 0
    else this.currentIndex = this.currentIndex + 1
    console.log("forwards", this.currentIndex)
  }
  backwardsButtonOnClick() {
    if (this.images == null) return

    if (this.currentIndex === 0) this.currentIndex = this.images?.length - 1
    else this.currentIndex = this.currentIndex - 1
    console.log("backwards", this.currentIndex)
  }

  getContainerStyle() {
    return {
      translate: `${this.currentIndex * (-100)}%`
    }
  }

  showContainer() {
    return this.images != null && this.images.length !== 0
  }
}
