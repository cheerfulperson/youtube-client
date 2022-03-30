import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public itemData: Item | undefined;

  @Output() public selectedData: EventEmitter<Item> = new EventEmitter<Item>();

  public selectItem(): void {
    this.selectedData.emit(this.itemData);
  }
}
