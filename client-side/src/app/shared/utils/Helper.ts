export default class Helper {

  static toggleFullscreen({
                            element,
                            turnOn,
                          }: {
    element: HTMLElement ; turnOn: boolean
  }): void {
    if (turnOn) {
      const el = element as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      }

      el?.requestFullscreen?.() ||
      el?.mozRequestFullScreen?.() ||
      el?.webkitRequestFullscreen?.() ||
      el?.msRequestFullscreen?.();
    } else {
      const doc = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };

      doc?.exitFullscreen?.() ||
      doc?.mozCancelFullScreen?.() ||
      doc?.webkitExitFullscreen?.() ||
      doc?.msExitFullscreen?.();
    }
  }
}
