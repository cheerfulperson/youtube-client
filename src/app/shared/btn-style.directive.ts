import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]',
})
export class BtnStyleDirective {
  @Input() set bgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}
}
