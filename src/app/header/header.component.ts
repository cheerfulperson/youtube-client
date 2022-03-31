import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public isFilterBlockHidden: boolean = true;

  @Output() public isFilterHiddenChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public changeFilterBlockhidden(e: boolean): void {
    this.isFilterHiddenChanged.emit(e);
  }
}
