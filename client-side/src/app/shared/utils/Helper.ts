export default class Helper {

  static toggleFullscreen({
                     element,
                     turnOn,
                   }: { element: HTMLElement; turnOn: boolean }): void {
    if (turnOn) {
      element.requestFullscreen?.() ||
      // @ts-ignore
      element.mozRequestFullScreen?.() ||
      // @ts-ignore
      element.webkitRequestFullscreen?.() ||
      // @ts-ignore
      element.msRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() ||
      // @ts-ignore
      document.mozCancelFullScreen?.() ||
      // @ts-ignore
      document.webkitExitFullscreen?.() ||
      // @ts-ignore
      document.msExitFullscreen?.();
    }
  }
}
