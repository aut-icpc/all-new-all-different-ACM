import {Component, HostListener, Input} from '@angular/core';
import {PlatformService} from "../../../services/platform.service";

@Component({
  selector: 'acpc-image-slider-container',
  templateUrl: './image-slider-container.component.html',
  styleUrls: ['./image-slider-container.component.scss']
})
export class ImageSliderContainerComponent {
  @Input() images: string[] | null = null;
  // @Input() images: string[] | null = [
  //   "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_15602.jpg",
  //   "https://images.dog.ceo/breeds/dingo/n02115641_7222.jpg",
  //   "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4560.jpg",
  //   "https://images.dog.ceo/breeds/eskimo/n02109961_2369.jpg",
  //   "https://images.dog.ceo/breeds/hound-walker/n02089867_1931.jpg",
  //   "https://images.dog.ceo/breeds/setter-irish/n02100877_1062.jpg",
  //   "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4560.jpg",
  //   "https://images.dog.ceo/breeds/eskimo/n02109961_2369.jpg",
  //   "https://images.dog.ceo/breeds/hound-walker/n02089867_1931.jpg",
  //   "https://images.dog.ceo/breeds/setter-irish/n02100877_1062.jpg",
  //   "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4560.jpg",
  //   "https://images.dog.ceo/breeds/eskimo/n02109961_2369.jpg",
  //   "https://images.dog.ceo/breeds/hound-walker/n02089867_1931.jpg",
  //   "https://images.dog.ceo/breeds/setter-irish/n02100877_1062.jpg",
  //   "https://images.dog.ceo/breeds/doberman/n02107142_13483.jpg",
  // ]
  currentIndex: number = 0
  isOnDesktop!: boolean
  isTouched: boolean = false
  touchPosition: { x: number, y: number } | null = null
  isDragDisabled: boolean = false

  SCROLL_THRESHOLD: number = 35

  constructor(private platform: PlatformService,) {
    this.isOnDesktop = platform.isOnDesktopDevice()
  }

  forwardButtonOnClick() {
    if (this.images == null) return

    if (this.currentIndex === this.images?.length - 1) this.currentIndex = 0
    else this.currentIndex = this.currentIndex + 1

    this.scrollIntoViewShortcutBar()
  }

  backwardsButtonOnClick() {
    if (this.images == null) return

    if (this.currentIndex === 0) this.currentIndex = this.images?.length - 1
    else this.currentIndex = this.currentIndex - 1

    this.scrollIntoViewShortcutBar()
  }

  displayImageClass(i: number) {
    return Math.abs(i - this.currentIndex) <= 1
  }

  getContainerStyle() {
    return {
      translate: `${this.currentIndex * (-100)}%`
    }
  }

  scrollIntoViewShortcutBar() {
    const el: HTMLElement | null = document.querySelector(`.num-${this.currentIndex}.shortcut-button`)
    if (el != null)
      el.scrollIntoView()
    else
      console.log("element not there")
  }

  getShortcutButtonIndex(i: number) {

    let classes: string = ""
    classes += "shortcut-button "
    classes += 'num-' + i.toString() + " "
    if (i === this.currentIndex)
      classes += 'selected'

    return classes
  }

  @HostListener('touchstart', ['$event'])
  touchStartHandler() {
    if (this.isOnDesktop) return

    const touchEvent = event as TouchEvent

    const touch = touchEvent.touches[0] || touchEvent.changedTouches[0];
    this.touchPosition = {
      x: touch.clientX,
      y: touch.clientY
    }
    this.isTouched = true

  }

  @HostListener('touchend')
  touchEndHandler() {
    if (this.isOnDesktop) return

    this.isTouched = false
  }

  @HostListener('touchmove', ['$event'])
  touchMoveHandler() {
    if (this.isOnDesktop) return
    if (!this.isTouched) return
    if (!this.touchPosition) return

    const touchEvent = event as TouchEvent
    const touch = touchEvent.touches[0] || touchEvent.changedTouches[0];

    if (this.touchPosition.x - touch.clientX > this.SCROLL_THRESHOLD) {
      this.forwardButtonOnClick()
      this.touchPosition = {
        x: touch.clientX,
        y: touch.clientY,
      }
      this.isTouched = false
    } else if (touch.clientX - this.touchPosition.x > this.SCROLL_THRESHOLD) {
      this.backwardsButtonOnClick()
      this.touchPosition = {
        x: touch.clientX,
        y: touch.clientY,
      }
      this.isTouched = false
    }
  }

  @HostListener('mousedown', ['$event'])
  mouseDownHandler() {
    if (!this.isOnDesktop) return

    const mouseEvent = event as MouseEvent
    this.touchPosition = {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY
    }

    if (!this.isDragDisabled) {
      const stuff = document.querySelectorAll('.slider-image')
      if (stuff.length === 0) return

      stuff.forEach(el => {
        el.addEventListener('dragstart', (e) => {
          e.preventDefault();
        })
      })

      this.isDragDisabled = true;
    }

    this.isTouched = true
  }

  @HostListener('mouseup')
  mouseUpHandler() {
    if (!this.isOnDesktop) return

    this.isTouched = false
  }

  @HostListener('mousemove', ['$event'])
  mouseMoveHandler() {
    if (!this.isOnDesktop) return
    if (!this.isTouched) return
    if (!this.touchPosition) return

    const mouseEvent = event as MouseEvent

    if (this.touchPosition.x - mouseEvent.clientX > this.SCROLL_THRESHOLD) {
      this.forwardButtonOnClick()
      this.touchPosition = {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      }
      this.isTouched = false
    } else if (mouseEvent.clientX - this.touchPosition.x > this.SCROLL_THRESHOLD) {
      this.backwardsButtonOnClick()
      this.touchPosition = {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      }
      this.isTouched = false
    }
  }

  showContainer() {
    return this.images != null && this.images.length !== 0
  }
}
