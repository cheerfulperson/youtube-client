import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() public isSortBlockHidden: boolean = true;

  @Output() sortHiddenChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public changeSortHidden(): void {
    this.isSortBlockHidden = !this.isSortBlockHidden;
    this.sortHiddenChanged.emit(this.isSortBlockHidden);
  }
}
