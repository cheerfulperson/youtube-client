import { Component, DoCheck } from '@angular/core';
import { Item } from '../shared/response.model';
import { SearchHandlerService } from '../shared/search-handler.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements DoCheck {
  public videoItems: Item[] | null = null;

  public videoItem: Item | null = null;

  public constructor(public searchHandlerService: SearchHandlerService) {}

  public ngDoCheck(): void {
    this.videoItems = this.searchHandlerService.sortedData;
  }

  public chooseItem(item: Item | null): void {
    this.videoItem = item;
  }
}
