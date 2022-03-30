import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]',
})
export class BtnStyleDirective {
  @Input() set bgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.lineHeight = 0;
  }

  constructor(private el: ElementRef) {}
}
