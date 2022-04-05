import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public itemData: Item | undefined;

  public constructor(private router: Router) {}

  public selectItem(): void {
    console.log(this.itemData)
  }
}
