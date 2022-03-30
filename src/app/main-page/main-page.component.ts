import { Component } from '@angular/core';
import response from '../../assets/response.json';
import { Item, Response } from '../shared/response.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public response: Response = response;

  public videoItem: Item | null = response.items[0];

  public chooseItem(item: Item | null): void {
    this.videoItem = item;
  }
}
