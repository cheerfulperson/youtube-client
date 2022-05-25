import { Component, OnInit } from '@angular/core';
import { SearchHandlerService } from 'src/app/core/services/search-handler.service';
import { Item } from '../../../shared/response.model';
import { ResultFilterPipe } from './shared/result-filter.pipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [ResultFilterPipe],
})
export class MainPageComponent implements OnInit {
  public videoItems: Item[] | undefined;

  public filterString: string = '';

  public constructor(public searchHandlerService: SearchHandlerService) {
    this.searchHandlerService.responseAnnounced$.subscribe(
      (res: Item[] | undefined) => {
        this.videoItems = res;
      }
    );

    this.searchHandlerService.filterStringChanged$.subscribe((str: string) => {
      this.filterString = str;
    });
  }

  public ngOnInit(): void {
    this.videoItems = this.searchHandlerService.sortedData;
  }
}
