import { Injectable } from '@angular/core';
import { Response, Item } from './response.model';
import response from '../../assets/response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchHandlerService {
  public responseData: Response | null = response;

  public sortedData: Item[] | null = response.items;

  public isIncreasingValues: boolean = false;
  // constructor() { }

  public sortbyDate(): void {
    this.sortedData = response.items;
    this.sortedData?.sort((a, b) => {
      return this.isIncreasingValues
        ? new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()
        : new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime();
    });
  }

  public sortByCountOfViews(): void {
    this.sortedData = response.items;
    this.sortedData?.sort((a, b) => {
      const aCountOfview: number = Number(a.statistics.viewCount);
      const bCountOfview: number = Number(b.statistics.viewCount);

      return this.isIncreasingValues
        ? aCountOfview - bCountOfview
        : bCountOfview - aCountOfview;
    });
  }
}
