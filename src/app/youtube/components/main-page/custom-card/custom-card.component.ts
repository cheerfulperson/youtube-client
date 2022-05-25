import { Component, Input } from '@angular/core';
import { ICardInfo } from 'src/app/redux/state.models';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() public card: ICardInfo | null = null;

  public date: string = this.card?.date.toString() || '';
}
