import {AfterViewInit, Directive, ElementRef, HostBinding, OnDestroy} from '@angular/core';

@Directive({
  selector: '[acpcFadeIn]'
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.fade-in-element')
  private isVisible: boolean = false;

  private hasAnimated: boolean = false;
  private intersectionObserver!: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.isVisible = true;
          this.hasAnimated = true;
          this.elementRef.nativeElement.classList.add('visible');
        }
      });
    }, options);

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObserver.disconnect();
  }
}
