import { Component } from '@angular/core';
import { FetchDataService } from 'src/app/shared/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public constructor(private fetchDataService: FetchDataService) {}

  public fetchResponseResults(): void {
    this.fetchDataService.getResponseData();
  }
}
