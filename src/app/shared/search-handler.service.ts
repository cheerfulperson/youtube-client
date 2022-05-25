import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Response, Item } from './response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchHandlerService {
  public responseData: Response | null = null;

  public sortedData: Item[] | undefined = this.responseData?.items;

  public isIncreasingValues: boolean = false;

  private responseAnnouncedSource = new Subject<Item[] | undefined>();

  public responseAnnounced$ = this.responseAnnouncedSource.asObservable();

  private filterStringChangedSource = new Subject<string>();

  public filterStringChanged$ = this.filterStringChangedSource.asObservable();

  public filterString: string = '';

  public changeFilterString(str: string): void {
    this.filterString = str;
    this.filterStringChangedSource.next(str);
  }

  public insertResponse(res: Response): void {
    this.responseData = res;
    this.sortedData = this.responseData.items;
    this.responseAnnouncedSource.next(this.sortedData);
  }

  public sortbyDate(): void {
    this.sortedData = this.responseData?.items;
    this.sortedData?.sort((a, b) => {
      return this.isIncreasingValues
        ? new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()
        : new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime();
    });
    this.responseAnnouncedSource.next(this.sortedData);
  }

  public sortByCountOfViews(): void {
    this.sortedData = this.responseData?.items;
    this.sortedData?.sort((a, b) => {
      const aCountOfview: number = Number(a.statistics.viewCount);
      const bCountOfview: number = Number(b.statistics.viewCount);

      return this.isIncreasingValues
        ? aCountOfview - bCountOfview
        : bCountOfview - aCountOfview;
    });
    this.responseAnnouncedSource.next(this.sortedData);
  }
}
