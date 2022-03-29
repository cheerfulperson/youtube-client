import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public itemData: Item | undefined;
}
