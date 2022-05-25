import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  @Input() public isSortBlockHidden: boolean = true;

  @Output() sortHiddenChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public changeSortHidden(): void {
    this.isSortBlockHidden = !this.isSortBlockHidden;
    this.sortHiddenChanged.emit(this.isSortBlockHidden);
  }
}
