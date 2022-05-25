import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]',
})
export class BtnStyleDirective {
  @Input() set bgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.lineHeight = 0;
  }

  @Input() set textColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  public constructor(private el: ElementRef) {}
}
