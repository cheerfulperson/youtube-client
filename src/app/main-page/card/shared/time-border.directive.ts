import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimeBorder]',
})
export class TimeBorderDirective {
  @Input() set borderBottom(time: string) {
    const dateMilliseconds: number = 1000 * 60 * 60 * 24;
    const publicationDate: number = Date.now() - new Date(time).getTime();
    let color: string = '#EB5757';

    if (publicationDate < dateMilliseconds * 7) {
      color = '#2F80ED';
    } else if (publicationDate < dateMilliseconds * 31) {
      color = '#27AE60';
    } else if (publicationDate < dateMilliseconds * 31 * 6) {
      color = '#F2C94C';
    }
    this.element.nativeElement.style.borderBottom = `5px solid ${color}`;
  }

  public constructor(private element: ElementRef) {}
}
