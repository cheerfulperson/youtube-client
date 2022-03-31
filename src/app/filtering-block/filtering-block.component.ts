import { Component } from '@angular/core';
import { SearchHandlerService } from '../shared/search-handler.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent {
  public sortingList: string[] = [
    'date',
    'count of views',
    'by word or sentance',
  ];

  public choice: string = 'by word or sentance';

  public constructor(public searchHandlerService: SearchHandlerService) {}

  public changeChoice(newChoice: string): void {
    if (this.choice === newChoice) {
      this.searchHandlerService.isIncreasingValues =
        !this.searchHandlerService.isIncreasingValues;
    } else {
      this.searchHandlerService.isIncreasingValues = false;
    }
    this.choice = newChoice;
    this.handleFilter(newChoice);
  }

  private handleFilter(choice: string): void {
    if (choice === 'date') {
      this.searchHandlerService.sortbyDate();
    }
    if (choice === 'count of views') {
      this.searchHandlerService.sortByCountOfViews();
    }
  }
}
